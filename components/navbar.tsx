"use client";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { TwitterIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className={clsx(
        "z-50 shadow-sm",
        "bg-[linear-gradient(to_bottom_right,_#1B0F3B,_#432371,_#7C3AED,_#d6d6e7,_#7C3AED,_#432371,_#1B0F3B)]",
        "bg-[length:400%_400%] animate-bg-slide-diagonal text-white border-b border-[#432371]"
      )}
    >
      {/* Sol Logo */}
      <NavbarContent justify="start">
        <NavbarBrand as="div" className="flex items-center gap-2">
          <NextLink href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-lg">{siteConfig.name}</span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Orta Menü - Masaüstü */}
      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              href={item.href}
              className="text-white hover:text-violet-300 transition-colors font-medium"
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Sağ İkonlar + Buton */}
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-white hover:text-violet-300" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://t.me/your_bot_username"
            color="secondary"
            radius="full"
            variant="shadow"
            className="px-5 font-semibold"
          >
            🚀 Launch Bot
          </Button>
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden text-white" />
      </NavbarContent>

      {/* Mobil Menü */}
      <NavbarMenu className="bg-[#1B0F3B] text-white">
        {siteConfig.navMenuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NextLink
              href={item.href}
              className="block py-2 text-lg hover:text-violet-400"
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            href="https://t.me/your_bot_username"
            className="text-violet-300 hover:underline font-medium"
          >
            🚀 Launch Bot
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
