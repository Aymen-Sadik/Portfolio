import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AS Portfolio",
  description: "Personal portfolio showcasing my skills, projects, and experience in web development.",
  keywords: ["Portfolio", "Web Development", "Frontend", "Backend", "Full Stack", "React", "Next.js"],
  authors: [{ name: "Aymen Sadik" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "AS Portfolio",
    description: "Personal portfolio showcasing my skills and projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AS Portfolio",
    description: "Personal portfolio showcasing my skills and projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
