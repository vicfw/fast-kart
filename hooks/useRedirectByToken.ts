import { decryptToken } from "@/lib/common/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRedirectByToken = () => {
  const router = useRouter();

  useEffect(() => {
    const token = decryptToken();

    if (token) {
      router.replace("/");
    }
  });
};
