"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { lazy, Suspense } from "react";
import "@/styles/globals.css";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const FeaturesSection = lazy(() =>
  import("@/components").then((module) => ({ default: module.FeaturesSection }))
);
const GettingStartedSection = lazy(() =>
  import("@/components").then((module) => ({ default: module.GettingStartedSection }))
);
const RoadmapSection = lazy(() =>
  import("@/components").then((module) => ({ default: module.RoadmapSection }))
);
const Footer = lazy(() =>
  import("@/components").then((module) => ({ default: module.Footer }))
);

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
    const isMobile = window.innerWidth < 768;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isReducedMotion) {
      return;
    }

    const createCircle = () => {
      const maxSize = isMobile ? 30 : 60;
      const minSize = isMobile ? 8 : 15;
      const size = Math.random() * (maxSize - minSize) + minSize;
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight * 0.6;
      const speed = Math.random() * 0.3 + 0.1;
      const opacity = Math.random() * 0.1 + 0.03;

      const hue = Math.random() > 0.5 ? "6, 182, 212" : "59, 130, 246"; 
      const color = `rgba(${hue}, ${opacity})`;

      return { x, y, size, speed, color };
    };

    const generateInitialCircles = () => {
      const initialCircles = [];
      const circleCount = isMobile ? 5 : 8;
      for (let i = 0; i < circleCount; i++) {
        initialCircles.push(createCircle());
      }
      setCircles(initialCircles);
    };

    generateInitialCircles();
    
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
            y: newY < -circle.size ? window.innerHeight * 0.6 + circle.size : newY,
          };
        })
      );
    };

    const animationInterval = setInterval(animateCircles, 50);

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
          transition={{ duration: 0.4, delay: Math.random() * 0.3 }}
          style={{
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            backgroundColor: circle.color,
            position: "absolute",
            left: 0,
            top: 0,
            transform: `translate3d(${circle.x}px, ${circle.y}px, 0)`,
            filter: "blur(30px)",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
};

const SectionLoader = () => (
  <div className="flex justify-center items-center h-40">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
  </div>
);

export default function Home() {
  const optimizedTransition = {
    type: "tween",
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  };

  return (
    <main className="min-h-screen w-full relative bg-transparent">
      <HeroBackground />
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-16 lg:py-0">
        <div className="mx-auto max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 max-w-xl text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={optimizedTransition}
              className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 sm:mb-8 tracking-tight"
            >
              Swap anytime, anywhere — powered by Monad.
            </motion.h1>
            <motion.p
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
              href="https://t.me/moonswapxbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 
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

          {/* Image container */}
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
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            {/* Aspect ratio wrapper */}
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px]">
              <div className="aspect-square relative">
                <Image
                  src="/moonadSwap-bg.png"
                  alt="MoonadSwap Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_60px_rgba(6,182,212,0.6)]"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other sections */}
      <Suspense fallback={<SectionLoader />}>
        <section id="getting-started" className="scroll-mt-[72px]">
          <GettingStartedSection />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="features" className="scroll-mt-[72px]">
          <FeaturesSection />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="roadmap" className="scroll-mt-[72px] mb-12 sm:mb-24">
          <RoadmapSection />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="footer" className="scroll-mt-[72px] mb-12 sm:mb-24">
          <Footer />
        </section>
      </Suspense>
    </main>
  );
}
