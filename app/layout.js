import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-900 dark:text-yellow-100 transition-all`}>
        <Navbar />
        <div className="m-auto p-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
