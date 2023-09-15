import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Super True News",
  description: "The news forum that you can definitely trust!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="bg-gray-950">
      <body className={inter.className}>
        <Navbar />
        <main className="flex justify-center bg-gray-950">{children}</main>
      </body>
    </html>
  );
}
