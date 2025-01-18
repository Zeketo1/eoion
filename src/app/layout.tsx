import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/globals.css";
import "../assets/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Eoion LTD - Building The Future of SaaS</title>
      <meta name="title" content="Eoion LTD - Building The Future of SaaS" />
      <meta name="description" content="A tech company focused on building and scaling innovative SaaS products for internal ventures and external clients." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://eoion-ltd.com/" />
      <meta property="og:title" content="Eoion LTD - Building The Future of SaaS" />
      <meta property="og:description" content="A tech company focused on building and scaling innovative SaaS products for internal ventures and external clients." />
      <meta property="og:image" content="https://eoion-ltd.com/banner.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://eoion-ltd.com/" />
      <meta property="twitter:title" content="Eoion LTD - Building The Future of SaaS" />
      <meta property="twitter:description" content="A tech company focused on building and scaling innovative SaaS products for internal ventures and external clients." />
      <meta property="twitter:image" content="https://eoion-ltd.com/banner.jpg" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
