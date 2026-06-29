import logo from '../assets/logo.jpeg';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.nav 
        initial={reduceMotion ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mobile-nav-shell fixed left-1/2 top-3 z-50 flex min-h-14 w-[min(calc(100%-24px),72rem)] -translate-x-1/2 items-center justify-between gap-3 overflow-hidden rounded-full bg-foreground px-3 py-2 shadow-[0_14px_40px_rgba(26,26,46,0.22)] lg:top-[30px] lg:min-h-[68px] lg:px-[30px] lg:py-2.5"
        aria-label="Navigasi utama"
      >
        <a href="#" className="flex min-h-11 shrink-0 items-center gap-3 rounded-full pr-2">
          <img src={logo} alt="Logo ARUNA" className="h-10 w-10 rounded-full object-cover lg:h-[43px] lg:w-[43px]" />
          <span className="mb-[2px] font-poppins text-[clamp(1.05rem,5vw,1.5rem)] font-extrabold leading-none tracking-widest text-white">ARUNA</span>
        </a>
        
        <div className="hidden lg:block bg-slate w-[1px] h-[50px]"></div>
        
        <ul className="hidden lg:flex items-center gap-10 mx-auto">
          <li><a href="#layanan" className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300">Layanan</a></li>
          <li><a href="#cara-kerja" className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300">Cara Kerja</a></li>
          <li><a href="#nilai" className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300">Nilai</a></li>
          <li><a href="#kontak" className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300">Kontak</a></li>
        </ul>
        
        <div className="hidden lg:flex items-center gap-3.5">
          <a href="#kontak" className="bg-primary text-foreground text-[16px] font-semibold px-6 h-[43px] flex items-center rounded-[100px] transition-all duration-300 hover:shadow-primary">
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          type="button"
          className="grid min-h-11 min-w-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Tutup menu navigasi"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-[2px] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="mobile-navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="mobile-menu-panel fixed left-1/2 top-[76px] z-40 flex w-[min(calc(100%-24px),28rem)] -translate-x-1/2 flex-col gap-4 rounded-[24px] bg-foreground p-4 shadow-2xl"
            >
              <ul className="grid gap-2">
                <li><a href="#layanan" onClick={() => setIsOpen(false)} className="mobile-menu-link flex min-h-12 items-center rounded-2xl px-4 text-[16px] font-semibold text-white hover:bg-white/10">Layanan</a></li>
                <li><a href="#cara-kerja" onClick={() => setIsOpen(false)} className="mobile-menu-link flex min-h-12 items-center rounded-2xl px-4 text-[16px] font-semibold text-white hover:bg-white/10">Cara Kerja</a></li>
                <li><a href="#nilai" onClick={() => setIsOpen(false)} className="mobile-menu-link flex min-h-12 items-center rounded-2xl px-4 text-[16px] font-semibold text-white hover:bg-white/10">Nilai</a></li>
                <li><a href="#kontak" onClick={() => setIsOpen(false)} className="mobile-menu-link flex min-h-12 items-center rounded-2xl px-4 text-[16px] font-semibold text-white hover:bg-white/10">Kontak</a></li>
              </ul>
              <div className="w-full h-[1px] bg-slate/30"></div>
              <a href="#kontak" onClick={() => setIsOpen(false)} className="mt-1 flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-5 text-center text-[16px] font-bold text-foreground">
                Konsultasi Gratis
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
