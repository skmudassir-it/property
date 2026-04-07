"use client"
import { motion } from 'framer-motion';

const features = [
  { id: 1, label: "Total Area", value: "1.1 Acres" },
  { id: 2, label: "Living Space", value: "12,500 Sq Ft" },
  { id: 3, label: "Bedrooms", value: "6 Suites" },
  { id: 4, label: "Bathrooms", value: "8 Ultra-Lux" },
];

export function Features() {
  return (
    <section id="property" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between items-start md:items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Architectural <br/> Masterpiece
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:w-1/2 text-white/70 text-lg font-light leading-relaxed font-sans"
          >
            <p>
              Set upon 1.1 acres of pristine land, this two-story modern estate redefines the concept of private luxury. From its sweeping lines to its meticulous attention to detail, every element has been curated to inspire and elevate the standard of bespoke living.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 border-t border-white/10 pt-16">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="flex flex-col"
            >
              <span className="text-gold tracking-[0.2em] text-xs uppercase mb-3">{feature.label}</span>
              <span className="font-serif text-3xl md:text-4xl text-white">{feature.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
