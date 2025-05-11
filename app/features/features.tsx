"use client";
import { motion } from "framer-motion";
import { Zap, SearchCheck, CopyPlus, ArrowRightLeftIcon, BotIcon, StarIcon } from "lucide-react";

const Features = [
  {
    icon: Zap,
    title: "FAST & SECURE SWAPS",
    desc: "MoonadSwap delivers millisecond-speed token swaps on Telegram via Monad’s high-performance blockchain and direct EVM integration. Enjoy optimal price execution with minimal slippage, all secured by advanced end-to-end encryption protocols.",
  },
  {
    icon: CopyPlus,
    title: "MULTI-WALLET MANAGEMENT",
    desc: "Connect and manage multiple Monad wallets on the same network through a single MoonadSwap interface. Seamlessly switch between wallets, view each wallet’s transaction history, and execute swaps from your chosen account—all from one centralized dashboard.",
  },
  {
    icon: SearchCheck,
    title: "SEARCH TOKENS BY NAME",
    desc: "Forget copying contract addresses - If the token is verified—no need to hunt for contract addresses. Simply type the token’s name into MoonadSwap’s interface, and the bot will instantly display the correct asset, its current price, and swap options. Spend less time searching and more time swapping.",
  },
  {
    icon: BotIcon,
    title: "AUTO SNIPING",
    desc: "Take the guesswork out of trading with fully automated execution. Define your entry criteria—price thresholds, slippage limits, and order size—and MoonadSwap will monitor on-chain data in real time. The moment your conditions are met, the bot executes the swap instantly, ensuring optimal fill and minimal latency without manual intervention",
  },
  {
    icon: StarIcon,
    title: "TRACK & FAVORITE TOKENS",
    desc: "View your full swap history and performance metrics in real time directly in Telegram. Add your most traded tokens to favorites for one-click access and accelerate your trading flow.",
  },
  {
    icon: ArrowRightLeftIcon,
    title: "MANAGE & LIMIT ORDERS",
    desc: "Effortlessly oversee your wallets and open positions within Telegram. Set custom limit orders with precise price thresholds, and MoonadSwap will execute your trades automatically when conditions are met—no manual monitoring required.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-transparent">
      {/* Ana bölümün içeriği */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
          </motion.div>

          <motion.h2
            className="text-6xl font-bold text-center mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FEATURES
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-gray-300 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
          </motion.p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 bg-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Features.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group bg-transparent"
            >
              <div className="relative rounded-2xl border border-gray-800/80 bg-gray-900/50 backdrop-blur-sm p-8 h-full overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                {/* İkon */}
                <div className="relative mb-6 inline-flex p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Icon className="h-6 w-6 text-cyan-400" strokeWidth={2} />
                </div>

                {/* İçerik */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide flex items-center">
                    {title}
                    <div className="ml-auto h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}