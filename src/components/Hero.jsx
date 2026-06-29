import Navbar from "./Navbar";
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import portfolioImg from '../assets/portofolio.png';
import portfolioMobileImg from '../assets/portofolio-mobile.png';
import { useEffect, useState } from "react";

const clientLogos = [
  { src: "/assets/images/icons/logoipsum-1.svg", alt: "Client Logo 1" },
  { src: "/assets/images/icons/logoipsum-2.svg", alt: "Client Logo 2" },
  { src: "/assets/images/icons/logoipsum-3.svg", alt: "Client Logo 3" },
  { src: "/assets/images/icons/logoipsum-4.svg", alt: "Client Logo 4" },
  { src: "/assets/images/icons/logoipsum-5.svg", alt: "Client Logo 5" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable parallax on mobile to prevent overflow issues
  const shouldReduceMotion = reduceMotion || isMobile;
  const imageY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 150]);
  const textY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const floatVariants1 = {
    animate: reduceMotion ? { y: 0 } : {
      y: [0, -12, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatVariants2 = {
    animate: reduceMotion ? { y: 0 } : {
      y: [0, -15, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
    }
  };

  return (
    <header className="mobile-hero w-full overflow-hidden bg-section pb-9 pt-[92px] sm:pt-[110px] lg:pb-[70px] lg:pt-[200px]">
      <div className="relative flex justify-center w-full">
        <Navbar />
        <motion.div 
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="mobile-shell flex w-full max-w-[1280px] flex-col items-center gap-8 px-4 sm:px-5 md:px-8 lg:gap-[30px] lg:px-[75px]"
        >
          <div className="mobile-hero-grid grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(460px,0.92fr)] lg:gap-[30px]">
            <motion.div style={{ y: textY }} className="mobile-hero-copy order-2 flex w-full min-w-0 flex-col items-center gap-5 py-2 text-center lg:order-1 lg:items-start lg:gap-[30px] lg:py-0 lg:text-left">
              <motion.h1 variants={itemVariants} className="max-w-[12ch] text-[clamp(1.9rem,9.4vw,2.55rem)] font-extrabold leading-[1.04] tracking-normal sm:max-w-[14ch] lg:max-w-none lg:text-[60px] lg:leading-[70px]">
                <span className="mobile-hero-title-mobile">
                  <span>
                    <mark className="-mx-1 inline-flex min-h-[0.92em] items-center justify-center bg-primary px-2.5 leading-none lg:h-[50px] lg:px-4">
                      Membangun
                    </mark>{" "}
                    Fondasi
                  </span>
                  <span>
                    Pertumbuhan Bisnis{" "}
                    <mark className="-mx-1 inline-flex min-h-[0.92em] items-center justify-center bg-primary px-2.5 leading-none lg:h-[50px] lg:px-4">
                      Anda.
                    </mark>
                  </span>
                </span>
                <span className="mobile-hero-title-desktop hidden lg:inline">
                  <mark className="-mx-1 inline-flex min-h-[0.92em] items-center justify-center bg-primary px-2.5 leading-none lg:h-[50px] lg:px-4">
                    Membangun
                  </mark>
                  <br />
                  {" "}Fondasi Pertumbuhan Bisnis{" "}
                  <br />
                  <mark className="-mx-1 inline-flex min-h-[0.92em] items-center justify-center bg-primary px-2.5 leading-none lg:h-[50px] lg:px-4">
                    Anda.
                  </mark>
                </span>
              </motion.h1>
              <motion.p variants={itemVariants} className="w-full max-w-[34rem] text-[clamp(0.98rem,4vw,1.125rem)] font-medium leading-7 text-slate lg:leading-8">
                ARUNA membantu bisnis tampil lebih jelas, dipercaya, dan profesional sebelum tumbuh lebih besar.
              </motion.p>
              <motion.div variants={itemVariants} className="mobile-hero-actions flex w-full max-w-[21rem] items-center justify-center gap-2 pt-1 sm:w-auto lg:mt-0 lg:max-w-none lg:gap-3">
                <a
                  href="#kontak"
                  className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-primary px-6 py-3.5 text-center text-[16px] font-bold leading-[19px] transition-all duration-300 hover:shadow-primary lg:min-h-[60px] lg:flex-none lg:px-[30px]"
                >
                  Konsultasi Sekarang
                </a>
                <a
                  href="#layanan"
                  className="flex min-h-12 flex-1 items-center justify-center rounded-full border border-foreground px-6 py-3.5 text-center text-[16px] font-bold leading-[19px] transition-all duration-300 hover:border-primary hover:bg-primary hover:text-foreground hover:ring-2 hover:ring-primary lg:min-h-[60px] lg:flex-none lg:px-[30px]"
                >
                  Lihat Layanan
                </a>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: imageY }} variants={itemVariants} className="mobile-hero-visual order-1 relative mx-auto flex h-[min(88vw,390px)] w-full max-w-[420px] shrink-0 justify-center lg:order-2 lg:mt-0 lg:h-[507px] lg:max-w-none lg:justify-end">
              <motion.div 
                initial={reduceMotion ? false : { scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mobile-hero-image mx-auto h-full w-[76%] overflow-clip rounded-[22px] shadow-[0_24px_60px_rgba(26,26,46,0.14)] lg:ml-[52px] lg:mr-[51px] lg:h-[506px] lg:w-[447px] lg:rounded-[26px]"
              >
                <picture>
                  <source media="(max-width: 767px)" srcSet={portfolioMobileImg} />
                  <img
                    src={portfolioImg}
                    className="mobile-hero-img h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Preview portofolio desain ARUNA"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </motion.div>
              <motion.div 
                variants={floatVariants1}
                animate="animate"
                className="mobile-float-card mobile-float-card--value absolute right-0 top-[6%] flex w-[min(34vw,128px)] flex-col items-center gap-2 rounded-[22px] bg-white p-3 drop-shadow-custom lg:right-0 lg:top-[77px] lg:w-[140px] lg:gap-3 lg:rounded-[24px] lg:p-4"
              >
                <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-primary flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground w-5 h-5 lg:w-[26px] lg:h-[26px]">
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
                  </svg>
                </div>
                <p className="text-foreground font-bold text-[13px] lg:text-[15px] text-center leading-tight">Meningkatkan<br/>Value</p>
              </motion.div>
              <motion.div 
                variants={floatVariants2}
                animate="animate"
                className="mobile-float-card mobile-float-card--clients absolute bottom-[6%] left-0 flex items-center gap-2.5 rounded-full bg-white p-2 pr-3 drop-shadow-custom lg:bottom-[68px] lg:left-0 lg:gap-4 lg:p-3 lg:pr-6"
              >
                <div className="flex -space-x-2 lg:-space-x-3">
                  <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-primary flex items-center justify-center border-[3px] border-white z-20">
                    <span className="font-bold text-foreground text-[14px] lg:text-[16px]">50+</span>
                  </div>
                  <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-mist flex items-center justify-center border-[3px] border-white z-10 overflow-hidden">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-slate flex items-center justify-center border-[3px] border-white z-0 overflow-hidden">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
                <p className="font-bold text-foreground text-[14px] lg:text-[16px] leading-tight">Klien Bisnis<br/>Terbantu</p>
              </motion.div>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="mobile-trust flex w-full flex-col items-center gap-5 border-t border-mist/80 pt-7 lg:mt-10 lg:gap-[30px] lg:border-t-0 lg:pt-0">
            <h2 className="w-full max-w-[450px] px-2 text-center text-[clamp(1.25rem,6vw,2rem)] font-bold leading-snug lg:leading-[46px]">
              Dipercaya oleh Berbagai Klien untuk Tumbuh
            </h2>
            <div className="mobile-logo-grid grid w-full max-w-[30rem] grid-cols-2 place-items-center gap-x-6 gap-y-4 opacity-70 sm:grid-cols-5 sm:max-w-none lg:h-[34px] lg:gap-[70px]">
              <motion.div
                className="mobile-logo-track"
                animate={isMobile && !reduceMotion ? { x: ["-50%", "0%"] } : { x: 0 }}
                transition={isMobile && !reduceMotion ? { duration: 18, ease: "linear", repeat: Infinity } : undefined}
              >
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <img
                    key={`${logo.src}-${index}`}
                    src={logo.src}
                    className={`h-6 lg:h-auto ${index >= clientLogos.length ? "mobile-logo-duplicate" : ""}`}
                    alt={index < clientLogos.length ? logo.alt : ""}
                    aria-hidden={index >= clientLogos.length ? "true" : undefined}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
