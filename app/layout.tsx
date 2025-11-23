import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project ATLAS | Elite Technical Teams for Critical Problems",
  description: "Deploy an ATLAS team. Problem solved. Elite operators delivering fixed-price technical solutions for defense, space, and government contractors.",
  keywords: ["technical consulting", "defense contractors", "elite teams", "fixed-price SOW", "government contracting"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
