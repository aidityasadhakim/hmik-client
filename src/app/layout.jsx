import "./globals.css";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/navbar/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
