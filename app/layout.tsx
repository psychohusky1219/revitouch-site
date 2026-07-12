import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.revitouch.com"),
  title: "ReviTouch | Medical Massage Therapy in New York City",
  description: "Personalized sports, deep tissue, Swedish, prenatal, hot stone massage and cupping therapy in New York City.",
  icons: { icon: "/images/logo.png" },
  openGraph: { title: "ReviTouch Massage Therapy", description: "Feel better. Move freely. Personalized massage therapy in New York City.", type: "website", images: [{ url: "/og-style3.png", width: 1200, height: 630, alt: "ReviTouch medical massage therapy in New York City" }] },
  twitter: { card: "summary_large_image", title: "ReviTouch Massage Therapy", description: "Feel better. Move freely.", images: ["/og-style3.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
