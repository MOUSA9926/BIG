import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="absolute top-6 left-6 z-[100]">
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
      >
        <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        <AnimatePresence mode="wait">
          <motion.span
            key={i18n.language}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-xs sm:text-sm font-bold min-w-[50px] text-center"
          >
            {i18n.language === 'ar' ? 'English' : 'العربية'}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
