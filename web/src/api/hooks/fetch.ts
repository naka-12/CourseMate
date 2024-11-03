import { credFetch } from "~/firebase/auth/lib";

export async function fetchAuthorized(url: string): Promise<unknown> {
  const res = await credFetch("GET", url);
  if (!res.ok) throw new Error("Response was not ok.");
  const val = await res.json();
  return val;
}
