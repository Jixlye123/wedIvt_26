import type { Metadata } from "next";
import { Playfair_Display, Alex_Brush, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nipuni & Samith's Wedding Invitation",
  description: "You are cordially invited to celebrate the wedding of Nipuni Dilthara & Samith Lakshan on June 26, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${alexBrush.variable} ${cormorant.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-hidden bg-[#0d0d0d] text-[#eaeaea] select-none touch-none">
        {children}
      </body>
    </html>
  );
}
