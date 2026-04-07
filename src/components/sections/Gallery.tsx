"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, src: "/assets/luxury-real-estates/gallery-1.jpg", alt: "Modern Architecture Exterior", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 2, src: "/assets/luxury-real-estates/gallery-2.jpg", alt: "Private Pool Glowing", span: "col-span-1" },
  { id: 3, src: "/assets/luxury-real-estates/gallery-3.jpg", alt: "Minimalist Interior", span: "col-span-1" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold tracking-[0.3em] text-xs uppercase mb-4 block">Visual Experience</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Curated Spaces</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-2 gap-4 md:gap-6 lg:gap-8 h-auto md:h-[800px]">
          {images.map((image, i) => (
            <motion.div 
              layoutId={`gallery-img-${image.id}`}
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
              className={`relative overflow-hidden group hover:cursor-zoom-in rounded-sm ${image.span} min-h-[300px] md:min-h-0 cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 m-4 z-20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 hover:cursor-zoom-out cursor-pointer"
          >
            <motion.div 
              layoutId={`gallery-img-${images.find(img => img.src === selectedImage)?.id}`}
              className="relative w-full h-full max-w-6xl max-h-[85vh] rounded-sm overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Fullscreen view" 
                fill 
                className="object-contain"
                sizes="100vw"
                priority
              />
              
              <button 
                onClick={() => setSelectedImage(null)}
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
