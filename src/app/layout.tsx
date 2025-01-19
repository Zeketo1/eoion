import type { Metadata } from "next";
import React from 'react';
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
  title: 'Eoion LTD - Building Innovative SaaS Solutions',
  description: 'Eoion LTD is a leading technology company specializing in building and scaling innovative SaaS products. We provide custom software development, enterprise solutions, and digital transformation services.',
  openGraph: {
    title: 'Eoion LTD - Building Innovative SaaS Solutions',
    description: 'Leading technology company specializing in SaaS development and digital transformation',
    url: 'https://eoion-ltd.com',
    siteName: 'Eoion LTD',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

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
