

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/widgets/navbar";
import Footer from "@/components/widgets/footer";
import { SessionProvider } from "./auth/session-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senior hub",
  description:
    "Senior Hub is a web application offering a dedicated platform for senior users to explore wellness tips, plan daily activities, and connect with a supportive community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="relative flex flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
