"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();

  const navLinks = [
    { name: 'The Property', href: '#property' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Locate', href: '#location' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image 
              src="/assets/luxury-real-estates/logo-gold.png" 
              alt="Aura Estate Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.8)] transition-all duration-500"
            />
          </motion.div>
          <span className="font-serif text-xl tracking-widest text-gold group-hover:text-white transition-colors duration-500">AURA</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center text-sm tracking-widest text-[#E8D7A9]/80 uppercase">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            >
              <Link href={link.href} className="relative group hover:text-white transition-colors p-2">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div 
          className="flex items-center gap-4 hidden md:flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button 
            variant="gold" 
            size="default" 
            className="hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Inquire Now
          </Button>
        </motion.div>
      </div>

      {/* Gold Scroll Progress Light */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] md:h-[1px] bg-gold origin-left shadow-[0_0_15px_rgba(212,175,55,1)]"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.header>
  );
}
