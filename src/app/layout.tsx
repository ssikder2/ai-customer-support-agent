import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "DocuAgents - AI Customer Support",
  description: "Transform your documentation into an AI customer support agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="geist-sans geist-mono antialiased"
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
