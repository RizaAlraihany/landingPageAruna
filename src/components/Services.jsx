import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import portfolioImg from '../assets/portofolio.png';

const services = [
  {
    id: 1,
    title: 'Brand Identity',
    iconClass: 'icon-crown',
    iconFile: 'crown.svg',
    image: portfolioImg,
    heading: 'Identitas Visual Profesional & Konsisten',
    description: 'Kami membangun fondasi visual brand Anda agar lebih mudah dikenali dan dipercaya oleh pelanggan.',
    features: ['Logo Design', 'Color Palette', 'Brand Guideline'],
  },
  {
    id: 2,
    title: 'Website',
    iconClass: 'icon-note',
    iconFile: 'note-2.svg',
    image: portfolioImg,
    heading: 'Kehadiran Digital yang Kredibel',
    description: 'Tingkatkan kredibilitas bisnis Anda dengan website yang cepat, responsif, dan didesain khusus untuk Anda.',
    features: ['Landing Page', 'Company Profile', 'Website Sederhana'],
  },
  {
    id: 3,
    title: 'Photography',
    iconClass: 'icon-message',
    iconFile: 'device-message.svg',
    image: portfolioImg,
    heading: 'Visual Produk yang Menjual',
    description: 'Meningkatkan kualitas komunikasi visual brand melalui foto produk yang profesional dan menarik.',
    features: ['Foto Produk', 'Konten Visual Dasar', 'Styling Produk'],
  },
  {
    id: 4,
    title: 'Social Media',
    iconClass: 'icon-lock',
    iconFile: 'lock.svg',
    image: portfolioImg,
    heading: 'Konsistensi Komunikasi Brand',
    description: 'Kami menjaga brand Anda tetap aktif dan relevan di media sosial dengan konten yang terencana.',
    features: ['Content Calendar', 'Feed Design (6-12 post)', 'Caption Writing'],
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const currentService = services.find(s => s.id === activeTab);

  return (
    <section id="layanan" className="flex justify-center px-4 md:px-8 lg:px-[126px] py-10 lg:py-[100px]">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-10 lg:gap-[50px] w-full max-w-[1280px]"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl lg:text-[50px] text-center leading-snug lg:leading-[59px] font-extrabold">
            Layanan Kami
          </h2>
          <p className="text-base lg:text-lg text-center leading-[21px] font-medium">
            Fondasi yang Anda butuhkan untuk tampil lebih jelas
          </p>
        </div>

        {/* Tabs button */}
        <div className="flex w-full gap-4 lg:gap-[70px] border-b border-mist overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className="tab-menu group flex flex-col gap-4 lg:gap-[30px] justify-between cursor-pointer shrink-0"
            >
              <div className="flex gap-4 items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 lg:w-[50px] lg:h-[50px] shrink-0 rounded-full transition-all duration-300 ${
                    activeTab === service.id ? 'bg-primary' : 'bg-tab-off group-hover:bg-primary'
                  }`}
                >
                  <div
                    className={`${service.iconClass} ${
                      activeTab === service.id ? 'bg-foreground' : 'bg-white group-hover:bg-foreground'
                    } transition-all duration-300 w-5 h-5 lg:w-auto lg:h-auto`}
                  >
                    <img
                      src={`/assets/images/icons/${service.iconFile}`}
                      alt={service.title}
                      className="opacity-0 w-full h-full"
                    />
                  </div>
                </div>
                <h3
                  className={`font-poppins text-nowrap text-[16px] lg:text-[20px] leading-[30px] ${
                    activeTab === service.id ? 'font-semibold' : 'font-medium'
                  }`}
                >
                  {service.title}
                </h3>
              </div>
              <div className="tab-indicator relative mt-2 lg:mt-0">
                <div
                  className={`absolute -bottom-[1.5px] rounded-full h-[3px] w-full transition-all duration-300 ${
                    activeTab === service.id ? 'bg-foreground' : 'bg-transparent group-hover:bg-foreground/50'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab content */}
        <div className="tab-content flex flex-col lg:flex-row items-center gap-8 lg:gap-[50px] px-0 lg:px-[29px] overflow-hidden min-h-[470px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[50px] w-full"
            >
              <div className="tab-img w-full lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[470px] rounded-[26px] shrink-0 overflow-clip">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-6 lg:gap-[30px] w-full">
                <div className="flex flex-col gap-2.5 w-full lg:w-[470px]">
                  <h4 className="tab-title text-2xl lg:text-[32px] leading-snug lg:leading-[46px] font-bold text-center lg:text-left">
                    {currentService.heading}
                  </h4>
                  <p className="tab-description text-base lg:text-lg leading-7 lg:leading-8 font-medium text-center lg:text-left">
                    {currentService.description}
                  </p>
                </div>
                <div className="tab-features flex flex-col gap-4 lg:gap-5">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-center justify-center lg:justify-start">
                      <div className="flex items-center justify-center w-6 h-6 lg:w-[30px] lg:h-[30px] bg-primary rounded-full shrink-0">
                        <img
                          src="/assets/images/icons/ic_check.svg"
                          alt="check icon"
                          className="w-3 lg:w-auto"
                        />
                      </div>
                      <p className="text-base lg:text-lg font-bold leading-[21px] text-navy">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="#konsultasi"
                  className="px-5 py-3 text-[16px] leading-[19px] w-full lg:w-fit text-center font-semibold border border-foreground rounded-[100px] transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary hover:border-primary hover:text-foreground mt-2 lg:mt-4"
                >
                  Pesan Sekarang
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
