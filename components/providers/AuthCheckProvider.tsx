"use client";

import { userStateStorageKey } from "@/lib/constants/globalConstants";
import { useUserStore } from "@/lib/store/userStore";
import { useEffect } from "react";

const AuthCheckProvider = () => {
  const { removeUser, addUser } = useUserStore((state) => state);
  useEffect(() => {
    const storage = localStorage.getItem(userStateStorageKey);
    const parseStorage = JSON.parse(storage ?? "");
    const user = parseStorage.state.user;
    const expiredAt = parseStorage.state.user.expiredAt;

    const isExp = new Date(expiredAt) <= new Date();
    if (isExp) {
      localStorage.removeItem(userStateStorageKey);
      removeUser();
    } else {
      addUser(user);
    }
  }, []);

  return null;
};

export default AuthCheckProvider;
