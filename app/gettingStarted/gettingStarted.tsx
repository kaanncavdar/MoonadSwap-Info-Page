"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GettingStartedSection() {
  const features = [
    {
      id: "telegram-bot",
      title: "TELEGRAM BOT",
      image: "/telegrambot-ios-android-mockup.png",
      description: `Swap tokens inside Telegram — fast, secure and friction-free.
Powered by Monad’s high-performance chain, the bot executes
trades in milliseconds with minimal steps — no DEX hopping,
no browser required.`,
      cta: {
        label: "OPEN TELEGRAM BOT",
        href: "https://t.me/moonswapxbot",
        disabled: false,
      },
    },
    {
      id: "mobile-app",
      title: "MOBILE APP",
      image: "/MobileApp.png", // placeholder ekle
      description: `The same seamless trading experience is coming to mobile.
Alpha/Beta rollout is planned for Q4 2025 with push notifications,
multi-bot control and in-app token purchases (MoonPay).`,
      cta: {
        label: "COMING SOON",
        href: "#",
        disabled: true,
      },
    },
  ];

  return (
    <section
      id="getting-started"
      className="mx-auto max-w-7xl px-6 py-24 flex flex-col gap-16"
    >
      <h2 className="text-3xl font-bold text-white text-center lg:text-left">
        Getting Started
      </h2>

      <div className="grid gap-12 lg:grid-cols-2">
        {features.map(({ id, title, image, description, cta }) => (
          <motion.article
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-[#2a2a2a] rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow"
          >
            {/* Resim */}
            <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-top"
              />
              {cta.disabled && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-xl font-bold">
                  COMING SOON
                </div>
              )}
            </div>

            {/* Metin */}
            <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-300 whitespace-pre-line mb-8">
              {description}
            </p>

            {/* CTA */}
            <a
              href={cta.href}
              target={cta.disabled ? undefined : "_blank"}
              rel={cta.disabled ? undefined : "noopener noreferrer"}
              className={`mt-auto inline-flex justify-center items-center px-5 py-3 rounded-xl font-medium text-sm transition
                ${
                  cta.disabled
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-[#28A8EA] hover:bg-[#1e8bc3] text-white shadow-md rounded-xl"
                }`}
                style={{ borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }}
            >
              {cta.label}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

