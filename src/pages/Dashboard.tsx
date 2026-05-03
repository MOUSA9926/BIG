import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Image as ImageIcon, Calendar, Map, Info, Swords } from "lucide-react";
import { BackgroundTheme } from "../components/BackgroundTheme";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  const getItems = (type: string) => [1, 2, 3, 4, 5, 6].map(i => {
    if (type === 'events' && i === 1) return { id: i, title: t('dashboard.event_names.bear_trap'), isNew: true, image: 'https://up6.cc/2026/05/17776951335711.png', link: '/info/events/bear-trap' };
    if (type === 'events' && i === 2) return { id: i, title: t('dashboard.event_names.sword_land'), isNew: true, image: 'https://up6.cc/2026/05/177769585886741.png', link: '/info/events/sword-land' };
    if (type === 'events' && i === 3) return { id: i, title: t('dashboard.event_names.eternal_arrival'), isNew: true, image: 'https://up6.cc/2026/05/177769616657811.png', link: '/info/events/eternity-reach' };
    if (type === 'events' && i === 4) return { id: i, title: t('dashboard.event_names.alliance_championship'), isNew: true, image: 'https://up6.cc/2026/05/17776977900621.png' };
    if (type === 'events' && i === 5) return { id: i, title: t('dashboard.event_names.hall_of_rulers'), isNew: true, image: 'https://up6.cc/2026/05/177769814734531.png' };
    
    let defaultTitle = '';
    if (type === 'events') defaultTitle = t('dashboard.categories.events') + ' #' + i;
    else if (type === 'plans') defaultTitle = t('dashboard.categories.plans') + ' #' + i;
    else if (type === 'info') defaultTitle = t('dashboard.categories.info') + ' #' + i;
    else defaultTitle = t('dashboard.categories.heroes') + ' #' + i;

    return { id: i, title: defaultTitle, isNew: i <= 2, image: null };
  });

  const categories = [
    { id: "events", title: t('dashboard.categories.events'), icon: Calendar, color: "orange", hoverBorder: "hover:border-orange-500/40", hoverText: "group-hover:text-orange-400", borderColor: "border-orange-500", items: getItems("events") },
    { id: "plans", title: t('dashboard.categories.plans'), icon: Map, color: "cyan", hoverBorder: "hover:border-cyan-500/40", hoverText: "group-hover:text-cyan-400", borderColor: "border-cyan-500", items: getItems("plans") },
    { id: "info", title: t('dashboard.categories.info'), icon: Info, color: "white", hoverBorder: "hover:border-white/40", hoverText: "group-hover:text-white", borderColor: "border-white", items: getItems("info") },
    { id: "heroes", title: t('dashboard.categories.heroes'), icon: Swords, color: "red", hoverBorder: "hover:border-red-500/40", hoverText: "group-hover:text-red-400", borderColor: "border-red-500", items: getItems("heroes") },
  ];

  return (
    <BackgroundTheme>
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <motion.div
           initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="flex"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 sm:mb-12 group">
            <BackIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="font-semibold text-lg">{t('common.back_to_home')}</span>
          </Link>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-12 text-center relative"
        >
          <h1 className="text-[clamp(1.75rem,8vw,3rem)] font-black text-white drop-shadow-md mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-orange-400 leading-tight text-balance">
            {t('dashboard.title')}
          </h1>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">
            {t('dashboard.desc')}
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-10">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="relative w-full"
            >
              <div className="flex items-center gap-3 mb-4 px-2">
                <category.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${category.hoverText.replace('group-', '')}`} />
                <h2 className={`text-[clamp(1.1rem,5vw,1.5rem)] font-bold text-white drop-shadow-sm border-inline-end-4 ${category.borderColor} pe-4 leading-tight`}>
                  {category.title}
                </h2>
              </div>
              
              {/* Horizontal Slider Area */}
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar scroll-smooth px-2 -mx-2 sm:px-0 sm:mx-0">
                {category.items.map((item) => {
                  const cardContent = (
                    <div 
                      className={`w-[220px] sm:w-[260px] shrink-0 snap-center bg-black/40 backdrop-blur-md border border-white/10 ${category.hoverBorder} rounded-2xl p-4 transition-all duration-300 group h-full cursor-pointer`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`font-bold text-gray-200 text-sm sm:text-base ${category.hoverText} transition-colors line-clamp-1`}>
                          {item.title}
                        </h3>
                        {item.isNew && <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-400">{t('common.new')}</span>}
                      </div>
                      
                      {/* Image Area */}
                      <div className={`w-full aspect-video bg-white/5 border border-white/10 ${item.image ? 'border-solid' : 'border-dashed'} rounded-xl flex flex-col items-center justify-center text-gray-500 transition-all duration-300 overflow-hidden relative group-hover:bg-white/10 ${category.hoverBorder}`}>
                         {item.image ? (
                           <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                         ) : (
                           <>
                             <ImageIcon className="w-8 h-8 mb-2 opacity-40 group-hover:scale-110 transition-transform duration-300" />
                             <span className="text-xs sm:text-sm font-medium px-2 text-center">{t('dashboard.categories.info')}</span>
                           </>
                         )}
                      </div>
                    </div>
                  );
                  
                  return item.link ? (
                    <Link to={item.link} key={`${category.id}-${item.id}`} className="block shrink-0">
                      {cardContent}
                    </Link>
                  ) : (
                    <div key={`${category.id}-${item.id}`} className="shrink-0">
                      {cardContent}
                    </div>
                  );
                })}
                
                {/* Visual padding at the end of the slider */}
                <div className="w-4 shrink-0 sm:hidden"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </BackgroundTheme>
  );
}
