"use client";
import { motion } from "framer-motion";

const Features = [
  {
    title: "Auto Sniping",
    desc: `Sniping made easy. Provide a contract address and set the settings you desire — we handle the rest: tax calculations, maxTx, methodID, first-safe-block detection. No coding knowledge needed.`,
  },
  {
    title: "Limit Orders",
    desc: `Automate trading with limit orders. Take profits or protect your position with stop-loss or trailing stop-loss. Even automate dip-buys at the exact price you want.`,
  },
  {
    title: "CopyTrade",
    desc: `Let profitable traders do the heavy lifting. Copy their trades automatically while enjoying the same safety features.`,
  },
  {
    title: "Fast & Secure Swaps",
    desc: `All swaps are MEV-resistant and protected against sandwich attacks or frontrunning. Coupled with blazing-fast execution for a better buy-in price.`,
  },
  {
    title: "Anti-Rug & Reorg Protection",
    desc: `Our anti-rug system offers a proven 85% success rate and even shields you from block reorgs that would otherwise leave you exposed.`,
  },
  {
    title: "Scam & Honeypot Protection",
    desc: `Built-in simulations block transactions on tokens that can’t be sold. If a sell can’t be simulated, your swap won’t go through — simple as that.`,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 ">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-16 tracking-tight">
          FEATURES
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Features.map(({ title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-3 uppercase tracking-wide">
                {title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
