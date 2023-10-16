import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "لطفا ایمیل خود را وارد نمایید" })
    .email({ message: "یک ایمیل معتبر وارد نمایید" }),
  password: z
    .string({ required_error: "لطفا یک رمز عبور وارد نمایید." })
    .min(6, {
      message: "حداقل مقدار اسم شما باید 6 کاراکتر باشد",
    }),
});
