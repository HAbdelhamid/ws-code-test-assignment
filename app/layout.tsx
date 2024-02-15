import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "W&S | Quote of the day",
  description: "Generate a random quote of the day",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`h-screen flex flex-col justify-between ${inter.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
