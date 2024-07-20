import { outfit } from "@/lib/fonts/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little Learners",
  description: "Official website for Little Learners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-primary-97`}>{children}</body>
    </html>
  );
}
