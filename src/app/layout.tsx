import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "חופשות סביב אירועים | טיסות, מלונות והופעות במקום אחד",
  description:
    "תכננו את החופשה המושלמת סביב ההופעה או משחק הספורט שאתם אוהבים. טיסות, מלונות ואירועים — הכל במקום אחד.",
  keywords: [
    "חופשות",
    "הופעות באירופה",
    "טיסות זולות",
    "חבילות נופש",
    "ספורט באירופה",
    "כרטיסים להופעות",
  ],
  openGraph: {
    title: "חופשות סביב אירועים",
    description:
      "תכננו את החופשה המושלמת סביב ההופעה או משחק הספורט שאתם אוהבים.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <a href="#main-content" className="skip-link">
          דלג לתוכן הראשי
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
