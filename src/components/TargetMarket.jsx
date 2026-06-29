import { motion } from 'motion/react';

export default function TargetMarket() {
  return (
    <section className="bg-section overflow-hidden">
      <div className="mx-auto px-4 md:px-8 lg:px-[140px] py-10 lg:py-[100px] max-w-[1280px] w-full">
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[30px]"
        >
          <div className="flex flex-col gap-6 lg:gap-[30px] w-full lg:w-[480px] text-center lg:text-left">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-3xl lg:text-[32px] leading-snug lg:leading-[46px] font-bold">
                Dirancang Untuk Bisnis Anda
              </h2>
              <p className="text-base lg:text-lg leading-7 lg:leading-8 font-medium">
                Fokus utama kami adalah membantu UMKM yang sudah berjalan (F&B, Retail) dan 
                Personal Brand (Konsultan, Arsitek, Profesional) untuk tampil lebih profesional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6">
              <a
                href="#konsultasi"
                className="px-[30px] py-[20px] bg-primary rounded-[100px] text-[16px] font-bold leading-[19px] w-full sm:w-fit transition-all duration-300 hover:shadow-primary text-center"
              >
                Mulai Kolaborasi
              </a>
              <div className="flex items-center gap-2 lg:gap-1.5 pt-2 sm:pt-0">
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
          <div className="relative shrink-0 h-[300px] lg:h-[349px] w-full sm:w-[450px]">
            <div className="absolute top-5 right-0 w-[90%] sm:w-[380px] h-[250px] lg:h-[285px] rounded-[26px] overflow-clip">
              <img
                src="/assets/images/thumbnails/featured-image.png"
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-0 left-0 lg:left-0 w-[150px] lg:w-[180px] bg-white rounded-[20px] p-3 lg:p-5 flex flex-col gap-3 lg:gap-4 drop-shadow-custom z-10">
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
            <div className="absolute bottom-5 lg:bottom-[-10px] right-[10%] lg:right-[30px] bg-white rounded-[100px] py-2 lg:py-3 px-4 lg:px-5 flex items-center gap-3 lg:gap-4 drop-shadow-custom z-10">
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
