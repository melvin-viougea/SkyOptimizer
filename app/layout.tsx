import React from "react";
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SkyOptimizer",
  description: "SkyOptimizer is a web application to group the data of player while giving indications of progress like the slash ff command of the SkyHanni mod, but with the purpose of integrating all skills, as well as all classes for the combat side, with a place dedicated to the optimization of accessory, a guide to make its progress better and why not in the future integer options BZ or AH",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary`}
    >
    {children}
    </body>
    </html>
  );
}
