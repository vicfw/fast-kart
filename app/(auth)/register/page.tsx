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
import { useRegister } from "@/hooks/pageHooks/useRegister";
import { appName } from "@/lib/constants/appName";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  const { get, set, on } = useRegister();

  return (
    <>
      <Head>
        <title>{`${appName} | ثبت نام`}</title>
      </Head>
      <div className="w-[80%] flex h-[80%] items-start">
        {/* photo */}
        <div className="hidden lg:flex flex-1 justify-center items-center h-full">
          <div className="relative h-[60%] w-[60%]">
            <Image
              src="/images/sign-up.png"
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
            <h3 className="text-2xl">به فست کارت خوش آمدید</h3>
            <p className="text-gray-400 my-4">ورود به حساب کاربری</p>
            <Form {...get.form}>
              <form
                onSubmit={get.form.handleSubmit(on.onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={get.form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام</FormLabel>
                      <FormControl>
                        <Input placeholder="نام" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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

                <FormField
                  control={get.form.control}
                  name="check"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                            <span>
                              <span className="text-primary">شرایط</span> و
                              <span className="text-primary">قوانین</span> را
                              میپذیرم.
                            </span>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full" type="submit">
                  ثبت نام
                </Button>
              </form>
            </Form>
            <Separator className="my-4 bg-black w-3/4 mx-auto" />
            <div className="space-y-3">
              <Button className="w-full">ثبت نام با حساب گوگل</Button>
              <Button className="w-full">ثبت نام با حساب فیسبوک</Button>
            </div>
            <Separator className="my-4 bg-black w-3/4 mx-auto" />
            <div className="text-center">
              <p className="mb-1">حساب کاربری دارید ؟</p>
              <Link href="/login">
                <span className="text-primary">وارد شوید</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
