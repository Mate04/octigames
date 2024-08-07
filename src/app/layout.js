import { Inter } from "next/font/google";
import AdSense from "../components/AdSense";
import "./globals.css";
import NavBar from "../components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "octiGames",
  description: "Juegos Online Gratis", 
  icons: [
    {
      rel: "icon",
      href: "/favicon.png",
    },
  ]
};



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      </head>
      <body className={inter.className} >
        <div style={{ position: "fixed", width: "100vw", height: "100vh", top: 0, left: 0, right: 0, backgroundImage: `url("/background.jpeg")`, backgroundSize: "cover", zIndex: -1 }} />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
