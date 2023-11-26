import { zodResolver } from "@hookform/resolvers/zod";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

import { formSchema } from "./schema";
import { login } from "./queries";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [_cookies, setCookie] = useCookies();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await login(values);
    if (res?.error) {
      form.setError("root", { type: "custom", message: res?.error });
    }

    setCookie("accessToken", res.access_token, { maxAge: res.expires_in });
    console.log("AFTER SET COOKIE", res);
    return navigate("/");
  }

  return { form, onSubmit };
};
