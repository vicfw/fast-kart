import * as z from "zod";

export const registerSchema = z.object({
  name: z.string({ required_error: "لطفا نام خود را وارد نمایید" }).min(2, {
    message: "حداقل مقدار اسم شما باید 2 کاراکتر باشد",
  }),
  email: z
    .string({ required_error: "لطفا ایمیل خود را وارد نمایید" })
    .email({ message: "یک ایمیل معتبر وارد نمایید" }),
  password: z
    .string({ required_error: "لطفا یک رمز عبور وارد نمایید." })
    .min(6, {
      message: "حداقل مقدار رمز عبور شما باید 6 کاراکتر باشد",
    }),
  check: z
    .boolean()
    .default(false)
    .refine((val) => val, { message: "لطفا تایید کنید" }),
});
