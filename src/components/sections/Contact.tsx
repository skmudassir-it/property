"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background Texture Graphic */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/luxury-real-estates/texture-gold.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-6">Schedule a Private Tour</h2>
          <p className="text-white/60 font-light font-sans max-w-lg mx-auto">
            Experience the exceptional firsthand. Register your details below for a confidential viewing arrangement.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
          action="https://docs.google.com/forms/d/e/1FAIpQLSc6jXpnuMVlgXFeioaXdpamXADZAB8-ClaxHXoYRNb0-udQIQ/formResponse"
          method="POST"
          target="_blank"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-white/50 block">First Name</label>
              <input 
                id="firstName" 
                name="entry.2086098915"
                type="text" 
                className="w-full bg-transparent border-b border-white/20 focus:border-gold px-0 py-3 text-white outline-none transition-colors font-sans placeholder-white/20"
                placeholder="James"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-white/50 block">Last Name</label>
              <input 
                id="lastName" 
                name="entry.39569701"
                type="text" 
                className="w-full bg-transparent border-b border-white/20 focus:border-gold px-0 py-3 text-white outline-none transition-colors font-sans placeholder-white/20"
                placeholder="Bond"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/50 block">Email Address</label>
            <input 
              id="email" 
              name="entry.249980255"
              type="email" 
              className="w-full bg-transparent border-b border-white/20 focus:border-gold px-0 py-3 text-white outline-none transition-colors font-sans placeholder-white/20"
              placeholder="james@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs uppercase tracking-widest text-white/50 block">Phone Number</label>
            <input 
              id="phone" 
              name="entry.1299808886"
              type="tel" 
              className="w-full bg-transparent border-b border-white/20 focus:border-gold px-0 py-3 text-white outline-none transition-colors font-sans placeholder-white/20"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="pt-8 flex justify-center">
            <Button type="submit" variant="gold" size="lg" className="w-full md:w-auto min-w-[240px]">
              Request Viewing
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
