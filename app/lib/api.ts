import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "cinerate-web.05052023.xyz",
});

export async function fetcher(url: string) {
  return await axiosInstance.get(url).then((res) => res.data);
}
