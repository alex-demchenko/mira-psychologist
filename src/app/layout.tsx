import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/utils/cn";
import { textFont } from "./fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Мира Кода Психолог",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={cn("bg-orange-200", textFont.className)}>
        <Header />

        {children}

        <footer className="h-[200px] bg-gray-200"></footer>
      </body>
    </html>
  );
}
