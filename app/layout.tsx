import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "VGeek - ぶいぎーく！",
  description: "IT 系 VTuber グループ「ぶいぎーく！」の公式サイトです。",
  metadataBase: new URL("https://vgeekpro.com"),
  openGraph: {images: "/others/logo.webp"},
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
    <body className={`${inter.className} bg-stone-600 text-white`}>
    {children}
    </body>
    </html>
  );
}

/* NOTE: html 要素の lang 属性: 日本語 => ja, 英語 => en になるようにします */

