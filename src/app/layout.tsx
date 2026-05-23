import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: "Prestige Polish LLC | Premium Pressure Washing & Mobile Carwash",
  description:
    "Premium pressure washing and mobile carwash services in the Bronx, NY. Available 7 days a week. Residential and commercial.",
  keywords: [
    "pressure washing",
    "mobile carwash",
    "Bronx NY",
    "Prestige Polish",
    "commercial cleaning",
    "residential cleaning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="antialiased safe-x">{children}</body>
    </html>
  );
}
