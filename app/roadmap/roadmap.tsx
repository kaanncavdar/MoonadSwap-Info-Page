"use client";
import { motion } from "framer-motion";
import { Rocket, LayoutDashboard, Smartphone, Terminal } from "lucide-react";

type QuarterData = {
  quarter: string;
  color: string;
  categories: {
    icon: React.ElementType;
    title: string;
    points: string[];
  }[];
};

const roadmapData: QuarterData[] = [
  {
    quarter: "Q2 2025",
    color: "#06b6d4", 
    categories: [
      {
        icon: Rocket,
        title: "Platform Launch",
        points: [
          "Telegram bot live deployment",
          "Advanced swap features implementation",
          "User feedback analytics system",
        ],
      },
    ],
  },
  {
    quarter: "Q3 2025",
    color: "#06b6d4", 
    categories: [
      {
        icon: LayoutDashboard,
        title: "UX Revolution",
        points: [
          "Enterprise-grade admin dashboard",
          "Smart error recovery system",
          "Global community expansion",
          "Contributor reward programs",
        ],
      },
      {
        icon: Terminal,
        title: "Mobile Evolution",
        points: [
          "Cross-platform prototyping",
          "Scalable architecture development",
          "Next-gen mobile interface designs",
        ],
      },
    ],
  },
  {
    quarter: "Q4 2025",
    color: "#06b6d4", 
    categories: [
      {
        icon: Smartphone,
        title: "Mobile Dominance",
        points: [
          "Public beta app release",
          "AI-powered notification system",
          "Fiat on-ramp integration",
        ],
      },
    ],
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

export default function RoadmapSection() {
  return (    <section id="roadmap" className="relative py-16 sm:py-24 lg:py-32 bg-transparent">
      

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ROADMAP
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-gray-300 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
          </motion.p>
        </div>        <motion.div 
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roadmapData.map(({ quarter, color, categories }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group bg-transparent"
            >
              <div className="relative rounded-2xl border border-gray-800/80 bg-gray-900/50 backdrop-blur-sm p-8 h-full overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                

                
                {/* Quarter and icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative inline-flex p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    {(() => {
                      const Icon = categories[0].icon;
                      return <Icon className="h-6 w-6 text-cyan-400" strokeWidth={2} />;
                    })()}
                  </div>                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {quarter}
                  </h3>
                </div>
                
                {/* Content */}
                <div className="space-y-8">
                  {categories.map(({ icon: Icon, title, points }, catIndex) => (
                    <div key={catIndex} className={catIndex > 0 ? "pt-6 border-t border-gray-800/50" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="h-5 w-5 text-cyan-400" strokeWidth={2} />                        <h4 className="text-lg sm:text-xl font-bold text-white">
                          {title}
                          <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent mt-1"></div>
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {points.map((point, pIndex) => (
                          <motion.li 
                            key={pIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: pIndex * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                            className="text-gray-300 flex items-start"
                          >
                            <span className="text-cyan-400 mr-2">•</span>
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}