import { motion } from 'motion/react';

export default function TargetMarket() {
  return (
    <section className="mobile-section mobile-target overflow-hidden bg-section">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-5 md:px-8 lg:px-[140px] lg:py-[100px]">
        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-9 lg:grid-cols-[480px_minmax(420px,1fr)] lg:gap-[30px]"
        >
          <div className="flex w-full flex-col gap-5 text-left lg:w-[480px] lg:gap-[30px]">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[clamp(1.75rem,7vw,2rem)] font-bold leading-tight lg:leading-[46px]">
                Dirancang Untuk Bisnis Anda
              </h2>
              <p className="text-base font-medium leading-7 text-slate lg:text-lg lg:leading-8">
                Fokus utama kami adalah membantu UMKM yang sudah berjalan (F&B, Retail) dan 
                Personal Brand (Konsultan, Arsitek, Profesional) untuk tampil lebih profesional.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center lg:gap-6">
              <a
                href="#kontak"
                className="flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-[30px] py-3.5 text-center text-[16px] font-bold leading-[19px] transition-all duration-300 hover:shadow-primary sm:w-fit lg:min-h-[60px] lg:py-[20px]"
              >
                Mulai Kolaborasi
              </a>
              <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-2 lg:gap-1.5">
                <div className="flex justify-center items-center w-[24px] h-[24px] bg-foreground rounded-full shrink-0">
                  <div className="icon-check w-3.5 h-3.5 bg-white">
                    <img
                      src="/assets/images/icons/ic_check.svg"
                      alt="icon"
                      className="opacity-0 w-3.5 h-3.5"
                    />
                  </div>
                </div>
                <p className="text-[14px] font-bold leading-[16px]">
                  Terbuka untuk kolaborasi panjang.
                </p>
              </div>
            </div>
          </div>
          <div className="mobile-target-visual relative mx-auto h-[min(82vw,330px)] w-full max-w-[460px] shrink-0 lg:h-[349px] lg:max-w-none">
            <div className="absolute right-0 top-5 h-[72%] w-[86%] overflow-clip rounded-[24px] lg:h-[285px] lg:w-[380px] lg:rounded-[26px]">
              <img
                src="/assets/images/thumbnails/featured-image.png"
                alt="Contoh visual strategi brand untuk UMKM"
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute left-0 top-0 z-10 flex w-[min(43vw,170px)] flex-col gap-3 rounded-[20px] bg-white p-3 drop-shadow-custom lg:w-[180px] lg:gap-4 lg:p-5">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-8 h-8 lg:w-[42px] lg:h-[42px] rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 16v-4"/><path d="M12 16v-8"/><path d="M17 16v-6"/></svg>
                </div>
                <p className="font-bold text-foreground text-xs lg:text-sm leading-tight">Riset<br/>Kompetitor</p>
              </div>
              <div className="flex items-end gap-1.5 h-[20px] lg:h-[30px]">
                <div className="w-1.5 lg:w-2 h-[60%] bg-mist rounded-full"></div>
                <div className="w-1.5 lg:w-2 h-[40%] bg-mist rounded-full"></div>
                <div className="w-1.5 lg:w-2 h-[80%] bg-primary rounded-full"></div>
                <div className="w-1.5 lg:w-2 h-[50%] bg-mist rounded-full"></div>
                <div className="w-1.5 lg:w-2 h-[100%] bg-primary rounded-full"></div>
                <div className="w-1.5 lg:w-2 h-[70%] bg-mist rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-4 right-[4%] z-10 flex items-center gap-2.5 rounded-full bg-white px-3 py-2 drop-shadow-custom lg:bottom-[-10px] lg:right-[30px] lg:gap-4 lg:px-5 lg:py-3">
              <div className="w-10 h-10 lg:w-[46px] lg:h-[46px] rounded-full bg-primary flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <p className="font-bold text-foreground text-base lg:text-lg leading-none mb-1">99%</p>
                <p className="font-medium text-slate text-xs lg:text-sm leading-none">Tingkat Kepuasan</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
