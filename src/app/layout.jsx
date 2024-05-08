import { Roboto } from "next/font/google";
import Header from '../components/Header.jsx'
import GoogleAnalytics from "@/components/GoogleAnalytics.jsx";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"] , weight:['300', '400', '500']});

export const metadata = {
  title: "HAKKINIZLA UCUN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`bg-black m-0 ${roboto.className}`}>
        <Header />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
