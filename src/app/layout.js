import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});


export const metadata = {
  title: "Hubble - Landing Page SaaS",
  description: "Effortlessly manage your ecom empire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
