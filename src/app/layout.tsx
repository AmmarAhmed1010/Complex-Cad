import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AroraBackground from "@/components/AroraBackground";
import Cards from "@/components/Cards";
import Cards3 from "@/components/Cards3";

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
      <body className={inter.className}>
        <AroraBackground/>
       <Navbar/>
       <Cards/>
       <Cards3/>
        {children}
        </body>
    </html>
  );
}
