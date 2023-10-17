"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useMainHeader } from "@/hooks/pageHooks/useMainHeader";
import { cn } from "@/lib/utils";
import { Heart, Search, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "./ui/badge";

const MainHeader = () => {
  const { get, set, on } = useMainHeader();
  return (
    <header className="relative flex justify-between py-4 items-center">
      <section
        className={cn(
          get.showMobileSearch ? "block" : "hidden",
          "absolute left-0 top-4 w-full z-10 "
        )}
      >
        <div className="relative">
          <Input
            placeholder="جستجو در فست کارت ..."
            className="outline-none focus-visible:ring-0 focus-visible:ring-transparent "
          />

          <X
            className="absolute left-3 top-[50%] translate-y-[-50%] cursor-pointer"
            onClick={on.handleToggleMobileSearch}
          />
        </div>
      </section>
      <section className="relative  w-[45%] md:w-36 h-10">
        <Image src="/images/1.png" alt="logo" fill />
      </section>

      <section className="w-[50%] hidden  lg:flex justify-center">
        <div className=" relative w-[70%]">
          <Input
            placeholder="جستجو در فست کارت ..."
            className="outline-none focus-visible:ring-0 focus-visible:ring-transparent "
          />

          <Search className="absolute left-3 top-[50%] translate-y-[-50%] cursor-pointer" />
        </div>
      </section>
      <section className="flex gap-3">
        <div className="flex">
          <Search
            className="ml-2 text-main lg:hidden"
            onClick={on.handleToggleMobileSearch}
            size="26px"
          />
          <Separator
            orientation="vertical"
            className="bg-black h-full lg:hidden"
          />
        </div>
        <div className="flex">
          <Heart className="ml-2 text-main" size="26px" />
          <Separator orientation="vertical" className="bg-black h-full" />
        </div>

        <div className="flex relative">
          <ShoppingCart className="text-main" size="26px" />
          <Badge className="absolute left-[-10px] top-[-10px] bg-red-500 text-white w-1 flex items-center justify-center">
            10
          </Badge>
        </div>

        <div className="flex">
          <Separator orientation="vertical" className="bg-black " />
          <Popover>
            <PopoverTrigger asChild>
              <User className="text-main mr-2" size="26px" />
            </PopoverTrigger>
            <PopoverContent className="w-52">
              <div className="flex flex-col gap-2">
                <div>پروفایل</div>
                <Separator />
                <div>پروفایل</div>
                <Separator />
                <div>پروفایل</div>
              </div>
            </PopoverContent>
          </Popover>

          <span className="hidden lg:inline">حساب کاربری من</span>
        </div>
      </section>
    </header>
  );
};

export default MainHeader;
