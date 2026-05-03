import { ArrowRight, ArrowLeft, Shield, Swords, Trophy, Users, Clock, Target, Flag, Zap, MapPin, AlertTriangle, Info, Pickaxe, TrendingUp, Gem, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundTheme } from "../../../components/BackgroundTheme";
import { Footer } from "../../../components/Footer";
import { useTranslation } from "react-i18next";

export default function EternityReach() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const skillTree = [
    { id: 1, name: t('eternity_reach.skills.skill_1'), side: 'right', level: 1 },
    { id: 2, name: t('eternity_reach.skills.skill_2'), side: 'right', level: 2 },
    { id: 3, name: t('eternity_reach.skills.skill_3'), side: 'left', level: 3, highlighted: true },
    { id: 4, name: t('eternity_reach.skills.skill_4'), side: 'left', level: 4 },
    { id: 5, name: t('eternity_reach.skills.skill_5'), side: 'right', level: 5 },
  ];

  return (
    <BackgroundTheme>
      <div className="min-h-screen text-white font-sans selection:bg-red-500/30 overflow-x-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
        
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

        <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center relative mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
              <Trophy className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-white to-blue-500 leading-tight">
              {t('eternity_reach.title')}
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-medium">
              {t('eternity_reach.desc')}
            </p>
          </div>

          {/* Intro & Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Info className="text-cyan-400" /> {t('eternity_reach.intro.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                {t('eternity_reach.intro.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t('eternity_reach.system.list', { returnObjects: true }) instanceof Array && (t('eternity_reach.system.list', { returnObjects: true }) as string[]).map((rule, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span className="text-sm text-gray-300">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/20 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center">
              <Clock className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">{isRtl ? "مدة الجولة" : "Round Duration"}</h3>
              <p className="text-4xl font-black text-cyan-400 mb-4 tracking-tighter">30 MIN</p>
              <p className="text-sm text-gray-400">{isRtl ? "كل أسبوعين - 100 لاعب في الساحة" : "Every 2 weeks - 100 players in arena"}</p>
            </div>
          </div>

          {/* Scoring System */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{t('eternity_reach.points.title')}</h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-black/30 rounded-3xl border border-white/10 text-center group hover:bg-cyan-500/10 transition-all">
                <Swords className="text-red-400 mb-4 mx-auto" size={32} />
                <h3 className="text-white font-bold mb-2">{isRtl ? "حراس Cesare" : "Cesare Guards"}</h3>
                <p className="text-xs text-gray-500">{t('eternity_reach.points.guards')}</p>
              </div>
              <div className="p-6 bg-black/30 rounded-3xl border border-white/10 text-center group hover:bg-cyan-500/10 transition-all">
                <Pickaxe className="text-yellow-400 mb-4 mx-auto" size={32} />
                <h3 className="text-white font-bold mb-2">{isRtl ? "المناجم" : "Mines"}</h3>
                <p className="text-xs text-gray-500">{t('eternity_reach.points.mines')}</p>
              </div>
              <div className="p-6 bg-cyan-500/10 rounded-3xl border border-cyan-500/20 text-center group hover:scale-105 transition-all">
                <Sparkles className="text-cyan-400 mb-4 mx-auto" size={32} />
                <h3 className="text-white font-bold mb-2">{isRtl ? "المناجم المتفجرة" : "Fractured Veins"}</h3>
                <p className="text-xs text-gray-400">{t('eternity_reach.points.fractured')}</p>
              </div>
              <div className="p-6 bg-black/30 rounded-3xl border border-white/10 text-center group hover:bg-cyan-500/10 transition-all">
                <Target className="text-blue-400 mb-4 mx-auto" size={32} />
                <h3 className="text-white font-bold mb-2">{isRtl ? "مركز الأبدية" : "Eternity Center"}</h3>
                <p className="text-xs text-gray-500">{t('eternity_reach.points.center')}</p>
              </div>
            </div>
          </div>

          {/* Skill Tree Visual Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                 <TrendingUp className="text-green-400" /> {t('eternity_reach.skills.title')}
              </h2>
              <p className="text-gray-400 font-medium">{t('eternity_reach.skills.path')}</p>
            </div>

            <div className="max-w-xl mx-auto relative flex flex-col items-center gap-12 pb-10" dir="ltr">
              {/* Connection Line */}
              <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent left-1/2 -translate-x-1/2" />
              
              {skillTree.map((skill) => (
                <div
                  key={skill.id}
                  className={`flex items-center w-full ${skill.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 flex ${skill.side === 'left' ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                    <div className={`relative p-4 rounded-2xl border transition-all duration-500 group ${skill.highlighted ? 'bg-yellow-500/20 border-yellow-500/40' : 'bg-white/5 border-white/10'}`} dir={isRtl ? 'rtl' : 'ltr'}>
                      {skill.highlighted && (
                         <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full">
                           {isRtl ? "الأهم" : "IMPORTANT"}
                         </div>
                      )}
                      <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                    </div>
                  </div>
                  
                  {/* Node */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center z-10 transition-all duration-500 ${skill.highlighted ? 'bg-yellow-400 text-black scale-125' : 'bg-cyan-500 text-white'}`}>
                    <span className="text-xs font-black">{skill.level}</span>
                  </div>
                  
                  <div className="w-1/2" />
                </div>
              ))}
              
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl mt-4 max-w-sm text-center">
                <p className="text-xs text-yellow-500 font-bold leading-relaxed text-center">
                  <AlertTriangle className="inline-block mr-2 mb-1" size={14} />
                  {isRtl ? "الوصول إلى المهارة 3 بسرعة هو مفتاح الفوز في هذا الحدث" : "Reaching Skill 3 quickly is the absolute key to victory."}
                </p>
              </div>
            </div>
          </div>

          {/* Gameplay Stages */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{t('eternity_reach.stages.title')}</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-black/40 border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                  <span className="text-2xl font-black">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('eternity_reach.stages.stage_1.title')}</h3>
                  <p className="text-gray-400">{t('eternity_reach.stages.stage_1.desc')}</p>
                </div>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0">
                  <span className="text-2xl font-black">02</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{t('eternity_reach.stages.stage_2.title')}</h3>
                    <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold rounded uppercase">Recommended</span>
                  </div>
                  <p className="text-gray-400 mb-4">{t('eternity_reach.stages.stage_2.desc')}</p>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                    <Clock className="text-yellow-400" size={20} />
                    <p className="text-sm font-mono text-gray-300">
                      {isRtl ? "أرسل -> انتظر 60 ثانية -> اسحب -> أعد الإرسال" : "Send -> Wait 60s -> Withdraw -> Re-send"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                  <span className="text-2xl font-black">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('eternity_reach.stages.stage_3.title')}</h3>
                  <p className="text-gray-400">{t('eternity_reach.stages.stage_3.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategies & Mistakes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="text-yellow-400" /> {t('eternity_reach.strategies.title')}
              </h3>
              <div className="space-y-4 flex-1">
                {t('eternity_reach.strategies.list', { returnObjects: true }) instanceof Array && (t('eternity_reach.strategies.list', { returnObjects: true }) as string[]).map((tip, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="text-cyan-500 font-black italic group-hover:scale-125 transition-transform">0{i+1}</div>
                    <p className="text-gray-300">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="text-red-400" /> {t('eternity_reach.mistakes.title')}
              </h2>
              <div className="space-y-4">
                {t('eternity_reach.mistakes.list', { returnObjects: true }) instanceof Array && (t('eternity_reach.mistakes.list', { returnObjects: true }) as string[]).map((mistake, i) => (
                  <div key={i} className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl flex items-center gap-4">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                     <p className="text-gray-400 text-sm">{mistake}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rewards */}
          <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-cyan-500/20 rounded-[2.5rem] p-10 text-center">
            <Gem className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-8">{t('eternity_reach.rewards.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <h4 className="text-white font-bold mb-4">{isRtl ? "جوائز الترتيب العالي" : "High Rank Rewards"}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t('eternity_reach.rewards.rank')}</p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <h4 className="text-white font-bold mb-4">{isRtl ? "جوائز المشاركة" : "Participation Rewards"}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t('eternity_reach.rewards.participation')}</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </BackgroundTheme>
  );
}
