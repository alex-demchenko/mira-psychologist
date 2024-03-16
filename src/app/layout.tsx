import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mira Koda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={cn("bg-orange-200", inter.className)}>
        <header className="mx-auto mt-6 max-w-[1200px] flex justify-between">
          <div>@mira_koda</div>
          <div className="flex gap-4">
            <div>Обо мне</div>
            <div>С чем работаю</div>
            <div>Видео</div>
            <div>Отзывы</div>
            <div>Стоимость</div>
          </div>
          <div>
            <a href="https://t.me/mira_koda">
              <svg
                role="presentation"
                width="30px"
                height="30px"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}