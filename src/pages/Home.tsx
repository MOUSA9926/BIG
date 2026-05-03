import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Swords, Trophy, Users, Zap, Target, PawPrint } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { WolfEye, BackgroundTheme } from "../components/BackgroundTheme";
import { Footer } from "../components/Footer";
import LanguageToggle from "../components/LanguageToggle";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const navigate = useNavigate();
  const [isLoginExpanded, setIsLoginExpanded] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (password === "BiG1837$AAAUUU#") {
      navigate("/dashboard");
    } else if (password.length > 0) {
      setIsPasswordError(true);
      setTimeout(() => {
        setIsPasswordError(false);
        setPassword("");
      }, 2000);
    }
  };

  return (
    <BackgroundTheme>
      <LanguageToggle />
      <header className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-14 mb-8 w-full max-w-4xl mx-auto" dir="ltr">
              <div className="translate-y-4 sm:translate-y-8 md:translate-y-12">
                <WolfEye theme="ice" position="left" />
              </div>
              
              <div className="flex items-center justify-center h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 rounded-full bg-black/40 border border-white/10 backdrop-blur-md relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] z-10 mx-2 sm:mx-6">
                {/* Split Icon Inner Background - matching visual split */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-orange-500/20" />
                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-cyan-500/20" />
                <Shield className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              </div>

              <div className="translate-y-4 sm:translate-y-8 md:translate-y-12">
                <WolfEye theme="fire" position="right" />
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center mb-8 relative">
              <div className="relative inline-block" dir="ltr">
                {/* Halo/Glow Effect */}
                <div 
                  className="absolute inset-0 text-[clamp(4.5rem,15vw,10rem)] font-black tracking-wider select-none text-transparent bg-clip-text blur-2xl opacity-70"
                  style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #ffffff, #f97316)' }}
                  aria-hidden="true"
                >
                  BiGDARK
                </div>
                {/* Main Title */}
                <h1 
                  className="relative text-[clamp(4.5rem,15vw,10rem)] font-black tracking-wider drop-shadow-md select-none text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #ffffff, #f97316)' }}
                >
                  BiGDARK
                </h1>
                {/* ID number position adjustments */}
                <span className={`hidden md:block absolute bottom-0 text-4xl sm:text-5xl font-mono text-gray-400 opacity-80 italic translate-y-[-20%] drop-shadow-sm ${isRtl ? '-left-24' : '-right-24'}`}>
                  1837
                </span>
              </div>
              
              <div className="text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-[0.6em] sm:tracking-[0.8em] mt-6 text-white/90 drop-shadow-md">
                {t('home.alliance')}
              </div>

              <div className="md:hidden text-xl font-mono text-gray-400 opacity-80 italic mt-4">
                1837
              </div>
            </div>
            
            <div className="mt-8 flex flex-col items-center justify-center relative z-20">
              <motion.div 
                layout
                className={`relative flex items-center bg-black/50 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 rounded-full ${isLoginExpanded ? 'w-64 sm:w-80 px-2' : 'w-40 px-6 cursor-pointer hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1'}`}
                onClick={() => !isLoginExpanded && setIsLoginExpanded(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-orange-500/10 via-transparent to-cyan-500/10 opacity-50 pointer-events-none"></div>
                
                <AnimatePresence mode="wait">
                  {!isLoginExpanded ? (
                    <motion.div 
                      key="login-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3 h-12 w-full"
                    >
                      <span className="text-xl font-bold text-white tracking-wide">
                        {t('common.login')}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="login-input"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center w-full h-12"
                      onSubmit={handleLogin}
                    >
                      <input 
                        autoFocus
                        type="password"
                        placeholder={t('common.password_placeholder') || "••••••"}
                        className="bg-transparent border-none outline-none text-white w-full px-4 text-center font-mono placeholder:text-gray-500 rtl:text-right"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => !password && setIsLoginExpanded(false)}
                      />
                    </motion.form>
                  )}
                </AnimatePresence>

                <div 
                  className={`relative flex items-center justify-center h-10 w-10 shrink-0 transition-all duration-500 ${isLoginExpanded ? (isRtl ? 'order-first' : 'order-last') : ''}`}
                  onClick={(e) => {
                    if (isLoginExpanded) {
                      e.stopPropagation();
                      handleLogin();
                    }
                  }}
                >
                  {/* Rotating Halo Effect */}
                  {isLoginExpanded && password.length > 0 && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 rounded-full border-2 border-transparent blur-[2px] ${isPasswordError ? 'border-red-500' : 'border-t-orange-500 border-b-cyan-500'}`}
                    />
                  )}
                  {isLoginExpanded && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full opacity-0 ${password.length > 0 ? 'opacity-100' : ''} ${isPasswordError ? 'bg-red-500/20' : 'bg-gradient-to-tr from-orange-500/20 to-cyan-500/20'}`}
                    />
                  )}
                  
                  <button 
                    type="button"
                    className={`relative z-10 transition-all duration-300 ${isLoginExpanded && password.length > 0 ? (isPasswordError ? 'text-red-500 scale-110' : 'text-white scale-110') : 'text-gray-400'}`}
                    title={isLoginExpanded ? t('common.click_to_login') : ""}
                  >
                    <PawPrint className={`w-6 h-6 transition-all duration-300 ${isLoginExpanded && password.length > 0 ? (isPasswordError ? 'drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]' : 'drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]') : 'drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]'}`} />
                  </button>
                </div>
              </motion.div>

              <span className="mt-3 text-sm text-gray-400/80 font-medium">
                {t('common.password_note')}
              </span>
            </div>
            
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-semibold">
              {t('home.intro')}
            </p>
          </motion.div>

          {/* Alliance Stats in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-5xl mx-auto"
          >
            {[
              { label: t('home.stats.total_power'), value: "2.4B", icon: Zap, theme: "fire", layoutClass: "order-1 sm:order-1" },
              { label: t('home.stats.wars_won'), value: "∞", icon: Swords, theme: "fire", layoutClass: "order-3 sm:order-2" },
              { label: t('home.stats.rank'), value: "#1", icon: Target, theme: "ice", layoutClass: "order-2 sm:order-3" },
              { label: t('home.stats.members'), value: "100/100", icon: Users, theme: "ice", layoutClass: "order-4 sm:order-4" },
            ].map((stat, idx) => {
              const isFire = stat.theme === 'fire';
              return (
              <div key={idx} className={`bg-black/40 border backdrop-blur-md rounded-[2rem] p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group ${stat.layoutClass} ${
                isFire ? 'border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/10' : 'border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-cyan-500/10'
              }`}>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-b ${
                  isFire ? 'from-orange-500 to-transparent' : 'from-cyan-500 to-transparent'
                }`} />
                <stat.icon className={`w-8 h-8 mb-4 mx-auto drop-shadow-[0_0_15px_currentColor] transition-colors relative z-10 ${
                  isFire ? 'text-orange-400 group-hover:text-orange-300' : 'text-cyan-400 group-hover:text-cyan-300'
                }`} />
                <dt className="text-sm md:text-base font-semibold text-gray-400 relative z-10">{stat.label}</dt>
                <dd className={`mt-2 text-3xl font-black drop-shadow-md relative z-10 ${
                  isFire ? 'text-orange-50' : 'text-cyan-50'
                }`}>{stat.value}</dd>
              </div>
            )})}
          </motion.div>
        </div>
      </header>

      {/* Cards Section */}
      <main className="pb-24 pt-8 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: t('home.cards.join_requirements.title'),
              description: t('home.cards.join_requirements.desc'),
              icon: Target,
              delay: 0.5,
              theme: "fire"
            },
            {
              title: t('home.cards.achievements.title'),
              description: t('home.cards.achievements.desc'),
              icon: Trophy,
              delay: 0.6,
              theme: "neutral"
            },
            {
              title: t('home.cards.creed.title'),
              description: t('home.cards.creed.desc'),
              icon: Shield,
              delay: 0.7,
              theme: "ice"
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              className={`bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden
              ${card.theme === 'fire' ? 'hover:shadow-orange-500/10' : card.theme === 'ice' ? 'hover:shadow-cyan-500/10' : 'hover:shadow-white/5'}`}
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br
                ${card.theme === 'fire' ? 'from-orange-500 to-transparent' : card.theme === 'ice' ? 'from-cyan-500 to-transparent' : 'from-white to-transparent'}
              `} />
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/10
                  ${card.theme === 'fire' ? 'text-orange-400 group-hover:bg-orange-500/20 group-hover:border-orange-500/30 group-hover:text-orange-300' : 
                    card.theme === 'ice' ? 'text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 group-hover:text-cyan-300' : 
                    'text-white group-hover:bg-white/20 group-hover:border-white/30 group-hover:text-white'}`}
                >
                  <card.icon className="w-7 h-7 drop-shadow-md" />
                </div>
                <h3 className="text-[clamp(1.1rem,5vw,1.5rem)] font-bold text-white drop-shadow-sm leading-tight">{card.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base relative z-10 group-hover:text-gray-300 transition-colors">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-black/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-16 text-center relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-cyan-600/10 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              {t('home.cta.title')}
            </h2>
            <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg md:text-2xl font-medium leading-relaxed drop-shadow-sm">
              {t('home.cta.desc')}
            </p>
            <div className="flex justify-center">
              <a 
                href="https://discord.com/users/Mosa8383" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(88,101,242,0.4)] group/discord"
                title="Discord"
              >
                <FaDiscord className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </BackgroundTheme>
  );
}
