import * as z from "zod";

import api, { handleRequestError } from "@/libs/api";
import { userFormSchema } from "@/schemas/user-schema";

export const getAllUsers = async (page: number, size: number) => {
  try {
    const { data } = await api.get(`/users?page=${page}&size=${size}`);
    return data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const createUser = async (body: z.infer<typeof userFormSchema>) => {
  try {
    const { data } = await api.post(`/users`, body);
    return data;
  } catch (error) {
    return handleRequestError(error);
  }
};
