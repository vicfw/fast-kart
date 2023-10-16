"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLogin } from "@/hooks/pageHooks/useLogin";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const { get, set, on } = useLogin();

  return (
    <div className="w-[80%] flex h-[80%] items-start">
      {/* photo */}
      <div className="hidden lg:flex flex-1 justify-center items-center h-full">
        <div className="relative h-[60%] w-[60%]">
          <Image
            src="/images/log-in.png"
            alt="login"
            className="h-full w-full "
            fill
            quality={100}
          />
        </div>
      </div>
      {/* login */}
      <div className="flex flex-1 justify-center items-center text-right">
        <div className="bg-gray-200 py-10 px-7 rounded-md w-full h-full lg:h-[95%] md:w-[95%]  lg:w-[65%] ">
          <h1 className="text-2xl">به فست کارت خوش آمدید</h1>
          <p className="text-gray-400 my-4">ورود به حساب کاربری</p>
          <Form {...get.form}>
            <form
              onSubmit={get.form.handleSubmit(on.onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={get.form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input placeholder="ایمیل" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={get.form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رمز عبور</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="رمز عبور"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <p className="text-sm text-md">من را به خاطر بسپار</p>
                </div>

                <p className="text-sm text-md">رمز عبور خود را فراموش کردم</p>
              </div>

              <Button className="w-full" type="submit">
                ورود
              </Button>
            </form>
          </Form>
          <Separator className="my-4 bg-black w-3/4 mx-auto" />
          <div className="space-y-3">
            <Button className="w-full">ورود با حساب گوگل</Button>
            <Button className="w-full">ورود با حساب فیسبوک</Button>
          </div>
          <Separator className="my-4 bg-black w-3/4 mx-auto" />
          <div className="text-center">
            <p className="mb-1">حساب کاربری ندارید ؟</p>
            <Link href="register">
              <span className="text-primary">ثبت نام کنید</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
