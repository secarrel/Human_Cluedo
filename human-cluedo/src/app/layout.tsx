import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const quickSand = Quicksand({
  variable: "--quickSand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Human Cluedo",
  description: "Generate objectives for the human cluedo party game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.variable} ${quickSand.variable}`}>
        {children}
      </body>
    </html>
  );
}
