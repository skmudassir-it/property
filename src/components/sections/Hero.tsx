"use client"
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image 
          src="/assets/luxury-real-estates/hero.jpg" 
          alt="Luxury Real Estate Hero Backdrop" 
          fill 
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />
      </motion.div>

      <div className="relative z-10 text-center flex flex-col items-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-6 font-medium">Bespoke Living</p>
        </motion.div>
        
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          The Pinnacle of <br className="hidden md:block"/> Modern Luxury
        </motion.h1>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="w-px h-24 bg-gradient-to-b from-gold to-transparent mt-8"
        />
      </div>
    </section>
  );
}
