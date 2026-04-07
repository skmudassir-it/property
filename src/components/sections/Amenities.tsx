"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

const amenities = [
  { id: "kitchen", title: "Gourmet Kitchen", src: "/assets/luxury-real-estates/kitchen.jpg" },
  { id: "bathroom", title: "Spa-Inspired Bath", src: "/assets/luxury-real-estates/bathroom.jpg" },
  { id: "parking", title: "Tesla Supercharge Garage", src: "/assets/luxury-real-estates/tesla_parking.jpg" },
  { id: "solar", title: "Integrated Tesla Solar Roof", src: "/assets/luxury-real-estates/tesla_solar.jpg" },
  { id: "security", title: "Smart Home Security", src: "/assets/luxury-real-estates/security.jpg" },
  { id: "layout", title: "Expansive Floor Plans", src: "/assets/luxury-real-estates/layout.jpg" },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold tracking-[0.3em] text-xs uppercase mb-4 block">World-Class Features</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Unrivaled Amenities</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, i) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, delay: i * 0.15 }}
               className="group relative overflow-hidden rounded-sm h-[400px]"
             >
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
               <Image 
                 src={item.src} 
                 alt={item.title} 
                 fill 
                 className="object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
               <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/80 to-transparent flex translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <h3 className="font-serif text-xl tracking-wide text-white group-hover:text-gold transition-colors">{item.title}</h3>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
