import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { Response } from "@interface/common";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.JOOTUDIO_API_BASE_URL || "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "ko",
  },
  timeout: 30000,
});

// REQUEST
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401) {
      // token 갱신
      // const { status } = await axios.get('/api/kr/auth/refresh');
      // if (status === 200) return axios.request(originalRequest);
      // if (status === 401) return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

interface Request extends AxiosRequestConfig {
  url: string;
  body?: FormData;
  lang?: string;
}

export async function request<R>({
  method = "GET",
  url,
  params,
  lang = "ko",
}: Request) {
  let data;
  if (method !== "GET" && params) data = params;

  const { data: result } = await api.request<Response<R>>({
    method: method || "GET",
    url,
    headers: { "Accept-Language": lang },
    ...(data && { data }),
    ...(params && method === "GET" && { params }),
  });
  return result;
}

export async function formRequest<R>({ url, data, lang = "ko" }: Request) {
  const { data: result } = await api.request<Response<R>>({
    method: "POST",
    url,
    headers: { "Accept-Language": lang, "Content-Type": "multipart/form-data" },
    data,
  });
  return result;
}

export async function upsertTjChart<R>(data: any) {
  await api.request<Response<R>>({
    method: "POST",
    url: "api/song-chart/tj/upsert",
    data,
  });
}

export async function upsertKyChart<R>(data: any) {
  await api.request<Response<R>>({
    method: "POST",
    url: "api/song-chart/ky/upsert",
    data,
  });
}
