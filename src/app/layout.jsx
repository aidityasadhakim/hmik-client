import "./globals.css";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Head from "next/head";
import Headers from "./head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
