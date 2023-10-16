import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full bg-auth-image bg-no-repeat bg-cover flex justify-center items-center">
      {children}
    </section>
  );
};

export default AuthLayout;
