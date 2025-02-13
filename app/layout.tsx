import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";

export const metadata: Metadata = {
  title: "هم خدمتی",
  description: "هم خدمتی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiased font-yekan bg-secondary-700`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
