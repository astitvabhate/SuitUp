import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuitUp",
  description: "Evidence-grounded case memory for lawyers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        <header className="border-b bg-white">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              SuitUp
            </Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6">{children}</main>
        <footer className="border-t bg-white">
          <p className="mx-auto max-w-4xl px-4 py-3 text-xs text-slate-500">
            SuitUp is an AI-powered document research and case-memory assistant. It is not a
            substitute for professional legal judgment or legal advice.
          </p>
        </footer>
      </body>
    </html>
  );
}
