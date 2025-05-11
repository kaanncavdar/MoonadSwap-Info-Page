"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FeaturesSection,
  GettingStartedSection,
  RoadmapSection,
} from "@/components";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

type Circle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
};

const HeroBackground = () => {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const createCircle = () => {
      const size = Math.random() * 80 + 20;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight * 0.6; // Focus on the top part of the hero section
      const speed = Math.random() * 0.5 + 0.2;
      const opacity = Math.random() * 0.3 + 0.1;
      const color = `rgba(155, 103, 255, ${opacity})`; // Transparent purple circles

      return { x, y, size, speed, color };
    };

    const generateInitialCircles = () => {
      const initialCircles = [];
      for (let i = 0; i < 15; i++) {
        initialCircles.push(createCircle());
      }
      setCircles(initialCircles);
    };

    generateInitialCircles();

    const animateCircles = () => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          const newY = circle.y - circle.speed;
          return {
            ...circle,
            y:
              newY < -circle.size
                ? window.innerHeight * 0.6 + circle.size
                : newY,
          };
        })
      );
    };

    const animationInterval = setInterval(animateCircles, 30);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          initial={{ x: circle.x, y: circle.y, scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
          style={{
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            backgroundColor: circle.color,
            position: "absolute",
            left: 0,
            top: 0,
            transform: `translate(${circle.x}px, ${circle.y}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <HeroBackground />
      <section className="hero-bg min-h-screen flex items-start lg:items-center pt-0 mt-[-4rem]">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-16 lg:-translate-y-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="max-w-xl"
          >
            <h1 className="text-white font-extrabold text-6xl leading-tight mb-8">
              Lightning-fast crypto, right where you chat
            </h1>

            <p className="text-gray-100 text-lg mb-16">
              Swap in seconds. Own every trade.
              <br />
              MoonadSwap is the Telegram-native DEX bot that turns “/buy” into
              instant, slippage-smart swaps on the Monad chain—no tab-hopping,
              no failed TXs, just pure speed.
            </p>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/moonswapxbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#764ba2] hover:to-[#667eea]
                         text-white font-semibold px-8 py-4 rounded-xl shadow-lg text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.1-.357.1-.496.03l.204-3.096 5.584-5.045c.24-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.203-.658-.643.136-.953l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              Launch on Telegram
            </motion.a>
          </motion.div>

          {/* VISUAL SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
            className="relative w-[360px] h-[360px] rounded-full overflow-hidden shadow-xl"
          >
            <Image
              src="/MoonadSwap-NavLogo.png"
              alt="MoonadSwap Logo"
              fill
              className="object-cover drop-shadow-[0_0_60px_rgba(102,126,234,0.6)]"
            />
          </motion.div>
        </div>
      </section>

      <section id="getting-started" className="scroll-mt-[20px]">
        <GettingStartedSection />
      </section>
      <section id="features" className="scroll-mt-[80px]">
        <FeaturesSection />
      </section>

      <section id="roadmap" className="scroll-mt-[80px] mb-24">
        <RoadmapSection />
      </section>
    </main>
  );
}
