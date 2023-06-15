export const API_URL = "https://cinerate-web.05052023.xyz";

export function apiUrl(relativePath: string) {
  return API_URL.concat(relativePath);
}
