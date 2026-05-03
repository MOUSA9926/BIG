import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      "common": {
        "back_to_home": "العودة للرئيسية",
        "back_to_dashboard": "العودة للوحة القيادة",
        "new": "جديد",
        "login": "الدخول",
        "password_note": "* يتطلب الدخول كلمة مرور من القادة",
        "password_placeholder": "كلمة السر",
        "click_to_login": "انقر للدخول",
        "footer": {
          "rights": "جميع الحقوق محفوظة لتحالف",
          "server": "السيرفر",
          "designed_by": "تم تصميم الموقع بواسطة"
        }
      },
      "home": {
        "alliance": "ALLIANCE",
        "intro": "نحن لا نلعب لكي نشارك، بل لنحكم السيطرة. الانضباط، التعاون، والقوة المطلقة هي مبادئنا. انضم إلى صفوفنا وكن جزءاً من التاريخ المنتصر.",
        "stats": {
          "total_power": "القوة الإجمالية",
          "wars_won": "الحروب الفائزة",
          "rank": "المركز العام",
          "members": "الأعضاء"
        },
        "cards": {
          "join_requirements": {
            "title": "شروط الانضمام",
            "desc": "نبحث عن النخبة فقط. يتطلب الانضمام تفاعلاً يومياً مستمراً، وقوة قاعدية معينة، والالتزام الصارم بأوامر القيادة أثناء حروب التحالفات والمنافسات."
          },
          "achievements": {
            "title": "سجل الإنجازات القادم",
            "desc": "نحن في مرحلة الاستعداد القصوى. هذا القسم مخصص لتوثيق الانتصارات القادمة في حروب العواصم وسيرفر ضد سيرفر. لم نخض حرباً رسمية بعد، لكن التاريخ سيُكتب هنا."
          },
          "creed": {
            "title": "عقيدة التحالف",
            "desc": "تأسس BiGDARK ليكون القوة الضاربة والدرع الحصين في السيرفر. مجتمعنا مبني على الاحترام المتبادل وتقديم كل الدعم لأفراد العائلة."
          }
        },
        "cta": {
          "title": "مستعد لتكون جزءاً من العاصفة واللهيب؟",
          "desc": "باب التجنيد مفتوح حالياً للمحاربين أصحاب الطموح والهمم العالية. تواصل مع قادة ومسؤولي تحالف BiGDARK داخل اللعبة لتقديم طلبك.",
          "button": "طلب الانضمام الآن"
        }
      },
      "dashboard": {
        "title": "بوابة التحالف",
        "desc": "مساحة مخصصة للاستراتيجيات، الفعاليات المجدولة، وبطاقات الأبطال.",
        "categories": {
          "events": "الفعاليات",
          "plans": "الخطط",
          "info": "معلومات",
          "heroes": "الابطال"
        },
        "event_names": {
          "bear_trap": "فخ الدب",
          "sword_land": "ارض السيوف",
          "eternal_arrival": "وصول الابدية",
          "alliance_championship": "بطولة التحالف",
          "hall_of_rulers": "قاعة الحكام"
        }
      },
      "bear_trap": {
        "title": "دليل فخ الدب",
        "desc": "الاستراتيجية المتقدمة لتعظيم الضرر والهيمنة على تصنيفات فعالية فخ الدب. اتبع هذه التعليمات لضمان تحقيق أعلى النقاط الممكنة لتحالفك.",
        "tips": {
          "rally": {
            "title": "التنسيق السريع للحشود",
            "desc": "في فعالية فخ الدب، الوقت والتنسيق هما السلاح الأقوى. تأكد من الانضمام للحشود التي يطلقها أقوى لاعبي التحالف (قادة الحشود) بأقصى سعة ممكنة وفي أسرع وقت."
          },
          "damage": {
            "title": "تعظيم ناتج الضرر",
            "desc": "لتحقيق أقصى ضرر، استخدم أبطالاً يمتلكون مهارات تعزز من هجوم القوات، وخصوصاً مهارات الحملة (Expedition Skills) التي تدعم كامل الحشد وليس فقط تشكيلتك.",
            "note": "لقادة الحشد"
          },
          "formation": {
            "title": "تشكيلة القوات المثالية",
            "desc": "قم بتجهيز تشكيلتك يدوياً قبل بدء الفعالية لضمان الدخول السريع. ركز على الرماة والفرسان لزيادة الضرر (DPS)، مع وجود نسبة بسيطة من المشاة للحماية."
          },
          "timing": {
            "title": "التوقيت وتتابع الهجمات",
            "desc": "قبل نهاية الفعالية بـ 7 دقائق، يجب على جميع المشاركين إطلاق حشد لضمان استغلال الوقت المتبقي كون الحيتان قد ينتهي حشدهم مبكراً"
          }
        },
        "heroes": {
          "title": "أبطال فخ الدب",
          "captain": "قائد",
          "join": "انضمام",
          "lethality": "فتك",
          "generation": "جيل"
        },
        "formation": {
          "title": "التشكيل المناسب",
          "infantry": "مشاة",
          "lancers": "فرسان",
          "marksmen": "رماة",
          "protection": "حماية أساسية",
          "offense_support": "دعم هجومي",
          "dps_source": "مصدر الضرر الأكبر"
        },
        "mistakes": {
          "title": "أخطاء تجنبها",
          "solution": "الحل:"
        },
        "video": {
          "title": "دليل فيديو",
          "coming_soon": "سيتم إضافة الفيديو قريباً",
          "stay_tuned": "ترقبوا شرحاً تفصيلياً مرئياً لخطوات الفعالية"
        }
      },
      "sword_land": {
        "title": "دليل أرض السيوف",
        "desc": "السيطرة = الفوز | التنظيم = القوة | الفريق = كل شيء",
        "intro": {
          "title": "تعريف الحدث",
          "desc": "حدث PvP تحالف ضد تحالف يستمر ساعة واحدة فقط، يحدث كل أسبوعين (عادة يوم الأحد). الجنود لا يموتون، فقط يصابون ويرجعون بعد الحدث."
        },
        "conditions": {
          "title": "شروط المشاركة",
          "list": [
            "فقط أفضل 20 تحالف بالقوة يدخلون الحدث",
            "كل تحالف يسجل 2 Legions (كل فيلق 30 أساسي + 10 احتياط)",
            "يجب التواجد في التحالف قبل فترة التسجيل"
          ]
        },
        "stages": {
          "title": "مراحل الحدث",
          "voting": "التصويت: تحديد الوقت المناسب",
          "registration": "التسجيل: القادة يقسمون اللاعبين",
          "matchmaking": "المطابقة: اختيار خصم بنفس القوة",
          "battle": "القتال: المعركة الفعلية (60 دقيقة)"
        },
        "goal": {
          "title": "هدف الحدث",
          "desc": "جمع نقاط أكثر من الخصم عبر احتلال المباني، قتل القوات، والسيطرة على الخريطة. تذكر: السيطرة أهم من القتل!"
        },
        "scoring": {
          "title": "نظام النقاط",
          "holding": "احتلال مبنى = نقاط عالية للتحالف",
          "staying": "البقاء بالداخل = نقاط مستمرة (الأهم)",
          "kills": "قتل جنود = نقاط شخصية عالية",
          "destroying": "تدمير مباني = نقاط متوسطة"
        },
        "battle_phases": {
          "title": "مراحل القتال",
          "phase_1": {
            "title": "البداية (0-5 دقايق)",
            "desc": "احتلال أسرع عدد من المباني؛ السريعون للقريبة والأقوياء للمراكز."
          },
          "phase_2": {
            "title": "التثبيت (5-15 دقيقة)",
            "desc": "ثبت المباني بالمشاة وابدأ هجمات جماعية (Rally) على نقاط الضعف."
          },
          "phase_3": {
            "title": "المنتصف (15-40 دقيقة)",
            "desc": "المعارك الكبرى وظهور الضريح (Shrine). تبديل ذكي بين الهجوم والدفاع."
          }
        },
        "buildings": {
          "title": "المباني الرئيسية",
          "stables": "الاسطبلات الملكية: تقليل وقت الانتقال",
          "bell_tower": "برج الجرس: تقليل وقت الاحتلال",
          "hall": "قاعة الإصلاح: بونص هجوم ودفاع",
          "shrine": "ضريح أرض السيوف: أعلى مصدر نقاط (دقيقة 15)"
        },
        "rewards": {
          "title": "المكافآت",
          "points": "اجمالي المكافأة عند تحقيق 180الف نقطة شخصية",
          "loss": "مكافآت مشاركة حتى عند الخسارة",
          "mvp": "جوائز إضافية لأعلى النقاط"
        },
        "mistakes": {
          "list": [
            "التركيز على القتل فقط وتجاهل المباني",
            "ترك المباني المحتلة بدون حماية كافية",
            "تكدس الفريق بالكامل في المنتصف بدون خطة"
          ]
        },
        "tips": {
          "title": "استراتيجيات الفوز",
          "notes": "نصائح مهمة",
          "list": [
            "السيطرة على المباني أهم من القتال",
            "لا تهاجم بدون هدف",
            "الهجمات الجماعية (Rally) أقوى من الفردية",
            "لا تخسر مبنى عندك حتى لو أخذت غيره",
            "ركز على Shrine بعد الدقيقة 15"
          ]
        }
      },
      "eternity_reach": {
        "title": "دليل وصول الأبدية",
        "desc": "الجمع الذكي = الفوز | القتال ليس الهدف | السرعة في المهارات",
        "intro": {
          "title": "تعريف الحدث",
          "desc": "حدث فردي تنافسي يحدث كل أسبوعين. مدة الجولة 30 دقيقة في ساحة مع 100 لاعب. الهدف: جمع أكبر كمية من خام النحاس."
        },
        "system": {
          "title": "نظام الحدث",
          "list": [
            "لا يوجد موت دائم للجنود ولا تحتاج علاج",
            "الأبطال يتوقفون مؤقتاً عند الهزيمة (Cooldown)",
            "القتال ليس الهدف الأساسي للحدث"
          ]
        },
        "points": {
          "title": "طرق جمع النقاط (النحاس)",
          "guards": "حراس Cesare: خبرة + نحاس بالبداية",
          "mines": "المناجم: نقاط ثابتة حسب المستوى",
          "fractured": "المناجم المتفجرة: أعلى مصدر نقاط (دورية)",
          "center": "مركز الأبدية: نقاط مستمرة (عالية الخطورة)"
        },
        "skills": {
          "title": "شجرة المهارات",
          "path": "المسار الأفضل: يمين ← يمين ← يسار ← يسار ← يمين",
          "skill_1": "زيادة النحاس من الحراس",
          "skill_2": "زيادة سرعة المسير",
          "skill_3": "5000 نحاس عند دخول منجم (كل 60 ثانية)",
          "skill_4": "زيادة سرعة جمع الموارد",
          "skill_5": "زيادة ضخمة لسرعة الجمع (مؤقتة)"
        },
        "stages": {
          "title": "مراحل اللعب",
          "stage_1": {
            "title": "المرحلة الأولى: البداية",
            "desc": "هاجم الحراس فقط لفتح المهارة 3 بسرعة. لا تجمع موارد الآن."
          },
          "stage_2": {
            "title": "المرحلة الثانية: المنتصف",
            "desc": "استخدم طريقة 'الدقيقة الواحدة': ادخل المنجم، انتظر 60 ثانية، اسحب وأعد الإرسال."
          },
          "stage_3": {
            "title": "المرحلة الثالثة: النهاية",
            "desc": "ركز على الجمع الكلي والمناجم المتفجرة. استخدم المهارة 5 وتوقف عن قتل الحراس."
          }
        },
        "strategies": {
          "title": "استراتيجيات الفوز",
          "list": [
            "لا تضيع وقتك في القتال مع اللاعبين",
            "ابحث عن منطقة هادئة بعيداً عن المنتصف",
            "حافظ على تشغيل جميع مسيراتك طوال الوقت",
            "استعمل Teleport للوصول للمناجم المتفجرة فوراً"
          ]
        },
        "mistakes": {
          "title": "أخطاء شائعة",
          "list": [
            "القتال مع اللاعبين وتضييع الوقت",
            "تجاهل المهارة 3 وعدم فتحها فوراً",
            "استخدام المهارة 5 بشكل عشوائي",
            "البقاء في منطقة مزدحمة",
            "ترك القوات بدون حركة"
          ]
        },
        "rewards": {
          "title": "المكافآت",
          "rank": "ترتيب عالي: مواد تطوير Governor Charm وموارد نادرة",
          "participation": "مشاركة: مكافآت جيدة لجميع المشاركين"
        }
      }
    }
  },
  en: {
    translation: {
      "common": {
        "back_to_home": "Back to Home",
        "back_to_dashboard": "Back to Dashboard",
        "new": "New",
        "login": "Login",
        "password_note": "* Requires a password from the leaders",
        "password_placeholder": "Password",
        "click_to_login": "Click to log in",
        "footer": {
          "rights": "All rights reserved to",
          "server": "Server",
          "designed_by": "Site designed by"
        }
      },
      "home": {
        "alliance": "ALLIANCE",
        "intro": "We don't play to participate, but to dominate. Discipline, cooperation, and absolute power are our principles. Join our ranks and be part of a victorious history.",
        "stats": {
          "total_power": "Total Power",
          "wars_won": "Wars Won",
          "rank": "Overall Rank",
          "members": "Members"
        },
        "cards": {
          "join_requirements": {
            "title": "Join Requirements",
            "desc": "We seek only the elite. Joining requires constant daily activity, a certain base power, and strict adherence to leadership orders during alliance wars and competitions."
          },
          "achievements": {
            "title": "Upcoming Achievements",
            "desc": "We are in the phase of peak readiness. This section is dedicated to documenting upcoming victories in capital wars and server vs server. We haven't fought an official war yet, but history will be written here."
          },
          "creed": {
            "title": "Alliance Creed",
            "desc": "BiGDARK was founded to be the striking force and the secure shield in the server. Our community is built on mutual respect and providing full support to family members."
          }
        },
        "cta": {
          "title": "Ready to be part of the storm and flame?",
          "desc": "Recruitment is currently open for ambitious and high-spirited warriors. Contact BiGDARK alliance leaders and officers in-game to submit your application.",
          "button": "Request to Join Now"
        }
      },
      "dashboard": {
        "title": "Alliance Portal",
        "desc": "A dedicated space for strategies, scheduled events, and hero cards.",
        "categories": {
          "events": "Events",
          "plans": "Plans",
          "info": "Information",
          "heroes": "Heroes"
        },
        "event_names": {
          "bear_trap": "Bear Trap",
          "sword_land": "Sword Land",
          "eternal_arrival": "Eternal Arrival",
          "alliance_championship": "Alliance Championship",
          "hall_of_rulers": "Hall of Rulers"
        }
      },
      "bear_trap": {
        "title": "Bear Trap Guide",
        "desc": "Advanced strategy to maximize damage and dominate the Bear Trap event rankings. Follow these instructions to ensure the highest possible points for your alliance.",
        "tips": {
          "rally": {
            "title": "Fast Rally Coordination",
            "desc": "In the Bear Trap event, time and coordination are the strongest weapons. Ensure you join rallies launched by the alliance's strongest players (rally leaders) at maximum capacity as quickly as possible."
          },
          "damage": {
            "title": "Maximize Damage Output",
            "desc": "To achieve maximum damage, use heroes with skills that boost troop attack, especially Expedition Skills that support the entire rally and not just your formation.",
            "note": "For Rally Leaders"
          },
          "formation": {
            "title": "Ideal Troop Formation",
            "desc": "Manually set your formation before the event starts to ensure quick entry. Focus on marksmen and lancers to increase damage (DPS), with a small percentage of infantry for protection."
          },
          "timing": {
            "title": "Timing and Attack Sequence",
            "desc": "7 minutes before the end of the event, all participants must launch a rally to ensure utilization of remaining time, as whales might finish their rally early."
          }
        },
        "heroes": {
          "title": "Bear Trap Heroes",
          "captain": "Captain",
          "join": "Join",
          "lethality": "Lethality",
          "generation": "Gen"
        },
        "formation": {
          "title": "Ideal Formation",
          "infantry": "Infantry",
          "lancers": "Lancers",
          "marksmen": "Marksmen",
          "protection": "Basic Protection",
          "offense_support": "Attack Support",
          "dps_source": "Major Damage Source"
        },
        "mistakes": {
          "title": "Mistakes to Avoid",
          "solution": "Solution:"
        },
        "video": {
          "title": "Video Guide",
          "common_soon": "Video will be added soon",
          "stay_tuned": "Stay tuned for a detailed visual explanation of the event steps"
        }
      },
      "sword_land": {
        "title": "Swordland Guide",
        "desc": "Control = Win | Organization = Power | Team = Everything",
        "intro": {
          "title": "Event Overview",
          "desc": "Alliance vs Alliance PvP event lasting 1 hour, occurring every two weeks (usually Sunday). Troops do not die, only get wounded and return after the event."
        },
        "conditions": {
          "title": "Participation Rules",
          "list": [
            "Only the Top 20 power alliances qualify",
            "Each alliance registers 2 Legions (30 Main + 10 Reserve each)",
            "Must be in the alliance before the registration period"
          ]
        },
        "stages": {
          "title": "Event Stages",
          "voting": "Voting: Selecting preferred time",
          "registration": "Registration: Leaders assign players",
          "matchmaking": "Matchmaking: Finding a similar power opponent",
          "battle": "Battle: The actual 60-minute combat"
        },
        "goal": {
          "title": "Objective",
          "desc": "Score more points than the opponent by capturing buildings, killing troops, and map control. Remember: Control > Kills!"
        },
        "scoring_details": {
          "title": "Scoring System",
          "holding": "Capturing building = High alliance points",
          "staying": "Holding building = Continuous points (Vital)",
          "kills": "Killing troops = High personal points",
          "destroying": "Destroying buildings = Medium points"
        },
        "battle_phases": {
          "title": "Battle Phases",
          "phase_1": {
            "title": "Start (0-5 mins)",
            "desc": "Capture buildings as fast as possible; fast players to near ones, strong players to hubs."
          },
          "phase_2": {
            "title": "Stabilize (5-15 mins)",
            "desc": "Guard buildings with infantry and launch rallies on weak spots."
          },
          "phase_3": {
            "title": "Mid-game (15-40 mins)",
            "desc": "Major battles and Shrine emergence. Strategic toggling between attack and defense."
          }
        },
        "buildings": {
          "title": "Key Buildings",
          "stables": "Royal Stables: Reduces teleport cooldown",
          "bell_tower": "Bell Tower: Reduces capture time",
          "hall": "Hall of Reformation: Attack & Defense bonus",
          "shrine": "Swordland Shrine: Highest point source (at 15 mins)"
        },
        "rewards": {
          "title": "Rewards",
          "points": "Total reward at 180k personal points",
          "loss": "Participation rewards even for losses",
          "mvp": "Extra prizes for top scorers"
        },
        "mistakes": {
          "list": [
            "Focusing only on kills and ignoring buildings",
            "Leaving captured buildings without enough protection",
            "Entire team rushing to the center without a plan"
          ]
        },
        "tips": {
          "title": "Strategy & Winning",
          "notes": "Important Notes",
          "list": [
            "Buildings are more important than fighting",
            "Don't attack aimlessly",
            "Rallies are stronger than solo attacks",
            "Don't lose your building while taking another",
            "Focus on the Shrine after 15 minutes"
          ]
        }
      },
      "eternity_reach": {
        "title": "Eternity’s Reach Guide",
        "desc": "Smart Gathering = Win | Combat is not the Goal | Fast Skills",
        "intro": {
          "title": "Event Overview",
          "desc": "A solo competitive event occurring every two weeks. 30-minute rounds with 100 players. Goal: Collect the most Copper Ore."
        },
        "system": {
          "title": "Event System",
          "list": [
            "No troop death and no healing required",
            "Heroes face temporary cooldown upon defeat",
            "Fighting players is NOT the main objective"
          ]
        },
        "points": {
          "title": "Scoring (Copper Collection)",
          "guards": "Cesare Guards: Experience + Copper (Early game)",
          "mines": "Mines: Constant points based on level",
          "fractured": "Fractured Veins: Huge point source (Periodic)",
          "center": "Eternity Center: High continuous points (Risky)"
        },
        "skills": {
          "title": "Skill Tree",
          "path": "Best Path: Right → Right → Left → Left → Right",
          "skill_1": "Increase Copper from Guards",
          "skill_2": "Increase March Speed",
          "skill_3": "5000 Copper upon entering mine (every 60s)",
          "skill_4": "Increase Gathering Speed",
          "skill_5": "Massive temporary gathering boost"
        },
        "stages": {
          "title": "Gameplay Stages",
          "stage_1": {
            "title": "Phase 1: Start",
            "desc": "Attack guards only to unlock Skill 3 quickly. Do not gather resources yet."
          },
          "stage_2": {
            "title": "Phase 2: Mid-game",
            "desc": "Use 'One Minute' strategy: Enter mine, wait 60s, withdraw and re-send."
          },
          "stage_3": {
            "title": "Phase 3: Final",
            "desc": "Focus entirely on gathering and Fractured Veins. Use Skill 5 and stop guard hunting."
          }
        },
        "strategies": {
          "title": "Winning Strategies",
          "list": [
            "Don't waste time fighting other players",
            "Find a quiet spot away from the center",
            "Keep all your marches busy at all times",
            "Use Teleport to reach Fractured Veins instantly"
          ]
        },
        "mistakes": {
          "title": "Common Mistakes",
          "list": [
            "Fighting players and wasting time",
            "Ignoring Skill 3 and not rushing it",
            "Using Skill 5 randomly",
            "Staying in crowded areas",
            "Leaving troops idle"
          ]
        },
        "rewards": {
          "title": "Rewards",
          "rank": "High Rank: Governor Charm materials and rare resources",
          "participation": "Participation: Good rewards even without a win"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
