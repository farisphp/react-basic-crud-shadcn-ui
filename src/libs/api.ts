import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from "axios";
import config from "@/config";
import { Cookies } from "react-cookie";

const instance = axios.create({
  baseURL: config.API_HOST,
  timeout: 40000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = new Cookies().get("accessToken");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (token) config.headers!["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

export const fetcher = async (url: string) => {
  return instance.get(url).then((res: AxiosResponse) => {
    if (!res.data.success && !res?.data) {
      throw Error(res.data.message);
    }

    return res.data;
  });
};

export const handleRequestError = (error: unknown) => {
  const defaultError = "Oops! Something went wrong, please try again later.";
  if (isAxiosError(error)) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return { error: error?.response?.data?.error || defaultError };
  } else {
    // Something happened in setting up the request that triggered an Error
    return { error: defaultError };
  }
};

export default instance;
