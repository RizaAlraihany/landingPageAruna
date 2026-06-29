import logo from '../assets/logo.jpeg';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-50 top-[10px] lg:top-[30px] left-1/2 -translate-x-1/2 flex items-center justify-between w-[calc(100%-32px)] lg:w-[1130px] overflow-hidden bg-foreground rounded-[100px] py-2 lg:py-2.5 px-4 lg:px-[30px]"
      >
        <a href="#" className="shrink-0 flex items-center gap-3">
          <img src={logo} alt="ARUNA Logo" className="h-[36px] lg:h-[43px] w-auto rounded-full" />
          <h1 className="text-white text-[20px] lg:text-[24px] font-extrabold tracking-widest font-poppins leading-none mb-[2px]">ARUNA</h1>
        </a>
        
        <div className="hidden lg:block bg-slate w-[1px] h-[50px]"></div>
        
        <ul className="hidden lg:flex items-center gap-10 mx-auto">
          <li><a href="#layanan" className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300">Layanan</a></li>
          <li><a href="#paket" className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300">Paket</a></li>
          <li><a href="#tim" className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300">Tim</a></li>
          <li><a href="#kontak" className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300">Kontak</a></li>
        </ul>
        
        <div className="hidden lg:flex items-center gap-3.5">
          <a href="#konsultasi" className="bg-primary text-foreground text-[16px] font-semibold px-6 h-[43px] flex items-center rounded-[100px] transition-all duration-300 hover:shadow-primary">
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed z-40 top-[70px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] bg-foreground rounded-[20px] p-6 flex flex-col gap-4 shadow-xl"
          >
            <ul className="flex flex-col gap-4">
              <li><a href="#layanan" onClick={() => setIsOpen(false)} className="text-white text-[16px] font-semibold">Layanan</a></li>
              <li><a href="#paket" onClick={() => setIsOpen(false)} className="text-white text-[16px] font-semibold">Paket</a></li>
              <li><a href="#tim" onClick={() => setIsOpen(false)} className="text-white text-[16px] font-semibold">Tim</a></li>
              <li><a href="#kontak" onClick={() => setIsOpen(false)} className="text-white text-[16px] font-semibold">Kontak</a></li>
            </ul>
            <div className="w-full h-[1px] bg-slate/30"></div>
            <a href="#konsultasi" onClick={() => setIsOpen(false)} className="bg-primary text-foreground text-[16px] font-semibold h-[43px] flex items-center justify-center rounded-[100px] w-full mt-2">
              Konsultasi Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
