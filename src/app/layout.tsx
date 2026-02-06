import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Learning Roadmap",
  description: "Master AI from fundamentals to practical applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
