"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, Mail, X, ExternalLink } from "lucide-react";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

const Footer = () => {
  const [emailValue, setEmailValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmailValue("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-16 pb-8 relative bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Logo ve Bot Başlatma */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/MoonadSwap-NavLogo.png"
                alt="MoonadSwap Logo"
                width={64}
                height={64}
                className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-2"
              />
            </Link>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium text-lg">
                Lightning-Fast Swaps on Telegram
              </h3>
              <p className="text-gray-300 text-sm max-w-md">
                MoonadSwap is the Telegram-native DEX bot that turns "/buy" into
                instant, slippage-smart swaps on the Monad chain.
              </p>

              <a
                href=""
                target="_blank"
                onClick={(e) => e.preventDefault()}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 
                border border-cyan-500/30 hover:border-cyan-500/50 px-6 py-3 rounded-lg transition-all duration-300 w-fit"
              >
                <FaTelegram size={30} />
                <span className="font-medium">Launch Bot on Telegram</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Email Subscribe & Links */}
          <div className="flex flex-col items-end gap-8">
            {/* Email Form */}
            <form onSubmit={handleSubmit} className="w-full md:max-w-md">
              <h3 className="text-white font-medium mb-3 text-right">
                Get Updates
              </h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="Your email addres"
                  className="flex-1 bg-gray-800/30 text-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 border border-gray-700/50"
                  required
                />
                <button
                  type="submit"
                  className={`p-3 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isSubmitted
                      ? "bg-cyan-600/60 text-white border border-cyan-500/60"
                      : "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50"
                  }`}
                  title="Subscribe"
                >
                  {isSubmitted ? "✓" : <Mail size={20} />}
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex flex-col items-end gap-3">
              <h3 className="text-white font-medium">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="#footer"
                  onClick={(e) => e.preventDefault()}
                  className="pointer-events-none p-2.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg transition-all duration-300 opacity-50 cursor-not-allowed"
                  title="Telegram Announcements"
                >
                  <PiTelegramLogo size={20} />
                </a>
                <a
                  href="https://x.com/moonadswap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-800/30 hover:bg-gray-800/50 text-gray-300 border border-gray-700/30 hover:border-gray-700/50 rounded-lg transition-all duration-300"
                  title="X (Twitter)"
                >
                  <FaXTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Yukarı Çık Butonu */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 
                    border border-cyan-500/30 hover:border-cyan-500/50 rounded-full p-3
                    transition-all duration-300 shadow-lg shadow-cyan-500/10 backdrop-blur-sm
                    z-50 flex items-center justify-center
                    hover:shadow-xl hover:shadow-cyan-500/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
