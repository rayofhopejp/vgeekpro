import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usaneko Large",
  description: "22歳東大卒新人セキュリティスペシャリストVTuber「うさねこらーじ」の公式サイトです。",
  metadataBase:
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? new URL("https://usaneko-xlarge.com")
    : undefined,
  openGraph: { images: "/others/shoukai_2.png" },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
