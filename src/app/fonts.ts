// app/fonts.ts
import { Rubik, Roboto_Mono } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto_mono",
});

export const fonts = {
  rubik,
  roboto_mono,
};
