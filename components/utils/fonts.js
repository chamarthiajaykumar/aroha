import { Playfair_Display, Raleway } from "next/font/google";

const playfair_init = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfairdisplay",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const raleway_init = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const playfairdisplay = playfair_init.variable;
export const raleway = raleway_init.variable;
