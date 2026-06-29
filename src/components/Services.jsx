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
    <section id="layanan" className="mobile-section mobile-services flex scroll-mt-24 justify-center px-4 py-10 sm:px-5 md:px-8 lg:scroll-mt-28 lg:px-[126px] lg:py-[100px]">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full max-w-[1280px] flex-col gap-8 lg:gap-[50px]"
      >
        <div className="mx-auto flex max-w-[42rem] flex-col gap-2.5 text-center lg:gap-3">
          <h2 className="text-[1.55rem] font-extrabold leading-tight lg:text-[clamp(1.9rem,8vw,3.125rem)] lg:leading-[59px]">
            Layanan Kami
          </h2>
          <p className="mx-auto max-w-[17rem] text-sm font-medium leading-6 text-slate lg:max-w-none lg:text-[clamp(0.98rem,4vw,1.125rem)] lg:leading-[21px]">
            Fondasi yang Anda butuhkan untuk tampil lebih jelas
          </p>
        </div>

        {/* Tabs button */}
        <div className="mobile-service-tabs flex w-full gap-2 overflow-x-auto rounded-none border-0 bg-transparent px-0 pb-2 shadow-none lg:gap-[70px] lg:overflow-visible lg:rounded-none lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:p-0 lg:shadow-none">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveTab(service.id)}
              className={`mobile-service-tab tab-menu group flex min-h-11 w-auto shrink-0 cursor-pointer flex-row items-center justify-center gap-0 rounded-full border border-mist/80 px-3 py-1.5 text-left shadow-[0_10px_28px_rgba(26,26,46,0.045)] transition-all duration-300 lg:min-h-0 lg:w-auto lg:shrink-0 lg:flex-col lg:items-stretch lg:justify-between lg:gap-2 lg:rounded-none lg:border-0 lg:p-0 lg:shadow-none ${
                activeTab === service.id ? 'bg-foreground text-white lg:bg-transparent lg:text-foreground' : 'text-foreground hover:bg-mist/60 lg:hover:bg-transparent'
              }`}
              aria-pressed={activeTab === service.id}
            >
              <div className="flex items-center gap-2 lg:gap-4">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 lg:h-[50px] lg:w-[50px] ${
                    activeTab === service.id ? 'bg-primary' : 'bg-tab-off group-hover:bg-primary'
                  }`}
                >
                  <div
                    className={`${service.iconClass} ${
                      activeTab === service.id ? 'bg-foreground lg:bg-foreground' : 'bg-white group-hover:bg-foreground'
                    } h-3.5 w-3.5 transition-all duration-300 lg:h-auto lg:w-auto`}
                  >
                    <img
                      src={`/assets/images/icons/${service.iconFile}`}
                      alt={service.title}
                      className="opacity-0 w-full h-full"
                    />
                  </div>
                </div>
                <h3
                  className={`font-poppins text-[12.5px] leading-none lg:text-nowrap lg:text-[20px] lg:leading-[30px] ${
                    activeTab === service.id ? 'font-semibold' : 'font-medium'
                  }`}
                >
                  {service.title}
                </h3>
              </div>
              <div className="tab-indicator relative mt-2 hidden lg:mt-0 lg:block">
                <div
                  className={`absolute -bottom-[1.5px] rounded-full h-[3px] w-full transition-all duration-300 ${
                    activeTab === service.id ? 'bg-foreground' : 'bg-transparent group-hover:bg-foreground/50'
                  }`}
                ></div>
              </div>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="tab-content overflow-hidden px-0 lg:min-h-[470px] lg:px-[29px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mobile-service-content grid w-full gap-6 lg:grid-cols-[450px_minmax(0,1fr)] lg:items-center lg:gap-[50px]"
            >
              <div className="mobile-service-img tab-img hidden h-[min(72vw,330px)] w-full overflow-clip rounded-[24px] shadow-[0_24px_60px_rgba(26,26,46,0.10)] sm:h-[360px] lg:block lg:h-[470px] lg:w-[450px] lg:rounded-[26px]">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mobile-service-panel flex w-full flex-col gap-3.5 rounded-[24px] border border-mist/80 bg-white/70 p-[18px] shadow-[0_16px_40px_rgba(26,26,46,0.055)] lg:gap-[30px] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                <div className="flex w-full flex-col gap-2.5 lg:w-[470px]">
                  <h4 className="tab-title text-[1.18rem] font-bold leading-snug text-left lg:text-[clamp(1.45rem,6vw,2rem)] lg:leading-[46px]">
                    {currentService.heading}
                  </h4>
                  <p className="tab-description text-sm font-medium leading-relaxed text-slate lg:text-lg lg:leading-8">
                    {currentService.description}
                  </p>
                </div>
                <div className="tab-features grid gap-2 lg:gap-5">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="grid min-h-[34px] grid-cols-[22px_minmax(0,1fr)] items-center gap-2.5 lg:min-h-11 lg:grid-cols-[30px_minmax(0,1fr)] lg:gap-3">
                      <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-primary lg:h-[30px] lg:w-[30px]">
                        <img
                          src="/assets/images/icons/ic_check.svg"
                          alt="check icon"
                          className="w-3 lg:w-auto"
                        />
                      </div>
                      <p className="text-sm font-bold leading-snug text-navy lg:text-lg lg:leading-[21px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="#kontak"
                  className="mt-1 flex min-h-[42px] w-full items-center justify-center rounded-full border border-foreground px-5 py-2.5 text-center text-sm font-semibold leading-none transition-all duration-300 hover:border-primary hover:bg-primary hover:text-foreground hover:ring-2 hover:ring-primary sm:w-fit lg:mt-4 lg:min-h-12 lg:py-3 lg:text-[16px] lg:leading-[19px]"
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
