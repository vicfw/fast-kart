import { useToast } from "@/components/ui/use-toast";
import { createUserApi } from "@/lib/api/user";
import { REGISTER_DUPLICATE_EMAIL } from "@/lib/constants/serverErrorMesages";
import { registerSchema } from "@/utils/validations/auth/register-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRedirectByToken } from "../useRedirectByToken";

export const useRegister = () => {
  const { toast } = useToast();
  const router = useRouter();
  // redirect if no token set
  useRedirectByToken();

  const createUser = useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      password: string;
    }) => await createUserApi(data),
    onSuccess: (data) => {
      toast({ description: "کاربری شما با موفقیت ساخته شد" });
      router.replace("/login");
    },
    onError: (error: any) => {
      toast({
        description:
          error.response.data[0] === REGISTER_DUPLICATE_EMAIL.eng
            ? REGISTER_DUPLICATE_EMAIL.fa
            : error.response.data[0],
        variant: "destructive",
      });
    },
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      check: false,
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    createUser.mutate(values);
  }

  return { get: { form }, set: {}, on: { onSubmit } };
};
