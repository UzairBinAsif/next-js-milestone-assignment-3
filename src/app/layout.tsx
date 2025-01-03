import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { ToggleContextProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milestone 3 - Infini Blogz",
  description: "Created by Uzair Bin Asif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
          <Navbar />
        <div id="t4" className="my-0 mx-5 sm:mx-10 md:mx-20 max-w-[1200px] self-center flex-1">
        {children}
        </div>
          <Footer />
      </body>
    </html>
  );
}
