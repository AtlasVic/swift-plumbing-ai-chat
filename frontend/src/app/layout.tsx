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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}