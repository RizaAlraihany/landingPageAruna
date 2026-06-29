import Navbar from "./Navbar";
import { motion, useScroll, useTransform } from 'motion/react';
import portfolioImg from '../assets/portofolio.png';
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable parallax on mobile to prevent overflow issues
  const imageY = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 150]);
  const textY = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 50]);

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
    animate: {
      y: [0, -12, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatVariants2 = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
    }
  };

  return (
    <header className="bg-section w-full pb-10 lg:pb-[70px] pt-[120px] lg:pt-[200px] overflow-hidden">
      <div className="relative flex justify-center w-full">
        <Navbar />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10 lg:gap-[30px] px-4 md:px-8 lg:px-[75px] max-w-[1280px] w-full items-center lg:items-start"
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30px] w-full items-center justify-between">
            <motion.div style={{ y: textY }} className="flex flex-col gap-6 lg:gap-[30px] w-full lg:w-[50%] shrink-0 py-4 lg:py-0 items-center text-center lg:items-start lg:text-left">
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-[50px] md:leading-[60px] lg:leading-[70px]">
                <mark className="bg-primary -mx-1 inline-flex items-center justify-center h-[40px] lg:h-[50px] px-4">
                  Membangun
                </mark>
                <br className="hidden lg:block" />
                {" "}Fondasi Pertumbuhan Bisnis{" "}
                <br className="hidden lg:block" />
                <mark className="bg-primary inline-flex -mx-1 items-center justify-center h-[40px] lg:h-[50px] px-4">
                  Anda.
                </mark>
              </motion.h1>
              <motion.p variants={itemVariants} className="w-full max-w-[484px] text-base lg:text-lg leading-7 lg:leading-8 font-medium">
                ARUNA membantu bisnis tampil lebih jelas, dipercaya, dan profesional sebelum tumbuh lebih besar.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3.5 mt-4 lg:mt-0 w-full sm:w-auto">
                <a
                  href="#konsultasi"
                  className="px-6 lg:px-[30px] py-4 lg:py-[20px] rounded-[100px] bg-primary text-[16px] font-bold leading-[19px] transition-all duration-300 hover:shadow-primary text-center"
                >
                  Konsultasi Sekarang
                </a>
                <a
                  href="#layanan"
                  className="px-6 lg:px-[30px] py-4 lg:py-[20px] rounded-[100px] border border-foreground text-[16px] font-bold leading-[19px] transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary hover:border-primary hover:text-foreground text-center"
                >
                  Lihat Layanan
                </a>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: imageY }} variants={itemVariants} className="relative w-full max-w-[400px] lg:max-w-none lg:w-[50%] shrink-0 aspect-[1/1] lg:h-[507px] mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto lg:ml-[52px] lg:mr-[51px] w-[85%] lg:w-[447px] h-full lg:h-[506px] rounded-[26px] overflow-clip"
              >
                <img
                  src={portfolioImg}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  alt="Portfolio Preview"
                />
              </motion.div>
              <motion.div 
                variants={floatVariants1}
                animate="animate"
                className="absolute top-[10%] lg:top-[77px] -right-2 lg:right-0 w-[120px] lg:w-[140px] bg-white rounded-[24px] p-3 lg:p-4 flex flex-col items-center gap-2 lg:gap-3 drop-shadow-custom"
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
                className="absolute bottom-[10%] lg:bottom-[68px] -left-2 lg:left-0 bg-white rounded-[100px] p-2 lg:p-3 pr-4 lg:pr-6 flex items-center gap-3 lg:gap-4 drop-shadow-custom"
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
          <motion.div variants={itemVariants} className="flex flex-col gap-6 lg:gap-[30px] items-center mt-6 lg:mt-10 w-full">
            <h2 className="w-full max-w-[450px] font-bold text-[24px] lg:text-[32px] leading-snug lg:leading-[46px] text-center px-4">
              Dipercaya oleh Berbagai Klien untuk Tumbuh
            </h2>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-[70px] h-auto lg:h-[34px] opacity-70">
              <img src="/assets/images/icons/logoipsum-1.svg" className="h-6 lg:h-auto" alt="Client Logo 1" />
              <img src="/assets/images/icons/logoipsum-2.svg" className="h-6 lg:h-auto" alt="Client Logo 2" />
              <img src="/assets/images/icons/logoipsum-3.svg" className="h-6 lg:h-auto" alt="Client Logo 3" />
              <img src="/assets/images/icons/logoipsum-4.svg" className="h-6 lg:h-auto" alt="Client Logo 4" />
              <img src="/assets/images/icons/logoipsum-5.svg" className="h-6 lg:h-auto" alt="Client Logo 5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
