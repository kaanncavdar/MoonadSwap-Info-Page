import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import CursorProvider from "@/components/CursorProvider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preload" href="/cursor-sniper.png" as="image" />
        <link rel="preload" href="/cursor-sniper-fire.png" as="image" />
      </head>
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          "bg-[length:300%_300%] bg-no-repeat animate-bg-slide",
          "bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,_#1B0F3B_0deg,_#1B0F3B_67.5deg,_#432371_198.75deg,_#6E2FB4_250.88deg,_#1B0F3B_360deg)]"
        )}
      >
        <Analytics />
        <SpeedInsights/>
        <Providers themeProps={{ attribute: "class" }}>
          <CursorProvider />
          <div className="relative flex flex-col min-h-screen">
            <Navbar />            <main className="container mx-auto max-w-7xl pt-2 sm:pt-4 px-4 sm:px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
