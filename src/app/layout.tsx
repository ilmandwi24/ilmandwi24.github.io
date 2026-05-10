import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Footer from "./components/layout/footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ilmandwi24.github.io/"),
  title: "Ilman Dwi Portofolio",
  description: "Portofolio Ilman Dwi Website Developer",

  keywords: ["Ilman", "Ilman Dwi", "Portofolio", "Website Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <Header/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
