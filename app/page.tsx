"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FeaturesSection,
  GettingStartedSection,
  RoadmapSection,
  Footer,
} from "@/components";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

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
      // Adjust size based on screen width
      const maxSize = window.innerWidth < 640 ? 50 : 80;
      const minSize = window.innerWidth < 640 ? 10 : 20;
      const size = Math.random() * (maxSize - minSize) + minSize;
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight * 0.6;
      const speed = Math.random() * 0.5 + 0.2;
      // Higher opacity on mobile for better visibility
      const opacity = Math.random() * 0.15 + (window.innerWidth < 640 ? 0.1 : 0.05);

      const hue = Math.random() > 0.5 ? "6, 182, 212" : "59, 130, 246"; 
      const color = `rgba(${hue}, ${opacity})`;

      return { x, y, size, speed, color };
    };    const generateInitialCircles = () => {
      const initialCircles = [];
      // Reduce number of circles on mobile to improve performance
      const circleCount = window.innerWidth < 640 ? 8 : 15;
      for (let i = 0; i < circleCount; i++) {
        initialCircles.push(createCircle());
      }
      setCircles(initialCircles);
    };    generateInitialCircles();
    
    // Handle resize to adjust circles for different screen sizes
    const handleResize = () => {
      generateInitialCircles();
    };
    
    window.addEventListener('resize', handleResize);

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
    };    const animationInterval = setInterval(animateCircles, 30);

    return () => {
      clearInterval(animationInterval);
      window.removeEventListener('resize', handleResize);
    };
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
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-transparent">
      <HeroBackground />      <section className="min-h-[calc(100vh-64px)] flex items-center lg:items-center pt-8 sm:pt-10 lg:pt-0 mt-0 lg:mt-[-4rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 lg:-translate-y-6">          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="max-w-xl pt-4 sm:pt-0"
          ><motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 sm:mb-8 tracking-tight"
            >
              Swap with Anytime, Everywhere on Monad.
            </motion.h1><motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-gray-300 text-base sm:text-lg mb-10 sm:mb-16"
            >
              Swap in seconds. Own every trade.
              <br />
              MoonadSwap is the Telegram-native DEX bot to deliver the most seamless, 
              secure and lightning-fast swapping experience directly inside Telegram.
            </motion.p>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              href=""
              onClick={(e) => e.preventDefault()}
              target="_blank"
              rel="noopener noreferrer"              className="inline-flex items-center gap-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 
                         border border-cyan-500/30 hover:border-cyan-500/50 font-medium px-4 sm:px-8 py-3 sm:py-4 
                         rounded-xl transition-all duration-300 text-sm sm:text-lg"
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
              <ExternalLink className="h-4 w-4" />
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
            className="relative w-full h-[280px] sm:h-[350px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full shadow-[0_0_30px_rgba(6,182,212,0.15)] mt-6 sm:mt-8 lg:mt-0"
          >
            <Image
              src="/moonadSwap-bg.png"
              alt="MoonadSwap Logo"
              fill
              className="object-cover drop-shadow-[0_0_60px_rgba(6,182,212,0.6)]"
            />
          </motion.div>
        </div>
      </section>      <section id="getting-started" className="scroll-mt-[72px]">
        <GettingStartedSection />
      </section>

      <section id="features" className="scroll-mt-[72px]">
        <FeaturesSection />
      </section>

      <section id="roadmap" className="scroll-mt-[72px] mb-12 sm:mb-24">
        <RoadmapSection />
      </section>
      <section id="footer" className="scroll-mt-[72px] mb-12 sm:mb-24">
        <Footer />
      </section>
    </main>
  );
}
