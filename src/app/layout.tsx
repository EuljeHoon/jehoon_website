import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins'
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Jehoon Park - Portfolio",
  description: "Jehoon's personal portfolio showcasing projects and skills",
    icons: {
    icon: "/jehoon(H).ico",
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
  
}
