import { parse, stringify } from "devalue";
import { onMount } from "svelte";
import { readable, writable, type Readable, type Writable } from "svelte/store";
import type { ZodSchema } from "zod";

// while using previous cache and (may or may not) waiting for fetch success
type Stale<T> = {
  data: T;
  current: "stale";
  error: null;
};
// only occurs on first load.
type Loading = {
  data: null;
  current: "loading";
  error: null;
};
// success. is the latest data.
type Success<T> = {
  data: T;
  current: "success";
  error: null;
};
// first load AND fetching failed
type Failed = {
  data: null;
  current: "error";
  error: Error;
};

export type State<T> = Stale<T> | Loading | Success<T> | Failed;
export type Hook<T> = {
  state: Writable<State<T>>;
  reload: () => void;
};

namespace consts {
  export const loading: Loading = {
    data: null,
    current: "loading",
    error: null,
  };
}
const SWR_PREFIX = "CourseMate::useSWR::";
// todo: consider using useSWR Hook from external instead.
/**
 use static function instead of inline arrow function
 to prevent unnecessary useCallback calls.
 cacheKey **MUST** be unique in all the codebase, otherwise the cache will interfere each other.
 (I recommend using URL Path, friend's name + unique prefix, or randomly generate static string.)
 **/
export function createSWR<T>(
  cacheKey: string,
  fetcher: () => Promise<T>,
  schema: Zod.Schema<T>,
): Hook<T> {
  const CACHE_KEY = SWR_PREFIX + cacheKey;
  const state = writable<State<T>>(consts.loading, (set) => {
    set(consts.loading);
    onMount(() => {
      set(loadOldData(CACHE_KEY, schema));
    });
  });
  state.subscribe((val) => {
    localStorage.setItem(CACHE_KEY, stringify(val));
  });

  async function reload() {
    state.update((current) =>
      current.data === null
        ? consts.loading
        : {
            current: "stale",
            data: current.data,
            error: null,
          },
    );

    try {
      const data = await fetcher();
      const result = schema.safeParse(data);
      if (!result.success) {
        console.error(
          `useSWR: Schema Parse Error | in incoming data | at schema ${CACHE_KEY} | Error: ${result.error.message}`,
        );
        console.log("data:", data);
      }
      state.set({
        data: data,
        current: "success",
        error: null,
      });
    } catch (e) {
      state.set({
        data: null,
        current: "error",
        error: e as Error,
      });
    }
  }

  onMount(() => {
    go(reload);
  });

  return {
    state,
    reload,
  };
}

function loadOldData<T>(
  CACHE_KEY: string,
  schema: ZodSchema<T>,
): Loading | Stale<T> {
  const oldData = localStorage.getItem(CACHE_KEY);
  if (oldData) {
    try {
      const data = parse(oldData);
      const parsed = schema.safeParse(data);
      if (!parsed.success) {
        console.error(
          `useSWR: zodParseError | in stale data | at schema ${CACHE_KEY} | ${parsed.error}`,
        );
        console.log("data:", data);
        // because loading old data isn't critical to the application and wrong stale data may cause several problems,
        throw "";
      }
      return {
        current: "stale",
        data,
        error: null,
      };
    } catch {}
  }
  return consts.loading;
}

function go(fn: () => Promise<void>) {
  fn();
}
