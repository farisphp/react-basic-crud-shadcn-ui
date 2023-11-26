import * as z from "zod";
import api, { handleRequestError } from "@/libs/api";

import { formSchema } from "./schema";

export const login = async (props: z.infer<typeof formSchema>) => {
  try {
    const { data } = await api.post("/auth/login", { ...props });
    return data;
  } catch (error) {
    return handleRequestError(error);
  }
};
