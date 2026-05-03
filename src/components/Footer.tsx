import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="py-12 px-6 border-t border-white/5 bg-black/20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
        <div className="flex flex-col gap-1">
          <p className="text-gray-400 font-bold text-lg">
            {t('common.footer.rights')} <span className="text-orange-500">BiG</span>
          </p>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {t('common.footer.server')} 1837</p>
        </div>
        
        <div className="h-px w-12 bg-white/10 md:hidden" />
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-gray-400 font-medium">
            {t('common.footer.designed_by')} <span className="text-cyan-400 font-black tracking-wider uppercase">MOUSA</span>
          </p>
          <div className="flex gap-4 mt-2">
            <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-l from-cyan-500 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
