import AuthCheckProvider from "@/components/providers/AuthCheckProvider";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { ToastProvider } from "@/components/providers/ToasterProvider";
import { appName } from "@/lib/constants/appName";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const iranSans = localFont({
  src: "../public/fonts/IRANSansWeb(FaNum).ttf",
  variable: "--font-iransans",
});

export const metadata: Metadata = {
  title: appName,
  description: "فست کارت",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={iranSans.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <ToastProvider />
        <AuthCheckProvider />
      </body>
    </html>
  );
}
