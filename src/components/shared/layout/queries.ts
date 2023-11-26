import api, { handleRequestError } from "@/libs/api";

export const logout = async () => {
  try {
    const { data } = await api.post("/auth/logout");
    return data;
  } catch (error) {
    return handleRequestError(error);
  }
};
