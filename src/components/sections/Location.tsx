"use client"
import { motion } from 'framer-motion';

export function Location() {
  return (
    <section id="location" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-gold tracking-[0.3em] text-xs uppercase mb-4 block">The Neighborhood</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Buckhead, Atlanta</h2>
            <p className="text-white/60 font-sans font-light leading-relaxed mb-8">
              Nestled in the prestigious enclave of Buckhead, this estate offers an unparalleled level of privacy and exclusivity while maintaining effortless access to Atlanta's finest dining, high-end boutiques, and cultural landmarks. Embrace the serenity of nature combined with elite urban sophistication.
            </p>
            <div className="space-y-4 font-sans text-sm tracking-widest uppercase flex flex-col text-white/40">
               <span className="hover:text-gold transition-colors duration-300">5 Mins to Phipps Plaza</span>
               <span className="hover:text-gold transition-colors duration-300">10 Mins to High Museum</span>
               <span className="hover:text-gold transition-colors duration-300">25 Mins to ATL Airport</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 h-[500px] border border-white/10 rounded-sm overflow-hidden relative group"
          >
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-700 z-10 pointer-events-none" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106037.45828456885!2d-84.45330104918738!3d33.834015024765624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f44f94086db%3A0xc6fb6bcef0aee2c2!2sBuckhead%2C%20Atlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1703623000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) brightness(0.8) invert(100%) hue-rotate(180deg)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
