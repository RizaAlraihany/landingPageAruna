import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section>
      <div className="mx-auto px-4 md:px-8 lg:px-[142px] py-10 lg:py-[100px] max-w-[1280px] w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row w-full items-center gap-12 lg:gap-[70px]"
        >
          <div className="relative shrink-0 w-full sm:w-[380px] lg:w-[456px] h-[360px] lg:h-[510px] mx-auto lg:mx-0">
            <div className="absolute w-[260px] lg:w-[350px] h-[340px] lg:h-[470px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-10 bottom-0 rounded-[26px] overflow-clip">
              <img
                src="/assets/images/thumbnails/testimonial.png"
                alt="image"
                className="object-cover w-full h-full"
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
          <div className="flex flex-col gap-6 lg:gap-[30px] items-center lg:items-start text-center lg:text-left">
            <div className="flex gap-0.5">
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
              <img src="/assets/images/icons/star.svg" alt="star" className="w-5 lg:w-auto" />
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="w-full lg:w-[470px] text-xl lg:text-[32px] leading-relaxed lg:leading-[46px]">
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
            <div className="flex flex-col gap-4 lg:gap-5">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
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
              <div className="flex items-center gap-3 justify-center lg:justify-start">
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
