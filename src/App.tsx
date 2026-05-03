/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, Swords, Trophy, Users, Zap, Target } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans selection:bg-red-600 selection:text-white">
      {/* Main Hero Section / Header (بدون شريط علوي) */}
      <header className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-gray-950 to-gray-950"></div>
           <div className="absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 blur-[120px] opacity-20 bg-red-600 w-[600px] h-[300px] rounded-[100%]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-950/50 border border-red-500/30 mb-8 shadow-[0_0_40px_rgba(220,38,38,0.2)] relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
              <Shield className="w-12 h-12 text-red-500 relative z-10" />
            </div>
            
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="relative inline-flex items-baseline">
                <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-l from-red-700 via-red-500 to-red-400 tracking-wider drop-shadow-sm">
                  BiGDARK
                </h1>
                <span className="absolute -bottom-4 -right-6 sm:-bottom-6 sm:-right-10 md:-bottom-8 md:-right-14 text-3xl sm:text-5xl md:text-6xl font-black text-red-500 italic rotate-[20deg] drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                  777
                </span>
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-400 uppercase tracking-[0.5em] sm:tracking-[0.8em] md:tracking-[1em] mt-5 sm:mt-8 opacity-90 pl-3 sm:pl-5 md:pl-8">
                ALLIANCE
              </div>
            </div>
            
            <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold">
              موطن الأساطير والملوك في عالم <span className="text-red-400">King Shot</span>
            </p>
            
            <p className="mt-6 text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              نحن لا نلعب لكي نشارك، بل لنحكم السيطرة. الانضباط، التعاون، والقوة المطلقة هي مبادئنا. 
              انضم إلى صفوفنا وكن جزءاً من التاريخ الأسود المنتصر.
            </p>
          </motion.div>

          {/* Alliance Stats in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto"
          >
            {[
              { label: "القوة الإجمالية", value: "+150M", icon: Zap },
              { label: "الأعضاء", value: "48/50", icon: Users },
              { label: "المركز العام", value: "الأول 🏆", icon: Trophy },
              { label: "الحروب الفائزة", value: "1,240", icon: Swords },
            ].map((stat, idx) => (
              <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <stat.icon className="w-7 h-7 text-red-500 mb-3 mx-auto" />
                <dt className="text-sm font-medium text-gray-400">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-bold text-white drop-shadow-md">{stat.value}</dd>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Cards Section */}
      <main className="pb-24 pt-8 relative z-10 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "شروط الانضمام",
              description: "نبحث عن النخبة فقط. يتطلب الانضمام تفاعلاً يومياً مستمراً، وقوة قاعدية معينة، والالتزام الصارم بأوامر القيادة أثناء حروب التحالفات والمنافسات.",
              icon: Target,
              delay: 0.5
            },
            {
              title: "سجل الإنجازات",
              description: "السادة المطلقون للعاصمة لمواسم متتالية. لم نهزم في أي حرب تحالفات رئيسية منذ التأسيس بفضل التنسيق الاستراتيجي والتضحية المشتركة.",
              icon: Trophy,
              delay: 0.6
            },
            {
              title: "عقيدة التحالف",
              description: "تأسس BiGDARK ليكون القوة الضاربة والدرع الحصين في السيرفر. مجتمعنا مبني على الاحترام المتبادل وتقديم كل الدعم لأفراد العائلة.",
              icon: Shield,
              delay: 0.7
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              className="bg-gray-900 border border-gray-800 hover:border-red-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(220,38,38,0.12)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full -z-0"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-gray-800 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 relative z-10 shadow-lg">
                <card.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-red-900/60 to-gray-900 border border-red-500/40 rounded-3xl p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(220,38,38,0.1)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 drop-shadow-md">
              مستعد لتكون جزءاً من هذا الظلام؟
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              باب التجنيد مفتوح حالياً للمحاربين أصحاب الطموح والهمم العالية. تواصل مع قادة و مسؤولين التحالف BiGDARK داخل اللعبة لتقديم طلبك.
            </p>
            <button className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transform hover:-translate-y-1">
              طلب الانضمام الآن
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
