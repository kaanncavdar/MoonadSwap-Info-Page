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
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { TwitterIcon, Logo } from "@/components/icons";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className={clsx(
        "z-50 bg-gradient-to-b from-[#1B0F3B]/90 to-[#1B0F3B]/70 backdrop-blur-md shadow-md",
        "text-white drop-shadow-md transition-all duration-500"
      )}
    >
      {/* Left Logo */}
      <NavbarContent justify="start">
        <NavbarBrand as="div" className="flex items-center gap-2">
          <NextLink href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-lg">MoonadSwap</span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Mid - Desktop */}
      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              href={item.href}
              className="text-gray-300 drop-shadow-md hover:text-violet-300 transition-colors font-medium"
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}

        {/* Docs link */}
        <NavbarItem>
          <a
            href="https://t.me/moonswapxbot"
            target="_blank"
            rel="noopener noreferrer"
            /* group = to hover children together */
            className="group flex items-center gap-1 text-gray-300 drop-shadow-md
               hover:text-violet-300 transition-colors font-medium"
          >
            {/* Text */}
            <span className="group-hover:underline">Docs</span>

            {/* Arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              /* starts hidden – becomes visible and moves slightly right on hover */
              className="w-3 h-3 opacity-0 translate-x-[-4px]
                 group-hover:opacity-100 group-hover:translate-x-0
                 transition-all duration-200"
            >
              <path
                fillRule="evenodd"
                d="M4.97 1.97a.75.75 0 011.06 0L11.53 7.47a.75.75 0 010 1.06L6.03 14.03a.75.75 0 11-1.06-1.06L9.44 8 4.97 3.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </NavbarItem>
      </NavbarContent>

      {/* Right Side - Social + Bot Button */}
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Twitter"
            href={siteConfig.links.twitter}
            className="text-gray-300 drop-shadow-md hover:text-violet-300"
          >
            <FaXTwitter />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://t.me/moonswapxbot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-violet-500 px-3 py-2 rounded-xl shadow-md hover:bg-violet-600 transition-all"
          >
            {/* Telegram icon circle */}
            <div className="bg-white p-1.5 rounded-full flex items-center justify-center">
              <FaTelegramPlane className="text-violet-500 text-xl" />
            </div>

            {/* Text block on the right */}
            <div className="flex flex-col leading-tight">
              <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full self-start mb-1">
                AVAILABLE
              </span>
              <span className="text-white font-bold text-sm -mt-1">
                TELEGRAM
              </span>
            </div>
          </Link>
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden text-white" />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-[#1B0F3B]/90 backdrop-blur-md text-white">
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
            href="https://t.me/moonswapxbot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-violet-500 px-4 py-2 rounded-xl shadow-md hover:bg-violet-600 transition-all"
          >
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <FaTelegramPlane className="text-white text-lg" />
              Launch Bot
            </div>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};