import type { Metadata } from "next";
import React from "react";
import localFont from "next/font/local";
import "./globals.css";

const handicrafts = localFont({
  src: [
    {
      path: "../public/fonts/Handicrafts-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Handicrafts-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-handicrafts",
});

export const metadata: Metadata = {
  title: "Tabayun",
  description: "Tabayun Frontend Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${handicrafts.variable} font-sans`}>{children}</body>
    </html>
  );
}
