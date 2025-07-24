"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function GettingStartedSection() {
  const features = [
    {
      id: "telegram-bot",
      title: "TELEGRAM BOT",
      image: "/telegrambot-ios-android-mockup.jpg",
      description: `Swap tokens inside Telegram — fast, secure and friction-free.
Powered by Monad's high-performance chain, the bot executes
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
      image: "/MobileApp.png",
      description: `The same seamless trading experience is coming to mobile.
Alpha/Beta rollout is planned for Q4 2025 with push notifications,
multi-bot control and in-app token purchases (MoonPay).`,
      cta: {
        label: "COMING SOON",
        href: "#getting-started",
        disabled: true,
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };
  return (    <section
      id="getting-started"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="text-center mb-12 sm:mb-16 md:mb-20">          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            GETTING STARTED
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-gray-300 text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
          </motion.p>
        </div>        <motion.div 
          className="grid gap-6 sm:gap-8 md:grid-cols-2 bg-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map(({ id, title, image, description, cta }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="group bg-transparent"
            >              <div className="relative rounded-2xl border border-gray-800/80 bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 h-full overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                {/* Resim */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] mb-4 sm:mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority
                    className="object-cover object-top"
                  />
                  {cta.disabled && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-base sm:text-lg md:text-xl font-bold">
                      COMING SOON
                    </div>
                  )}
                </div>

                {/* Metin */}
                <div className="relative flex flex-col min-h-[180px]">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 tracking-wide flex items-center">
                    {title}
                    <div className="ml-auto h-px w-8 sm:w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                    {description.split('\n').map((line, i) => (
                      <span key={i} className="block mb-1">{line}</span>
                    ))}
                  </p>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <a
                      href={cta.href}
                      target={cta.disabled ? undefined : "_blank"}
                      rel={cta.disabled ? undefined : "noopener noreferrer"}
                      className={`w-full sm:w-auto inline-flex justify-center items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition
                        ${
                          cta.disabled
                            ? "bg-gray-700/50 text-gray-400 cursor-not-allowed border border-gray-700"
                            : "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50"
                        }`}
                    >
                      {cta.label}
                      {!cta.disabled && <ExternalLink className="ml-2 h-4 w-4" />}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}