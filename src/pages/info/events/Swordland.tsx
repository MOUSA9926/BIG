import { ArrowRight, ArrowLeft, Shield, Swords, Trophy, Users, Clock, Target, Flag, Zap, MapPin, AlertTriangle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundTheme } from "../../../components/BackgroundTheme";
import { Footer } from "../../../components/Footer";
import { useTranslation } from "react-i18next";

export default function Swordland() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const eventStages = [
    { title: t('sword_land.stages.voting'), icon: Clock, color: "text-blue-400" },
    { title: t('sword_land.stages.registration'), icon: Users, color: "text-purple-400" },
    { title: t('sword_land.stages.matchmaking'), icon: Target, color: "text-orange-400" },
    { title: t('sword_land.stages.battle'), icon: Swords, color: "text-red-400" }
  ];

  const battlePhases = [
    { 
      title: t('sword_land.battle_phases.phase_1.title'), 
      desc: t('sword_land.battle_phases.phase_1.desc'),
      icon: Zap,
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    { 
      title: t('sword_land.battle_phases.phase_2.title'), 
      desc: t('sword_land.battle_phases.phase_2.desc'),
      icon: Shield,
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    },
    { 
      title: t('sword_land.battle_phases.phase_3.title'), 
      desc: t('sword_land.battle_phases.phase_3.desc'),
      icon: Trophy,
      color: "bg-red-500/10 text-red-500 border-red-500/20"
    }
  ];

  const buildings = [
    { name: t('sword_land.buildings.stables'), image: "🐎" },
    { name: t('sword_land.buildings.bell_tower'), image: "🔔" },
    { name: t('sword_land.buildings.hall'), image: "⚔️" },
    { name: t('sword_land.buildings.shrine'), image: "👑", highlighted: true }
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

        <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center relative mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <Swords className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-white to-orange-500 whitespace-nowrap overflow-hidden text-ellipsis">
              {t('sword_land.title')}
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-medium">
              {t('sword_land.desc')}
            </p>
          </div>

          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 hover:border-red-500/30 transition-all group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Info className="text-red-400" /> {t('sword_land.intro.title')}
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('sword_land.intro.desc')}
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3">
                {t('sword_land.conditions.list', { returnObjects: true }) instanceof Array && (t('sword_land.conditions.list', { returnObjects: true }) as string[]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 hover:border-orange-500/30 transition-all group">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Trophy className="text-orange-400" /> {t('sword_land.stages.title')}
              </h2>
              <div className="space-y-4">
                {eventStages.map((stage, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                    <div className={`p-2 rounded-lg bg-black/40 ${stage.color}`}>
                      <stage.icon size={24} />
                    </div>
                    <span className="text-white font-medium">{stage.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Goal & Scoring */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-xl border border-red-500/20 rounded-[3rem] p-8 sm:p-12 mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] -z-10" />
            <div className="relative z-10 text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{t('sword_land.goal.title')}</h2>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto">{t('sword_land.goal.desc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-black/30 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                <Flag className="text-red-400 mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">{t('sword_land.scoring.holding')}</h3>
                <p className="text-sm text-gray-500">{t('sword_land.scoring.staying')}</p>
              </div>
              <div className="p-6 bg-black/30 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                <Swords className="text-orange-400 mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">{t('sword_land.scoring.kills')}</h3>
                <p className="text-sm text-gray-500">{t('sword_land.scoring.destroying')}</p>
              </div>
            </div>
          </div>

          {/* Battle Phases */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white mb-2">{t('sword_land.battle_phases.title')}</h2>
              <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {battlePhases.map((phase, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-[2.5rem] border ${phase.color} flex flex-col items-center text-center backdrop-blur-sm group hover:-translate-y-2 transition-all`}
                >
                  <div className="p-4 rounded-2xl bg-black/40 mb-6 group-hover:scale-110 transition-transform">
                    <phase.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed font-medium">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buildings Section */}
          <div className="mb-20">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MapPin className="text-cyan-400" /> {t('sword_land.buildings.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {buildings.map((b, i) => (
                  <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${b.highlighted ? 'bg-red-500/20 border-red-500/40' : 'bg-white/5 border-white/10'}`}>
                    <span className="text-3xl">{b.image}</span>
                    <span className={`font-bold ${b.highlighted ? 'text-white' : 'text-gray-300'}`}>{b.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Settings & Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="text-yellow-400" /> {t('sword_land.tips.title')}
              </h3>
              <div className="space-y-4 flex-1">
                {t('sword_land.tips.list', { returnObjects: true }) instanceof Array && (t('sword_land.tips.list', { returnObjects: true }) as string[]).map((tip, i) => (
                  <div key={i} className="flex gap-3 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                    <span className="font-medium">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="text-blue-400" /> {t('sword_land.tips.notes')}
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                   <p className="text-gray-300 text-sm">{isRtl ? "عندك Teleport مجاني كل فترة" : "Free Teleport available periodically"}</p>
                </div>
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl">
                   <p className="text-gray-300 text-sm">{isRtl ? "تقدر تطلع من الحدث وترجع بعد 12 دقيقة (يتم علاج الجنود)" : "You can exit the event and return after 12 minutes (heals troops)"}</p>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
                   <p className="text-gray-300 text-sm">{isRtl ? "استخدم سرعة المسير 25% داخل الحدث" : "Use 25% march speed buff inside the event"}</p>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                   <p className="text-gray-300 text-sm">{isRtl ? "راقب الخريطة دائماً" : "Always watch the map"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistakes & Rewards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-[2.5rem] border border-yellow-500/20">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <Trophy className="text-yellow-400" /> {t('sword_land.rewards.title')}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> 
                  {t('sword_land.rewards.points')}
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> 
                  {t('sword_land.rewards.loss')}
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> 
                  {t('sword_land.rewards.mvp')}
                </li>
              </ul>
            </div>

            <div className="p-8 bg-red-500/10 rounded-[2.5rem] border border-red-500/20">
              <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="text-red-500" /> {t('bear_trap.mistakes.title')}
              </h3>
              <div className="space-y-3">
                {t('sword_land.mistakes.list', { returnObjects: true }) instanceof Array && (t('sword_land.mistakes.list', { returnObjects: true }) as string[]).map((mistake, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-400">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                     <span>{mistake}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BackgroundTheme>
  );
}
