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
    <section id="cara-kerja">
      <div className="mx-auto flex flex-col gap-10 lg:gap-[50px] pt-10 lg:pt-[100px] px-4 md:px-8 lg:px-[75px] max-w-[1280px] w-full items-center">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <h2 className="text-3xl lg:text-[50px] font-extrabold leading-snug lg:leading-[59px]">
            Proses Kerja Sederhana.
          </h2>
          <p className="text-base lg:text-lg font-medium leading-[21px]">
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
            className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20 w-full"
          >
            {/* Item 1 */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5 p-2.5 w-full lg:w-auto">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 lg:w-[50px] lg:h-[50px] rounded-full bg-primary shrink-0">
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
            <motion.div variants={itemVariants} className="flex flex-col gap-5 p-2.5 w-full lg:w-auto">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 lg:w-[50px] lg:h-[50px] rounded-full bg-primary shrink-0">
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
            <motion.div variants={itemVariants} className="flex flex-col gap-5 p-2.5 w-full lg:w-auto">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 lg:w-[50px] lg:h-[50px] rounded-full bg-primary shrink-0">
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
