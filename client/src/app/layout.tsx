import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TransitionProvider } from "@/components/layout/TransitionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todana Design",
  description: "Todana Design Project",
  icons: {
    icon: "/assets/logo/logo_primary.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
          <Navbar />
          {children}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
