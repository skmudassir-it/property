import Image from 'next/image';
import Link from 'next/link';

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
          
          <div className="max-w-xs space-y-6 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block">
              <Image 
                src="/assets/luxury-real-estates/logo-gold.png" 
                alt="Aura Estate Logo" 
                width={60} 
                height={60} 
                className="w-16 h-16 object-contain"
              />
            </Link>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Curating exceptional ultra-luxury homes mapping the pinnacle of modern architecture.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h4 className="font-serif text-gold text-lg tracking-widest uppercase">Contact</h4>
            <div className="text-white/60 font-sans text-sm space-y-2">
              <p>1 (800) 555-0199</p>
              <p>inquiries@auraestate.com</p>
              <p>Beverly Hills, California</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h4 className="font-serif text-gold text-lg tracking-widest uppercase">Connect</h4>
            <div className="text-white/60 font-sans text-sm space-y-2 flex flex-col items-center md:items-start">
              <Link href="#" className="hover:text-gold transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-gold transition-colors">Pinterest</Link>
              <Link href="#" className="hover:text-gold transition-colors">LinkedIn</Link>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-white/40 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Aura Estate. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
