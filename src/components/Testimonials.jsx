import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="mobile-section mobile-testimonials">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-5 md:px-8 lg:px-[142px] lg:py-[100px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid w-full items-center gap-9 lg:grid-cols-[456px_minmax(0,1fr)] lg:gap-[70px]"
        >
          <div className="mobile-testimonial-visual relative mx-auto h-[min(96vw,380px)] w-full max-w-[390px] shrink-0 lg:mx-0 lg:h-[510px] lg:w-[456px] lg:max-w-none">
            <div className="absolute bottom-0 left-1/2 h-[92%] w-[72%] -translate-x-1/2 overflow-clip rounded-[24px] lg:left-10 lg:h-[470px] lg:w-[350px] lg:translate-x-0 lg:rounded-[26px]">
              <img
                src="/assets/images/thumbnails/testimonial.png"
                alt="Klien ARUNA setelah peningkatan visual brand"
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute w-[140px] lg:w-[170px] top-0 left-4 lg:left-0 bg-white rounded-[20px] p-3 lg:p-4 flex items-center gap-2 lg:gap-3 drop-shadow-custom z-10">
              <div className="w-8 h-8 lg:w-[46px] lg:h-[46px] rounded-full bg-primary flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <p className="font-bold text-foreground text-xs lg:text-sm leading-tight">Hyper<br/>Growth</p>
            </div>
            <div className="absolute w-[120px] lg:w-[140px] bottom-[20px] lg:bottom-[50px] right-4 lg:right-0 bg-white rounded-[20px] p-3 lg:p-4 flex flex-col items-center gap-2 drop-shadow-custom z-10">
              <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full bg-primary flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <p className="font-bold text-foreground text-xs lg:text-sm text-center leading-tight">Konversi<br/>Meningkat</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 text-left lg:gap-[30px]">
            <div className="flex gap-0.5">
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="w-full text-[clamp(1.18rem,5.5vw,2rem)] leading-relaxed lg:w-[470px] lg:leading-[46px]">
                <strong>
                  Sebelumnya bisnis kami{" "}
                  <mark className="bg-primary px-1 -mx-1">kurang menonjol</mark>{" "}
                  di mata pelanggan. Setelah dibantu ARUNA, semuanya terlihat lebih profesional.
                </strong>
              </p>
              <p className="text-[15px] lg:text-[16px] leading-[28px] font-medium">
                Klien UMKM Lokal
              </p>
            </div>
            <div className="grid gap-3 lg:gap-5">
              <div className="grid grid-cols-[30px_minmax(0,1fr)] items-center gap-3">
                <div className="flex justify-center items-center w-6 h-6 lg:w-[30px] lg:h-[30px] bg-foreground rounded-full shrink-0">
                  <div className="icon-check bg-white">
                    <img
                      src="/assets/images/icons/ic_check.svg"
                      alt="icon"
                      className="opacity-0 w-3 lg:w-auto"
                    />
                  </div>
                </div>
                <p className="text-base lg:text-lg leading-[21px] font-bold">
                  Identitas Visual Konsisten
                </p>
              </div>
              <div className="grid grid-cols-[30px_minmax(0,1fr)] items-center gap-3">
                <div className="flex justify-center items-center w-6 h-6 lg:w-[30px] lg:h-[30px] bg-foreground rounded-full shrink-0">
                  <div className="icon-check bg-white">
                    <img
                      src="/assets/images/icons/ic_check.svg"
                      alt="icon"
                      className="opacity-0 w-3 lg:w-auto"
                    />
                  </div>
                </div>
                <p className="text-base lg:text-lg leading-[21px] font-bold">
                  Kepercayaan Pelanggan Meningkat
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
