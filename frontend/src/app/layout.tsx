import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swift Plumbing | Professional Plumbers Near You",
  description: "Professional plumbing services you can count on. Fast, reliable, and upfront pricing on every job. Available 24/7 for emergencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}