import type { Metadata } from "next";
import Head from "next/head";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aroha (Planning - Design - Production)",
  description:
    "Aroha, based in Hyderabad, is a premier event planning company renowned for its creative and personalized approach. We specialize in themed decorations for a variety of events, including birthdays, housewarmings, cradle ceremonies, saree ceremonies, and anniversaries. Our services extend beyond decorations to include celebrity management, customized gifts, social events, brand promotion, production house services, themed parties, and comprehensive entertainment solutions. Aroha is dedicated to making each event unique and memorable, tailored to our clients' specific needs and preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="app">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
