import api, { handleRequestError } from "@/libs/api";

export const getAllUsers = async (page: number, size: number) => {
  try {
    const { data } = await api.get(`/users?page=${page}&size=${size}`);
    return data;
  } catch (error) {
    return handleRequestError(error);
  }
};
