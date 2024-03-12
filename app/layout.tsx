import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CVIC Iidabashi  ",
  description: "CVIC Iidabashi Webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen text-center">
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
