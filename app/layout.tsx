import "./css/style.css";

import { Inter } from "next/font/google";

import Header from "@/components/ui/header";
import Banner from "@/components/banner";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-Masjid.My",
  description:
    "E-Masjid.My: Sistem Masjid Untuk Semua. Ihsan dari warga Github.",
  openGraph: {
    title: "E-Masjid.My",
    description:
      "E-Masjid.My: Sistem Masjid Untuk Semua. Ihsan dari warga Github.",
    url: "https://e-masjid.my/",
    siteName: "E-Masjid",
    images: [
      {
        url: "https://cdn.e-masjid.my/images/emasjidmy-banner.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Masjid.MY",
    description:
      "E-Masjid.My: Sistem Masjid Untuk Semua. Ihsan dari warga Github.",
    images: ["https://cdn.e-masjid.my/images/emasjidmy-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  );
}
