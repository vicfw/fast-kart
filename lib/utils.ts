import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import CryptoJS from "crypto-js";
import { userStateStorageKey } from "./constants/globalConstants";
import { log } from "console";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const encryptTokenAndSetLocalStorage = (token: string) => {
  const encryptedToken = CryptoJS.AES.encrypt(
    token,
    process.env.NEXT_PUBLIC_ENCRYPTION_KEY!
  ).toString();

  localStorage.setItem("token", encryptedToken);
};

export const decryptToken = () => {
  const encryptedToken = localStorage.getItem("token");

  if (!encryptedToken) return "";

  const decryptedToken = CryptoJS.AES.decrypt(
    encryptedToken,
    process.env.NEXT_PUBLIC_ENCRYPTION_KEY!
  ).toString(CryptoJS.enc.Utf8);

  return decryptedToken;
};
