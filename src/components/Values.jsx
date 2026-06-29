import { motion } from 'motion/react';

export default function Values() {
  return (
    <section id="nilai" className="mobile-values flex justify-center bg-foreground py-9 lg:h-[216px] lg:py-0">
      <div className="relative flex w-full max-w-[1280px] overflow-hidden px-4 py-2 sm:px-5 md:px-8 lg:px-[75px] lg:py-[50px]">
        <div className="grid w-full gap-7 text-white lg:grid-cols-[425px_minmax(0,1fr)] lg:items-center lg:gap-12">
          <motion.h2 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="z-10 max-w-[13ch] text-[clamp(1.7rem,7vw,2rem)] font-bold leading-tight lg:w-[425px] lg:max-w-none lg:leading-[46px]"
          >
            Nilai Utama Kami Sebagai Partner Anda
          </motion.h2>
          <div className="mobile-values-list grid w-full gap-4 sm:grid-cols-2 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mobile-value-card grid grid-cols-[50px_minmax(0,1fr)] gap-4 rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm lg:border-0 lg:bg-transparent lg:p-0"
            >
              <div className="flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full shrink-0 hover:scale-110 transition-transform">
                <img src="/assets/images/icons/crown.svg" alt="Transparan & Cepat" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins text-[24px] lg:text-[28px] leading-[32px] font-bold mt-1">
                  Transparan
                </h3>
                <p className="w-full text-sm leading-6 lg:w-[180px]">
                  Proses, timeline, dan harga jelas di awal tanpa biaya tersembunyi.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="mobile-value-card grid grid-cols-[50px_minmax(0,1fr)] gap-4 rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm lg:border-0 lg:bg-transparent lg:p-0"
            >
              <div className="flex items-center justify-center bg-primary rounded-full w-[50px] h-[50px] shrink-0 hover:scale-110 transition-transform">
                <img src="/assets/images/icons/3dcube.svg" alt="Growth Mindset" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins text-[24px] lg:text-[28px] leading-[32px] font-bold mt-1">
                  Growth Mindset
                </h3>
                <p className="w-full text-sm leading-6 lg:w-[180px]">
                  Setiap keputusan kreatif difokuskan pada pertumbuhan klien.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <img
          src="/assets/images/backgrounds/bg-stats.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 lg:left-[227.77px] -translate-x-1/2 lg:translate-x-0 h-[248.13px] w-[345.5px] -top-[16.06px] opacity-20 lg:opacity-50 pointer-events-none"
        />
      </div>
    </section>
  );
}
