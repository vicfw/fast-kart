import MainHeader from "@/components/MainHeader";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full px-7 md:px-20 lg:px-32 xl:px-30">
      <MainHeader />
      {children}
    </section>
  );
};

export default MainLayout;
