import localFont from "next/font/local";

export const mPlus1CodeNerd = localFont({
  src: [
    {
      path: "../fonts/M+1CodeNerdFont-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/M+1CodeNerdFont-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mplus-1-code-nerd",
});
