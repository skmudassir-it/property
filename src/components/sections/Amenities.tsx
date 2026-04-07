"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const amenities = [
  { id: "kitchen", title: "Gourmet Kitchen", src: "/assets/luxury-real-estates/kitchen.jpg" },
  { id: "bathroom", title: "Spa-Inspired Bath", src: "/assets/luxury-real-estates/bathroom.jpg" },
  { id: "parking", title: "Tesla Supercharge Garage", src: "/assets/luxury-real-estates/tesla_parking.jpg" },
  { id: "solar", title: "Integrated Tesla Solar Roof", src: "/assets/luxury-real-estates/tesla_solar.jpg" },
  { id: "security", title: "Smart Home Security", src: "/assets/luxury-real-estates/security.jpg" },
  { id: "layout", title: "Expansive Floor Plans", src: "/assets/luxury-real-estates/layout.jpg" },
];

export function Amenities() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  const selectedItem = amenities.find(a => a.id === selectedId);

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
               layoutId={`amenity-img-${item.id}`}
               key={item.id}
               onClick={() => setSelectedId(item.id)}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, delay: i * 0.15 }}
               className="group relative overflow-hidden rounded-sm h-[400px] cursor-pointer hover:cursor-zoom-in"
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

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 hover:cursor-zoom-out cursor-pointer"
          >
            <motion.div 
              layoutId={`amenity-img-${selectedItem.id}`}
              className="relative w-full h-full max-w-6xl max-h-[85vh] rounded-sm overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] ring-1 ring-white/10 flex flex-col justify-end"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedItem.src} 
                alt={selectedItem.title} 
                fill 
                className="object-contain"
                sizes="100vw"
                priority
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pointer-events-none">
                 <h3 className="font-serif text-3xl tracking-wide text-white drop-shadow-md">{selectedItem.title}</h3>
              </div>
              
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-gold transition-colors p-2 z-50 bg-black/50 rounded-full backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
