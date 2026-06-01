import type { Metadata } from "next";
import { Playfair_Display, Alex_Brush, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://wed-ivt-26-wvmr.vercel.app/"; // update to your actual domain

export const metadata: Metadata = {
  title: "Nipuni & Samith's Wedding Invitation",
  description:
    "You are cordially invited to celebrate the wedding of Nipuni Dilthara & Samith Lakshan on Friday, June 26, 2026 at Grand Silver Ray, Rathnapura.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Nipuni & Samith's Wedding Invitation 💍",
    description:
      "Join us as we celebrate the marriage of Nipuni Dilthara & Samith Lakshan – June 26, 2026 · Grand Silver Ray, Rathnapura",
    url: BASE_URL,
    siteName: "Nipuni & Samith Wedding",
    images: [
      {
        url: "https://wed-ivt-26-wvmr.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nipuni & Samith Wedding",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nipuni & Samith's Wedding Invitation 💍",
    description:
      "Join us as we celebrate the marriage of Nipuni Dilthara & Samith Lakshan – June 26, 2026",
    images: ["https://wed-ivt-26-wvmr.vercel.app/og-image.png"],
  },
  manifest: "/manifest.json",
  themeColor: "#c9a96e",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "N & S Wedding",
  },
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
      <head>
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/photo_2026-05-29_23-50-58-removebg-preview.png" />

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/wedding_flowers_top.png" />
        <link rel="preload" as="image" href="/wedding_flowers_bottom.png" />
        <link rel="preload" as="image" href="/photo_2026-05-29_23-50-58-removebg-preview.png" />
      </head>
      <body className="min-h-full flex flex-col overflow-hidden bg-[#0d0d0d] text-[#eaeaea] select-none touch-none">
        {children}
      </body>
    </html>
  );
}
