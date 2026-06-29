import { motion } from 'motion/react';

export default function Workflow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="cara-kerja" className="mobile-section mobile-workflow">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 px-4 pt-10 sm:px-5 md:px-8 lg:gap-[50px] lg:px-[75px] lg:pt-[100px]">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-[42rem] flex-col items-center gap-3 text-center"
        >
          <h2 className="text-[clamp(1.85rem,8vw,3.125rem)] font-extrabold leading-tight lg:leading-[59px]">
            Proses Kerja Sederhana.
          </h2>
          <p className="text-base font-medium leading-7 text-slate lg:text-lg lg:leading-[21px]">
            Sistem operasional kami transparan dan berorientasi hasil
          </p>
        </motion.div>
        <div className="w-full max-w-[1130px] flex flex-col items-center lg:block">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            src="/assets/images/icons/arrow-top.svg"
            alt="arrow"
            className="ml-[67px] mb-5 hidden lg:block"
          />
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative grid w-full gap-4 before:absolute before:bottom-4 before:left-6 before:top-4 before:w-px before:bg-mist lg:flex lg:items-center lg:gap-20 lg:before:hidden"
          >
            {/* Item 1 */}
            <motion.div variants={itemVariants} className="mobile-workflow-card relative grid w-full gap-3 rounded-[24px] bg-section p-4 pl-[4.25rem] shadow-[0_18px_45px_rgba(26,26,46,0.06)] lg:flex lg:w-auto lg:flex-col lg:gap-5 lg:bg-transparent lg:p-2.5 lg:pl-2.5 lg:shadow-none">
              <div className="flex items-center gap-4">
                <div className="absolute left-0 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-[0_0_0_8px_var(--section)] lg:static lg:h-[50px] lg:w-[50px] lg:shadow-none">
                  <img
                    src="/assets/images/icons/security-user.svg"
                    alt="Discovery"
                    className="w-6 h-6 lg:w-auto lg:h-auto"
                  />
                </div>
                <h3 className="font-poppins text-lg lg:text-[20px] font-semibold leading-[30px]">
                  Discovery
                </h3>
              </div>
              <p className="text-[15px] lg:text-[16px] leading-7 font-medium w-full lg:w-[276px] mr-0 lg:mr-[27.33px]">
                Mencatat kebutuhan dan masalah bisnis Anda melalui sesi meeting, lalu menyusun proposal dan timeline.
              </p>
            </motion.div>
            {/* Item 2 */}
            <motion.div variants={itemVariants} className="mobile-workflow-card relative grid w-full gap-3 rounded-[24px] bg-section p-4 pl-[4.25rem] shadow-[0_18px_45px_rgba(26,26,46,0.06)] lg:flex lg:w-auto lg:flex-col lg:gap-5 lg:bg-transparent lg:p-2.5 lg:pl-2.5 lg:shadow-none">
              <div className="flex items-center gap-4">
                <div className="absolute left-0 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-[0_0_0_8px_var(--section)] lg:static lg:h-[50px] lg:w-[50px] lg:shadow-none">
                  <img
                    src="/assets/images/icons/3d-cube-scan.svg"
                    alt="Produksi"
                    className="w-6 h-6 lg:w-auto lg:h-auto"
                  />
                </div>
                <h3 className="font-poppins text-lg lg:text-[20px] font-semibold leading-[30px]">
                  Produksi & Review
                </h3>
              </div>
              <p className="text-[15px] lg:text-[16px] leading-7 font-medium w-full lg:w-[276px] mr-0 lg:mr-[27.33px]">
                Proses eksekusi kreatif oleh tim spesialis kami dan tahapan review yang terstruktur untuk memastikan kualitas.
              </p>
            </motion.div>
            {/* Item 3 */}
            <motion.div variants={itemVariants} className="mobile-workflow-card relative grid w-full gap-3 rounded-[24px] bg-section p-4 pl-[4.25rem] shadow-[0_18px_45px_rgba(26,26,46,0.06)] lg:flex lg:w-auto lg:flex-col lg:gap-5 lg:bg-transparent lg:p-2.5 lg:pl-2.5 lg:shadow-none">
              <div className="flex items-center gap-4">
                <div className="absolute left-0 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-[0_0_0_8px_var(--section)] lg:static lg:h-[50px] lg:w-[50px] lg:shadow-none">
                  <img
                    src="/assets/images/icons/crown.svg"
                    alt="Final Delivery"
                    className="w-6 h-6 lg:w-auto lg:h-auto"
                  />
                </div>
                <h3 className="font-poppins text-lg lg:text-[20px] font-semibold leading-[30px]">
                  Final Delivery
                </h3>
              </div>
              <p className="text-[15px] lg:text-[16px] leading-7 font-medium w-full lg:w-[276px] mr-0 lg:mr-[27.33px]">
                Serah terima hasil pekerjaan beserta dokumen pendukung, dilanjutkan dengan layanan purna jual (aftercare).
              </p>
            </motion.div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            src="/assets/images/icons/arrow-bottom.svg"
            alt="arrow"
            className="mt-5 ml-[514px] hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
