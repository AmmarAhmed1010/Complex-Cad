import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AroraBackground from "@/components/AroraBackground";
import Cards from "@/components/Cards";
import Cards3 from "@/components/Cards3";
import LandingPage from "@/components/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {/* <LandingPage />
        <Cards3 /> */}
        {children}
      </body>
    </html>
  );
}
