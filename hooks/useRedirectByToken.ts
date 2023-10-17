import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRedirectByToken = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [router, token]);
};
