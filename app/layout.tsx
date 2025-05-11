import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import CursorProvider from '@/components/CursorProvider';

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
  // Your viewport configuration here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Preload cursor images for better performance */}
        <link rel="preload" href="/cursor-sniper.png" as="image" />
        <link rel="preload" href="/cursor-sniper-fire.png" as="image" />
      </head>
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          "bg-[length:300%_300%] bg-no-repeat animate-bg-slide",
          "bg-[linear-gradient(to_bottom_right,_#1B0F3B,_#1B0F3B,_#432371,_#6E2FB4,_#1B0F3B)]",
          "cursor-none" // Hide default cursor
        )}
      >
        <Providers themeProps={{ attribute: "class" }}>
          {/* CursorProvider handles the dynamic import of CustomCursor */}
          <CursorProvider />
          
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://x.com/moonadswap"
                title="heroui.com homepage"
              >
                <p className="text-primary">MoonadSwap</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}