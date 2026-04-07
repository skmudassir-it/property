"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 w-full h-px opacity-30">
        <Image 
          src="/assets/luxury-real-estates/divider-gold.png" 
          alt="Divider" 
          fill 
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-between gap-12 text-center md:text-left md:flex-row md:items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xs space-y-6 flex flex-col items-center md:items-start"
          >
            <Link href="/" className="inline-block hover:scale-105 transition-transform duration-500">
              <Image 
                src="/assets/luxury-real-estates/logo-gold.png" 
                alt="Aura Estate Logo" 
                width={60} 
                height={60} 
                className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              />
            </Link>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Curating exceptional ultra-luxury homes mapping the pinnacle of modern architecture.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center space-y-4 md:items-start"
          >
            <h4 className="font-serif text-gold text-lg tracking-widest uppercase relative inline-block group">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-px bg-gold group-hover:w-full transition-all duration-500"></span>
            </h4>
            <div className="text-white/60 font-sans text-sm space-y-2">
              <p className="hover:text-white transition-colors cursor-pointer">1 (800) 555-0199</p>
              <p className="hover:text-white transition-colors cursor-pointer">inquiries@auraestate.com</p>
              <p className="hover:text-white transition-colors cursor-pointer">Buckhead, Atlanta, Georgia</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-4 md:items-start"
          >
            <h4 className="font-serif text-gold text-lg tracking-widest uppercase relative inline-block group">
              Connect
              <span className="absolute -bottom-1 left-0 w-1/2 h-px bg-gold group-hover:w-full transition-all duration-500"></span>
            </h4>
            <div className="text-white/60 font-sans text-sm space-y-2 flex flex-col items-center md:items-start">
              <Link href="#" className="hover:text-gold hover:translate-x-1 transition-all duration-300 block">Instagram</Link>
              <Link href="#" className="hover:text-gold hover:translate-x-1 transition-all duration-300 block">Pinterest</Link>
              <Link href="#" className="hover:text-gold hover:translate-x-1 transition-all duration-300 block">LinkedIn</Link>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-white/10 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-white/40 tracking-wider"
        >
          <p>&copy; {new Date().getFullYear()} Aura Estate. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
