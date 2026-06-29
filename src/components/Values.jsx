import { motion } from 'motion/react';

export default function Values() {
  return (
    <section id="nilai" className="flex justify-center h-auto lg:h-[216px] py-10 lg:py-0 bg-foreground">
      <div className="relative flex w-full max-w-[1280px] px-4 md:px-8 lg:px-[75px] py-8 lg:py-[50px] overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full text-white gap-10 lg:gap-0">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[28px] lg:text-[32px] z-10 leading-snug lg:leading-[46px] font-bold w-full lg:w-[425px]"
          >
            Nilai Utama Kami Sebagai Partner Anda
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-20 w-full lg:w-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full shrink-0 hover:scale-110 transition-transform">
                <img src="/assets/images/icons/crown.svg" alt="Transparan & Cepat" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins text-[24px] lg:text-[28px] leading-[32px] font-bold mt-1">
                  Transparan
                </h3>
                <p className="w-full sm:w-[180px] text-sm leading-6">
                  Proses, timeline, dan harga jelas di awal tanpa biaya tersembunyi.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="flex gap-4"
            >
              <div className="flex items-center justify-center bg-primary rounded-full w-[50px] h-[50px] shrink-0 hover:scale-110 transition-transform">
                <img src="/assets/images/icons/3dcube.svg" alt="Growth Mindset" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins text-[24px] lg:text-[28px] leading-[32px] font-bold mt-1">
                  Growth Mindset
                </h3>
                <p className="w-full sm:w-[180px] text-sm leading-6">
                  Setiap keputusan kreatif difokuskan pada pertumbuhan klien.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <img
          src="/assets/images/backgrounds/bg-stats.svg"
          alt="background"
          className="absolute left-1/2 lg:left-[227.77px] -translate-x-1/2 lg:translate-x-0 h-[248.13px] w-[345.5px] -top-[16.06px] opacity-20 lg:opacity-50 pointer-events-none"
        />
      </div>
    </section>
  );
}
