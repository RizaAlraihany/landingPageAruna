import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="kontak" className="mobile-cta bg-foreground">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-[1280px] overflow-hidden px-4 py-10 sm:px-5 md:px-8 lg:px-[75px] lg:py-0"
      >
        <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_640px] lg:gap-[85px]">
          <div className="flex w-full flex-col items-start gap-5 text-left lg:gap-[30px]">
            <div className="flex flex-col gap-2.5 text-white">
              <h2 className="text-[clamp(1.55rem,7vw,2rem)] font-bold leading-tight lg:leading-[46px]">
                Siap Tampil Lebih Profesional?
              </h2>
              <p className="w-full text-base font-medium leading-7 text-white/85 lg:w-[484px] lg:text-lg lg:leading-[32px]">
                Jadwalkan sesi konsultasi gratis dengan tim ARUNA. 
                Mari bangun fondasi pertumbuhan untuk bisnis Anda sekarang.
              </p>
            </div>
            <div className="grid w-full gap-4 sm:w-auto sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:gap-6">
              <a
                href="mailto:hello@aruna.id"
                className="flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-[30px] py-3.5 text-center text-[16px] font-bold leading-[19px] text-foreground transition-all duration-300 hover:shadow-primary sm:w-auto lg:min-h-[60px] lg:py-[20px]"
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
          <div className="h-[min(64vw,320px)] w-full overflow-clip rounded-[24px] lg:h-auto lg:w-[640px] lg:rounded-none">
            <img
              src="/assets/images/thumbnails/sass-cover.png"
              alt="Contoh pekerjaan digital ARUNA"
              className="object-cover w-full h-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
