import { useState } from "react";
import { ArrowRight, ArrowLeft, Crosshair, Zap, ShieldAlert, Users, Target, Shield, Swords, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundTheme } from "../../../components/BackgroundTheme";
import { Footer } from "../../../components/Footer";
import { useTranslation } from "react-i18next";

export default function BearTrap() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [formationType, setFormationType] = useState<'captain' | 'join'>('captain');
  
  const strategyTips = [
    {
      title: t('bear_trap.tips.rally.title'),
      description: t('bear_trap.tips.rally.desc'),
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: t('bear_trap.tips.damage.title'),
      description: t('bear_trap.tips.damage.desc'),
      icon: Zap,
      color: "text-orange-400",
      note: t('bear_trap.tips.damage.note')
    },
    {
      title: t('bear_trap.tips.formation.title'),
      description: t('bear_trap.tips.formation.desc'),
      icon: Crosshair,
      color: "text-red-400"
    },
    {
      title: t('bear_trap.tips.timing.title'),
      description: t('bear_trap.tips.timing.desc'),
      icon: Target,
      color: "text-cyan-400"
    }
  ];

  const commonMistakes = [
    { error: isRtl ? "إطلاق حشد مع أبطال ضعفاء وسعة قليلة وتجاهل حشود قادة التحالف القوية." : "Launching a rally with weak heroes and low capacity, ignoring the strong alliance leader rallies.", fix: isRtl ? "دائماً انضم للحشود الأكبر سعة." : "Always join the largest capacity rallies." },
    { error: isRtl ? "الاعتماد على الاختيار التلقائي للأبطال أثناء إطلاق الحشد أو الانضمام." : "Relying on auto-selection for heroes when launching or joining a rally.", fix: isRtl ? "اختر أبطال الفتك يدوياً." : "Manually select lethality heroes." },
    { error: isRtl ? "تجاهل تفعيل تعزيزات الهجوم (Attack Buffs) الخاصة بالتحالف أو الفردية." : "Ignoring alliance or individual attack buffs.", fix: isRtl ? "فعل التعزيزات قبل البدء بـ 5 دقائق." : "Activate buffs 5 minutes before the start." },
    { error: isRtl ? "فتح جميع القادة للحشود في نفس الوقت بالضبط." : "All leaders opening rallies at the exact same time.", fix: isRtl ? "نسقوا الأوقات لإتاحة الفرصة لقادة الحشود بالانضمام لبعضهم البعض." : "Coordinate times to allow rally leaders to join each other." },
    { error: isRtl ? "إرسال أبطال غير مخصصين للفتك أو الهجوم (أبطال جمع موارد)." : "Sending non-combat or gathering heroes.", fix: isRtl ? "التزم بقائمة أبطال (انضمام) المذكورة في الدليل." : "Stick to the (Join) heroes list mentioned in the guide." },
    { error: isRtl ? "إرسال جنود من مستويات منخفضة (Tiers) لملء الحشد." : "Sending low-tier soldiers to fill the rally.", fix: isRtl ? "أرسل دائماً أعلى مستوى متاح لديك من الرماة والفرسان." : "Always send your highest available tier of marksmen and lancers." }
  ];

  const captainHeroes = [
    { name: isRtl ? "اماديوس" : "Amadeus", role: "", lethality: `${t('bear_trap.heroes.generation')} 1`, image: null },
    { name: isRtl ? "هيلجا" : "Helga", role: "", lethality: `${t('bear_trap.heroes.generation')} 1`, image: null },
    { name: isRtl ? "جبل" : "Jabel", role: "", lethality: `${t('bear_trap.heroes.generation')} 1`, image: null },
    { name: isRtl ? "شاول" : "Saul", role: "", lethality: `${t('bear_trap.heroes.generation')} 1`, image: null },
    { name: isRtl ? "زوي" : "Zoe", role: "", lethality: `${t('bear_trap.heroes.generation')} 2`, image: null },
    { name: isRtl ? "مارلين" : "Marlin", role: "", lethality: `${t('bear_trap.heroes.generation')} 2`, image: null }
  ];

  const joinHeroes = [
    { name: isRtl ? "تشينكو" : "Chenko", role: isRtl ? "معزز هجوم أساسي" : "Main Attack Booster", lethality: `${t('bear_trap.heroes.lethality')} 25%`, image: null },
    { name: isRtl ? "اماديوس" : "Amadeus", role: isRtl ? "قائد تكتيكي" : "Tactical Commander", lethality: `${t('bear_trap.heroes.lethality')} 25%`, image: null },
    { name: isRtl ? "اماني" : "Amane", role: isRtl ? "دعم وحماية" : "Support & Protection", lethality: `${t('bear_trap.heroes.lethality')} 25%`, image: null },
    { name: isRtl ? "يونوو" : "Yeonwoo", role: isRtl ? "ضرر متفجر" : "Explosive Damage", lethality: `${t('bear_trap.heroes.lethality')} 25%`, image: null }
  ];

  const isCaptain = formationType === 'captain';
  const lancers = isCaptain ? 30 : 10;
  const marksmen = isCaptain ? 60 : 80;

  return (
    <BackgroundTheme>
      <div className="min-h-screen text-white font-sans selection:bg-orange-500/30 overflow-x-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              {isRtl ? <ArrowRight className="group-hover:translate-x-1 transition-transform" /> : <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />}
              <span className="text-sm font-medium uppercase tracking-widest">{t('common.back_to_dashboard')}</span>
            </Link>
          </div>
        </nav>

        <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Header content */}
          <div className="text-center relative mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <ShieldAlert className="w-10 h-10 text-orange-400" />
            </div>
            <h1 className="text-[clamp(2rem,8vw,4rem)] font-black text-white drop-shadow-lg mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-red-500 leading-tight px-4">
              {t('bear_trap.title')}
            </h1>
            <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {t('bear_trap.desc')}
            </p>
          </div>

          {/* Strategy Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {strategyTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${tip.color} group-hover:scale-110 transition-transform duration-300`}>
                    <tip.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-orange-300 transition-colors">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {tip.description}
                </p>
                {tip.note && (
                  <div className="mt-4 inline-block bg-white/5 border border-white/10 text-orange-400/90 text-xs sm:text-sm px-3 py-1.5 rounded-lg font-medium">
                    {tip.note}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Captain Heroes Section */}
          <div className="relative mb-20">
            <div className="text-center mb-10">
              <h2 className="text-[clamp(1.25rem,6vw,1.875rem)] font-black text-white drop-shadow-md mb-2 px-4 leading-tight">
                {t('bear_trap.heroes.title')} <span className="text-cyan-400 text-xl sm:text-2xl">({t('bear_trap.heroes.captain')})</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto rounded-full opacity-50"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
              {captainHeroes.map((hero, idx) => (
                <div 
                  key={idx} 
                  className="bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 rounded-[2rem] p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.3)] group"
                >
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/5 border-2 border-white/10 border-dashed flex items-center justify-center mb-4 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300 overflow-hidden relative shadow-inner">
                    {hero.image ? (
                      <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                    )}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors drop-shadow-sm">{hero.name}</h3>
                  <div className="flex flex-col gap-2 w-full mt-auto">
                    {hero.role && <span className="text-[10px] sm:text-xs text-gray-300 font-medium px-2 py-1.5 bg-white/5 border border-white/10 rounded-lg group-hover:border-white/20 transition-colors w-full">{hero.role}</span>}
                    <span className="text-[10px] sm:text-xs text-cyan-400 font-bold px-2 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-lg w-full drop-shadow-sm group-hover:bg-cyan-500/20 transition-colors">{hero.lethality}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Heroes Section */}
          <div className="relative">
            <div className="text-center mb-10">
              <h2 className="text-[clamp(1.25rem,6vw,1.875rem)] font-black text-white drop-shadow-md mb-2 px-4 leading-tight">
                {t('bear_trap.heroes.title')} <span className="text-orange-400 text-xl sm:text-2xl">({t('bear_trap.heroes.join')})</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full opacity-50"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {joinHeroes.map((hero, idx) => (
                <div 
                  key={idx} 
                  className="bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md border border-white/10 hover:border-red-500/40 rounded-[2rem] p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(239,68,68,0.3)] group"
                >
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/5 border-2 border-white/10 border-dashed flex items-center justify-center mb-4 group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300 overflow-hidden relative shadow-inner">
                    {hero.image ? (
                      <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                    )}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors drop-shadow-sm">{hero.name}</h3>
                  <div className="flex flex-col gap-2 w-full mt-auto">
                    {hero.role && <span className="text-[10px] sm:text-xs text-gray-300 font-medium px-2 py-1.5 bg-white/5 border border-white/10 rounded-lg group-hover:border-white/20 transition-colors w-full">{hero.role}</span>}
                    <span className="text-[10px] sm:text-xs text-red-400 font-bold px-2 py-1.5 bg-red-500/10 border border-red-500/20 rounded-lg w-full drop-shadow-sm group-hover:bg-red-500/20 transition-colors">{hero.lethality}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formation Section */}
          <div className="mt-20 relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-md mb-2">{t('bear_trap.formation.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto rounded-full opacity-50 mb-6"></div>
              
              <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1 relative z-10 mx-auto">
                <button
                  onClick={() => setFormationType('captain')}
                  className={`relative px-6 py-2 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                    formationType === 'captain' ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {formationType === 'captain' && (
                    <div className="absolute inset-0 bg-cyan-500/80 rounded-full -z-10" />
                  )}
                  {t('bear_trap.heroes.captain')}
                </button>
                <button
                  onClick={() => setFormationType('join')}
                  className={`relative px-6 py-2 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                    formationType === 'join' ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {formationType === 'join' && (
                    <div className="absolute inset-0 bg-orange-500/80 rounded-full -z-10" />
                  )}
                  {t('bear_trap.heroes.join')}
                </button>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 sm:p-10 max-w-4xl mx-auto hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 group">
              <div className="flex flex-col gap-8">
                {/* Bars/Ratios */}
                <div className="flex w-full h-10 sm:h-16 rounded-full shadow-inner border border-white/10 mt-8 mb-4">
                  <div className="bg-orange-500 w-[10%] rounded-s-full flex items-center justify-center text-[10px] sm:text-base font-bold text-white relative group/bar hover:opacity-90 transition-opacity">
                    <div className="absolute -top-11 sm:-top-12 left-1/2 -translate-x-1/2 bg-black/90 border border-white/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-white text-[9px] sm:text-xs font-bold whitespace-nowrap shadow-xl z-10 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-white/30 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[3px] after:border-transparent after:border-t-black/90 after:-mt-[1px]">
                      {t('bear_trap.formation.infantry')}
                    </div>
                    10%
                  </div>
                  <div 
                    className={`bg-cyan-500 flex items-center justify-center text-[10px] sm:text-base font-bold text-white relative group/bar hover:opacity-90 transition-all duration-500 ease-in-out`}
                    style={{ width: `${lancers}%` }}
                  >
                    <div className="absolute -top-11 sm:-top-12 left-1/2 -translate-x-1/2 bg-black/90 border border-white/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-white text-[9px] sm:text-xs font-bold whitespace-nowrap shadow-xl z-10 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-white/30 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[3px] after:border-transparent after:border-t-black/90 after:-mt-[1px]">
                      {t('bear_trap.formation.lancers')}
                    </div>
                    {lancers}%
                  </div>
                  <div 
                    className={`bg-red-500 rounded-e-full flex items-center justify-center text-[10px] sm:text-base font-black text-white relative group/bar hover:opacity-90 transition-all duration-500 ease-in-out tracking-wider`}
                    style={{ width: `${marksmen}%` }}
                  >
                    <div className="absolute -top-11 sm:-top-12 left-1/2 -translate-x-1/2 bg-black/90 border border-white/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-white text-[9px] sm:text-xs font-bold whitespace-nowrap shadow-xl z-10 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-white/30 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[3px] after:border-transparent after:border-t-black/90 after:-mt-[1px]">
                      {t('bear_trap.formation.marksmen')}
                    </div>
                    {marksmen}%
                  </div>
                </div>
                
                {/* Legend */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-2">
                  <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="p-3 bg-orange-500/20 rounded-2xl">
                      <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                    </div>
                    <div className="text-center">
                      <span className="block font-bold text-white text-lg sm:text-xl mb-1">{t('bear_trap.formation.infantry')} (10%)</span>
                      <span className="text-sm text-gray-400 font-medium">{t('bear_trap.formation.protection')}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="p-3 bg-cyan-500/20 rounded-2xl">
                      <Swords className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                    </div>
                    <div className="text-center">
                      <span className="block font-bold text-white text-lg sm:text-xl mb-1 flex items-center gap-2 justify-center">{t('bear_trap.formation.lancers')} ({lancers}%)</span>
                      <span className="text-sm text-gray-400 font-medium">{t('bear_trap.formation.offense_support')}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="p-3 bg-red-500/20 rounded-2xl">
                      <Crosshair className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
                    </div>
                    <div className="text-center">
                      <span className="block font-bold text-white text-lg sm:text-xl mb-1 flex items-center gap-2 justify-center">{t('bear_trap.formation.marksmen')} ({marksmen}%)</span>
                      <span className="text-sm text-gray-400 font-medium">{t('bear_trap.formation.dps_source')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Mistakes Section */}
          <div className="mt-20 relative px-2">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-md mb-2">{t('bear_trap.mistakes.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full opacity-50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonMistakes.map((item, idx) => (
                <div 
                  key={idx}
                  className="group p-5 sm:p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/5 hover:border-red-500/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="min-w-[12px] h-3 bg-red-500 rounded-full mt-2 ring-4 ring-red-500/10"></div>
                    <div>
                      <h4 className="text-gray-200 font-bold mb-2 group-hover:text-red-300 transition-colors">{item.error}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                         <span className="text-green-500 font-bold">{t('bear_trap.mistakes.solution')}</span>
                         {item.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Guide Section */}
          <div className="mt-20 relative pb-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-md mb-2">{t('bear_trap.video.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full opacity-50"></div>
            </div>

            <div className="max-w-4xl mx-auto aspect-video bg-black/60 backdrop-blur-md border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center group overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500/20 group-hover:border-red-500/40 transition-all duration-500 shadow-inner">
                <Play className="w-10 h-10 text-gray-400 group-hover:text-red-400 fill-current" />
              </div>
              <p className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300">{t('bear_trap.video.coming_soon')}</p>
              <p className="text-sm text-gray-500 mt-2">{t('bear_trap.video.stay_tuned')}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BackgroundTheme>
  );
}
