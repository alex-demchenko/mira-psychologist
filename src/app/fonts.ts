import { Inter, Philosopher } from "next/font/google";

export const textFont = Inter({ subsets: ["latin"] });
export const headerFont = Philosopher({
  subsets: ["cyrillic"],
  weight: "700",
});
