import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pragati Patil | Full Stack Software Engineer",
  description: "Premium developer portfolio for Pragati Patil featuring experience, skills, projects, and contact details.",
  openGraph: {
    title: "Pragati Patil | Full Stack Software Engineer",
    description: "Premium developer portfolio for Pragati Patil featuring experience, skills, projects, and contact details.",
    type: "website",
    url: "https://pragati.dev",
  },
  alternates: {
    canonical: "https://pragati.dev",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
