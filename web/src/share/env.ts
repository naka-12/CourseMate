function env<T extends string>(name: T): ImportMetaEnv[T] {
  const env = import.meta.env[name];
  if (!env)
    throw new Error(
      `failed to get env var ${name}: expecte non-empty string, got ${env}`,
    );
  return env;
}
export const API_ENDPOINT = env("VITE_API_ENDPOINT");
