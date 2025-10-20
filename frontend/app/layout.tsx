import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Match AI - Find Your Dream Job with AI-Powered Matching",
  description: "Discover your perfect career opportunity with Job Match AI. Our advanced AI technology matches your skills and preferences with the best job opportunities in South Africa.",
  keywords: "jobs, career, AI matching, employment, South Africa, job search, recruitment",
  openGraph: {
    title: "Job Match AI - Find Your Dream Job",
    description: "AI-powered job matching platform connecting talented professionals with their ideal opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}