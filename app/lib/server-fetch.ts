import "server-only";

const API_URL = "https://cinerate-web.05052023.xyz";

export async function serverFetch(url: string, options?: RequestInit) {
  const fullUrl = API_URL + url;
  const res = await fetch(fullUrl, options);
  return res.json();
}

export function serverPreload(url: string, options?: RequestInit) {
  void serverFetch(url, options);
}
