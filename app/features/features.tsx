"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Copy, BarChart3, Shield, Loader2 } from "lucide-react";

const Features = [
  {
    icon: Zap,
    title: "AUTO SNIPING",
    desc: "Sniping made easy. Provide a contract address and set your settings you desire, we will handle the rest. Our automated system handles tax calculations, maxTA, methodID, first safe block detection. You don't need to have extensive programming knowledge to successfully snipe tokens.",
  },
  {
    icon: BarChart3,
    title: "LIMIT ORDERS",
    desc: "Automatic your trading with ease with limit orders. Set up orders to take profits or defend your investment by using stop loss or trailing stop loss limit orders. Automatic dip buying at the market enquiries you would like with the best execution.",
  },
  {
    icon: Copy,
    title: "COPYTRADE",
    desc: "Let others do the heavy lifting. Copy the trades of a profitable trader (or traders) automatically, while enjoying the same safety features.",
  },
  {
    icon: Loader2,
    title: "FAST & SECURE SWAPS",
    desc: "All our swaps are MEV-resistant, safeguarded against potential sandwich attacks or frontrunning. Paired with blazing-fast execution, our safe swaps ensure a better buy-in price for you.",
  },
  {
    icon: ShieldCheck,
    title: "ANTI RUG & REORG PROTECTION",
    desc: "Our top-performing anti-rug system ensures safer trading with a proven 85% success rate, providing best-in-class security. Banana Gun even protects you against block reorgs, that would otherwise leave you vulnerable.",
  },
  {
    icon: Shield,
    title: "SCAM & HONEYPOT PROTECTION",
    desc: "Our market-leading built-in simulations ensure protection against tokens that are scams from the start. If Banana Simulator cannot simulate a successful sell, your transaction will not go through. All handled seamlessly by the bot.",
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