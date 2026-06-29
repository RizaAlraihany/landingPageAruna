import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="kontak" className="bg-foreground">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-[1280px] px-4 md:px-8 lg:px-[75px] py-10 lg:py-0 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[85px] w-full">
          <div className="flex flex-col gap-6 lg:gap-[30px] w-full items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col gap-2.5 text-white">
              <h2 className="text-2xl lg:text-[32px] leading-snug lg:leading-[46px] font-bold">
                Siap Tampil Lebih Profesional?
              </h2>
              <p className="w-full lg:w-[484px] text-base lg:text-lg leading-relaxed lg:leading-[32px] font-medium">
                Jadwalkan sesi konsultasi gratis dengan tim ARUNA. 
                Mari bangun fondasi pertumbuhan untuk bisnis Anda sekarang.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a
                href="#konsultasi"
                className="px-[30px] py-[20px] text-[16px] font-bold leading-[19px] rounded-[100px] bg-primary transition-all duration-300 hover:shadow-primary text-foreground w-full sm:w-auto text-center"
              >
                Jadwalkan Konsultasi
              </a>
              <div className="flex items-center gap-2 lg:gap-1.5 text-white">
                <div className="flex justify-center items-center w-[24px] h-[24px] bg-white rounded-full shrink-0">
                  <div className="icon-check w-3.5 h-3.5 bg-foreground">
                    <img
                      src="/assets/images/icons/ic_check.svg"
                      alt="icon"
                      className="opacity-0 w-3.5 h-3.5"
                    />
                  </div>
                </div>
                <p className="text-[14px] font-bold leading-[16px]">
                  Gratis. Tanpa komitmen.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[640px] overflow-clip">
            <img
              src="/assets/images/thumbnails/sass-cover.png"
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
