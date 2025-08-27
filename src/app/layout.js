import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Stratify – AI-Powered Marketing Strategy Generator",
  description:
    "Stratify helps startups and creators generate tailored marketing strategies with AI. Build campaigns, optimize reach, and grow smarter.",
  keywords: [
    "Stratify",
    "AI marketing",
    "marketing strategy",
    "startup growth",
    "campaign generator",
    "growth tools",
  ],
  icons: {
    icon: "/icon.svg",   // favicon
    apple: "/icon.png",  // iOS home screen
  },
  openGraph: {
    title: "Stratify – AI-Powered Marketing Strategy Generator",
    description:
      "Generate powerful marketing strategies with Stratify. AI-driven insights to help startups and creators grow faster.",
    url: "https://your-domain.com", // replace with actual domain
    siteName: "Stratify",
    images: [
      {
        url: "https://your-domain.com/og-image.png", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Stratify – AI Marketing Strategy Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratify – AI-Powered Marketing Strategy Generator",
    description:
      "Stratify helps startups and creators generate tailored marketing strategies with AI. Build campaigns, optimize reach, and grow smarter.",
    images: ["https://your-domain.com/og-image.png"], // replace with actual OG image
    creator: "@YourTwitterHandle", // replace with your Twitter/X handle
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
