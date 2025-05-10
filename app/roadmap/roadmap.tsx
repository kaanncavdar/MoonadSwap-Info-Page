"use client";
import { motion } from "framer-motion";
import {
  Rocket,
  LayoutDashboard,
  Smartphone,
  Terminal,
} from "lucide-react";

type RoadmapItem = {
  icon: React.ElementType;
  quarter: string;
  title: string;
  points: string[];
};

const roadmap: RoadmapItem[] = [
  {
    icon: Rocket,
    quarter: "Q2 2025",
    title: "Launch",
    points: [
      "Telegram bot live",
      "Core swaps (paste-to-trade, slippage, favorites)",
      "Monad tokens support",
      "User feedback collection",
    ],
  },
  {
    icon: LayoutDashboard,
    quarter: "Q3 2025",
    title: "UX & Growth",
    points: [
      "Admin dashboard",
      "Error handling & retries",
      "Community marketing",
      "Contributor incentives",
    ],
  },
  {
    icon: Terminal,
    quarter: "Q3 2025",
    title: "Mobile-First",
    points: [
      "Feasibility & prototyping",
      "Dev starts if user threshold met",
      "Alpha designs: wallet, notifications, swap",
    ],
  },
  {
    icon: Smartphone,
    quarter: "Q4 2025",
    title: "Mobile Rollout",
    points: [
      "Alpha/Beta mobile app",
      "Multi-bot support & push notifications",
      "In-app token purchases (MoonPay)",
    ],
  },
];

export const RoadmapSection = () => (
  <section id="roadmap" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Roadmap
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {roadmap.map(({ icon: Icon, quarter, title, points }, i) => (
          <motion.div
            key={title}
            className="rounded-2xl border border-white/10 bg-gray-900/70 p-6 shadow-md backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon size={28} strokeWidth={1.8} className="text-[#28A8EA]" />
              <div>
                <p className="text-sm text-white/60 font-medium">{quarter}</p>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 pl-1">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default RoadmapSection;