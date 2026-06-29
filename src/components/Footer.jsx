import logo from '../assets/logo.jpeg';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="mobile-footer flex justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mobile-footer-inner w-full max-w-[1280px] px-4 py-8 sm:px-5 md:px-8 lg:py-[100px] lg:pl-[75px] lg:pr-[181px]"
      >
        <div className="grid gap-9 lg:grid-cols-[259px_minmax(0,1fr)] lg:gap-[156px]">
          <div className="mobile-footer-brand flex w-full flex-col items-center gap-3 text-center lg:w-[259px] lg:items-start lg:gap-5 lg:text-left">
            <a href="#" className="flex shrink-0 items-center gap-3 lg:gap-4">
              <img src={logo} alt="Logo ARUNA" className="h-[42px] w-[42px] rounded-full object-cover lg:h-[48px] lg:w-[48px]" />
              <h2 className="mb-[2px] font-poppins text-[24px] font-extrabold leading-none tracking-widest text-foreground lg:text-[28px]">ARUNA</h2>
            </a>
            <p className="max-w-[18rem] text-sm font-medium leading-6 lg:max-w-[26rem] lg:text-[16px] lg:leading-[28px]">
              Micro agency partner pertumbuhan bisnis Anda di era digital.
            </p>
            <p className="text-sm font-medium leading-6 lg:text-[16px] lg:leading-[28px]">
              © {new Date().getFullYear()} ARUNA.
            </p>
          </div>
          <div className="mobile-footer-links grid gap-0 overflow-hidden rounded-[26px] border border-mist bg-white/70 shadow-[0_14px_38px_rgba(26,26,46,0.045)] sm:grid-cols-3 lg:gap-[70px] lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none">
            {/* item 1 */}
            <nav className="flex flex-col gap-3 border-t border-mist px-4 py-4 first:border-t-0 lg:gap-5 lg:border-t-0 lg:p-0">
              <h3 className="font-poppins text-sm font-bold leading-5 lg:text-[16px] lg:leading-[24px]">
                Layanan
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 lg:flex lg:flex-col lg:gap-1.5">
                <li>
                  <a href="#layanan" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    Brand Identity
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    Pembuatan Website
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    Fotografi Produk
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    Social Media Management
                  </a>
                </li>
              </ul>
            </nav>

            {/* item 2 */}
            <nav className="flex flex-col gap-3 border-t border-mist px-4 py-4 first:border-t-0 lg:gap-5 lg:border-t-0 lg:p-0">
              <h3 className="font-poppins text-sm font-bold leading-5 lg:text-[16px] lg:leading-[24px]">
                Perusahaan
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 lg:flex lg:flex-col lg:gap-1.5">
                <li>
                  <a href="#nilai" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#cara-kerja" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    Cara Kerja
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    Syarat & Ketentuan
                  </a>
                </li>
              </ul>
            </nav>

            {/* item 3 */}
            <nav className="flex flex-col gap-3 border-t border-mist px-4 py-4 first:border-t-0 lg:gap-5 lg:border-t-0 lg:p-0">
              <h3 className="font-poppins text-sm font-bold leading-5 lg:text-[16px] lg:leading-[24px]">
                Sosial Media
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 lg:flex lg:flex-col lg:gap-1.5">
                <li>
                  <a href="#" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="flex min-h-8 items-center text-[13px] font-medium leading-5 transition-colors hover:text-primary lg:min-h-10 lg:text-[16px] lg:leading-7">
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
