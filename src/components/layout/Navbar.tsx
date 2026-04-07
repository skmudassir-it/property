"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
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
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/assets/luxury-real-estates/logo-gold.png" 
            alt="Aura Estate Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain"
          />
          <span className="font-serif text-xl tracking-widest text-gold">AURA</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center text-sm tracking-widest text-[#E8D7A9]/80 uppercase">
          <Link href="#property" className="hover:text-gold transition-colors">The Property</Link>
          <Link href="#gallery" className="hover:text-gold transition-colors">Gallery</Link>
          <Link href="#lifestyle" className="hover:text-gold transition-colors">Lifestyle</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="gold" size="default" className="hidden md:inline-flex" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Inquire Now
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
