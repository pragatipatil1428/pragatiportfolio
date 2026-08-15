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
  description:
    "Full Stack Software Engineer portfolio featuring ContentHub, Minutely, and Spendly — SaaS platforms demonstrating payments, authentication, PostgreSQL/MongoDB, REST APIs, analytics, and modern React/Next.js development.",
  keywords: [
    "Pragati Patil",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "SaaS",
    "ContentHub",
    "Minutely",
    "Spendly",
    "Razorpay",
    "PostgreSQL",
    "MongoDB",
  ],
  openGraph: {
    title: "Pragati Patil | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer portfolio featuring ContentHub, Minutely, and Spendly — SaaS platforms demonstrating payments, authentication, PostgreSQL/MongoDB, REST APIs, analytics, and modern React/Next.js development.",
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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
