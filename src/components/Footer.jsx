import logo from '../assets/logo.jpeg';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="flex justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[1280px] px-4 md:px-8 lg:pl-[75px] lg:pr-[181px] py-10 lg:py-[100px]"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[156px]">
          <div className="flex flex-col gap-5 w-full lg:w-[259px] items-center lg:items-start text-center lg:text-left">
            <a href="#" className="shrink-0 flex items-center gap-4">
              <img src={logo} alt="ARUNA Logo" className="h-[48px] w-auto rounded-full" />
              <h2 className="text-foreground text-[28px] font-extrabold tracking-widest font-poppins leading-none mb-[2px]">ARUNA</h2>
            </a>
            <p className="text-[16px] font-medium leading-[28px]">
              Micro agency partner pertumbuhan bisnis Anda di era digital.
            </p>
            <p className="text-[16px] font-medium leading-[28px]">
              © {new Date().getFullYear()} ARUNA.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-10 lg:gap-[70px] justify-center lg:justify-start text-center sm:text-left">
            {/* item 1 */}
            <nav className="flex flex-col gap-5">
              <h3 className="font-poppins text-[16px] leading-[24px] font-bold">
                Layanan
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href="#layanan" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    Brand Identity
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    Pembuatan Website
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    Fotografi Produk
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    Social Media Management
                  </a>
                </li>
              </ul>
            </nav>

            {/* item 2 */}
            <nav className="flex flex-col gap-5">
              <h3 className="font-poppins text-[16px] leading-[24px] font-bold">
                Perusahaan
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href="#nilai" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#cara-kerja" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    Cara Kerja
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    Syarat & Ketentuan
                  </a>
                </li>
              </ul>
            </nav>

            {/* item 3 */}
            <nav className="flex flex-col gap-5">
              <h3 className="font-poppins text-[16px] leading-[24px] font-bold">
                Sosial Media
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href="#" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[16px] leading-7 font-medium hover:text-primary transition-colors">
                    TikTok
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
