import { useToast } from "@/components/ui/use-toast";
import { loginUserApi } from "@/lib/api/user";
import { decryptToken, encryptTokenAndSetLocalStorage } from "@/lib/utils";
import { LOGIN_INCORRECT_CREDENTIALS } from "@/lib/constants/serverErrorMesages";
import { useUserStore } from "@/lib/store/userStore";
import { loginSchema } from "@/utils/validations/auth/login-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRedirectByToken } from "../useRedirectByToken";

export const useLogin = () => {
  const { addUser } = useUserStore((state) => state);
  const router = useRouter();
  const { toast } = useToast();

  // redirect if no token set
  useRedirectByToken();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginUser = useMutation({
    mutationFn: async (data: { email: string; password: string }) =>
      await loginUserApi(data),

    onSuccess: ({ data }) => {
      encryptTokenAndSetLocalStorage(data.authorization.token);
      addUser({ ...data.user, expiredAt: data.authorization.expires_at });
      router.replace("/");
    },
    onError: ({ response }: any) => {
      toast({
        description:
          LOGIN_INCORRECT_CREDENTIALS.eng === response.data[0]
            ? LOGIN_INCORRECT_CREDENTIALS.fa
            : response.data[0],

        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    loginUser.mutate(values);
  }

  return {
    get: { form, loading: loginUser.isLoading },
    set: {},
    on: { onSubmit },
  };
};
