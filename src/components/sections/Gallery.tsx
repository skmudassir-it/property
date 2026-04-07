"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: "/assets/luxury-real-estates/gallery-1.jpg", alt: "Modern Architecture Exterior", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 2, src: "/assets/luxury-real-estates/gallery-2.jpg", alt: "Private Pool Glowing", span: "col-span-1" },
  { id: 3, src: "/assets/luxury-real-estates/gallery-3.jpg", alt: "Minimalist Interior", span: "col-span-1" },
];

export function Gallery() {
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
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
              className={`relative overflow-hidden group rounded-sm ${image.span} min-h-[300px] md:min-h-0`}
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
    </section>
  );
}
