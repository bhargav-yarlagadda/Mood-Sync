import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import UserWrapper from "@/components/UserWrapper";

import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mood Sync",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider
        
          appearance={{
            baseTheme: [shadesOfPurple,neobrutalism],
            variables: { colorPrimary: "red" },
            signIn: {
              baseTheme: [shadesOfPurple],
              variables: { colorPrimary: "red" },
            },
          }}
        >

            <div className="w-full">
            <Navbar/>
            {children}
            </div>
           
        </ClerkProvider>
      </body>
    </html>
  );
}
