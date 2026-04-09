import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  ar: {
    //site name
    "brand.name": "عصر الأساطير",

    // Navigation
    "nav.home": "الرئيسية",
    "nav.download": "تحميل",
    "nav.register": "تسجيل دخول",
    "nav.discord": "ديسكورد",

    // Hero Section
    "hero.welcome": "مرحـبًا بك في عصر الأساطير!",
    "hero.description1":
      "سيرفر Lineage II High Five بنظام Low Rate وتحدي حقيقي لعشاق التقدم الحقيقي والإنجازات الصعبة.",
    "hero.description2":
      "مصمم ليصمد سنوات، ويجمع بين التنافسية والمتعة والتوازن العادل للجميع.",
    "hero.launchTitle": "موعد الإطلاق الرسمي",
    "hero.launchDate":
      "الخميس، 11 سبتمبر 2025 - الساعة 16:00 بتوقيت مكة المكرمة",
    "hero.registerNow": "التسجيل الآن",
    "hero.joinDiscord": "دخول الديسكورد",
    "hero.downloadGame": "تحميل اللعبة",

    // Countdown
    "countdown.days": "يوم",
    "countdown.hours": "ساعة",
    "countdown.minutes": "دقيقة",
    "countdown.seconds": "ثانية",

    // Features Section
    "features.title": "لماذا تختار عصر الأساطير؟",
    "features.lowRate.title": "نظام Low Rate حقيقي",
    "features.lowRate.desc":
      "عش تجربة Lineage II كما يجب أن تكون، بدون تسهيلات أو تجاوزات.",
    "features.autoFarm.title": "نظام تجميع تلقائي متطور",
    "features.autoFarm.desc":
      "اربح وقتك بدون إضاعة جهد، وواصل التقدم حتى أثناء غيابك.",
    "features.clans.title": "نظام كتائب متوازن",
    "features.clans.desc":
      "الكتائب محدودة إلى 9 لاعبين فقط — لتحقيق منافسة شريفة وحقيقية. مكافآت خاصة للكتائب الملتزمة + مسابقات حصرية!",
    "features.official.title": "ملفات رسمية AdvExt64",
    "features.official.desc":
      "استقرار كامل وأداء عالي مبني على ملفات رسمية L2OFF.",
    "features.arabic.title": "دعم دولي + اللغة العربية بالكامل",
    "features.arabic.desc":
      "واجهة ودردشة عربية بالكامل. مجتمع متنوع وجاهز للترحيب بك.",
    "features.events.title": "أحداث يومية وأسبوعية متنوعة",
    "features.events.desc":
      "PvP / Raid Boss / مسابقات تسجيل / جوائز نقدية / والمزيد!",

    // Server Info
    "serverInfo.title": "معلومات النظام واللعب",
    "serverInfo.subtitle": "نسب السيرفر المتوازنة لتجربة لعب حقيقية ومتوازنة",
    "serverInfo.xpSp": "نقاط خبرة ومهارة",
    "serverInfo.adena": "الدينار",
    "serverInfo.drop": "السلب والسقوط",
    "serverInfo.safeEnchant": "التحسين الآمن",
    "serverInfo.maxEnchant": "أقصى تحسين",
    "serverInfo.charactersLimit": "حد الشخصيات لكل جهاز",
    "serverInfo.specialFeatures": "مميزات خاصة",
    "serverInfo.subclass": "التخصصات",
    "serverInfo.subclassDesc": "عن طريق المهمات",
    "serverInfo.noblesse": "التخصص الفرعي والنوبل",
    "serverInfo.noblesseDesc": "عن طريق مهمات",

    // Community Section
    "community.title": "انضم إلى مجتمعنا الآن!",
    "community.subtitle": "تحدث، شارك، نافس، وكن من الأوائل في عصر الأساطير!",
    "community.discord.title": "سيرفر ديسكورد نشط",
    "community.discord.desc": "تواصل مع آلاف اللاعبين والمطورين مباشرة",
    "community.updates.title": "تحديثات مباشرة",
    "community.updates.desc": "استفتاءات + اقتراحات + أخبار السيرفر أولاً بأول",
    "community.support.title": "تواصل مع الإدارة مباشرة",
    "community.support.desc": "دعم فني سريع وحلول فورية لجميع استفساراتك",
    "community.joinHistory": "كن جزءًا من التاريخ",
    "community.joinHistoryDesc":
      "انضم إلى مجتمع عصر الاساطير واكتب اسمك في تاريخ Lineage II العربي",
    "community.joinDiscord": "انضم للديسكورد",
    "community.followNews": "تابع أخبارنا",

    // Footer
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.support": "الدعم الفني",
    "footer.discord": "ديسكورد",
    "footer.copyright": "© 2025 عصر الاساطير | جميع الحقوق محفوظة",

    // Registration Page
    "register.title": "إنشاء حساب جديد",
    "register.subtitle": "انضم إلى عصر الأساطير وابدأ مغامرتك",
    "register.username": "اسم المستخدم",
    "register.usernamePlaceholder": "أدخل اسم المستخدم",
    "register.email": "البريد الإلكتروني",
    "register.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "register.password": "كلمة المرور",
    "register.passwordPlaceholder": "أدخل كلمة المرور",
    "register.confirmPassword": "تأكيد كلمة المرور",
    "register.confirmPasswordPlaceholder": "أعد إدخال كلمة المرور",
    "register.submitButton": "إنشاء الحساب",
    "register.loginLink": "لديك حساب بالفعل؟ تسجيل الدخول",
    "register.termsAccept": "أوافق على",
    "register.termsLink": "شروط الاستخدام",
    "register.and": "و",
    "register.privacyLink": "سياسة الخصوصية",

    // Sign In Page
    "signin.title": "تسجيل الدخول",
    "signin.subtitle": "ادخل إلى حسابك في عصر الأساطير",
    "signin.username": "اسم المستخدم أو البريد الإلكتروني",
    "signin.usernamePlaceholder": "أدخل اسم المستخدم أو البريد الإلكتروني",
    "signin.password": "كلمة المرور",
    "signin.passwordPlaceholder": "أدخل كلمة المرور",
    "signin.rememberMe": "تذكرني",
    "signin.forgotPassword": "نسيت كلمة المرور؟",
    "signin.submitButton": "تسجيل الدخول",
    "signin.registerLink": "ليس لديك حساب؟ إنشاء حساب جديد",

    // 404 Page
    "404.title": "الصفحة غير موجودة",
    "404.description": "عذراً، الصفحة التي تبحث عنها غير متوفرة",
    "404.backToHome": "العودة للرئيسية",
    // Downloads (Modal)
    "download.title": "التنزيلات",
    "download.close": "إغلاق",
    "download.note": "اختر نوع التحميل لعرض الروابط المتاحة.",
    "download.externalWarning": "تنبيه: سيتم فتح الروابط في تبويب خارجي.",
    "download.launcher": "تحميل اللانشر",
    "download.patch": "تحميل الباتش",
    "download.client": "تحميل الكلاينت",
    "download.hint.launcher": "مستحسن للمبتدئين — التحديثات تلقائية.",
    "download.hint.patch": "لو عندك الكلاينت بالفعل — نزّل آخر تحديث.",
    "download.hint.client": "الحزمة الكاملة — قد تكون مجزأة لأكثر من جزء.",
    "download.providers.mediafire": "MediaFire",
    "download.providers.mega": "MEGA",
    "download.providers.gdrive": "Google Drive",
    "download.providers.direct": "مباشر",
    "download.providers.torrent": "تورنت",
    "download.providers.other": "رابط آخر",
    // policy
    "privacy.title": "سياسة الخصوصية – عصر الاساطير",
    "privacy.updated": "آخر تحديث: 27 أغسطس 2025",

    "privacy.h1": "1. مقدمة",
    "privacy.h1.body":
      "نحن في عصر الاساطير نحترم خصوصية زوارنا ولا نقوم بجمع أو استخدام معلوماتكم الشخصية إلا بما يتوافق مع القوانين والأنظمة ذات الصلة. استخدامك للموقع أو خدماتنا يعني موافقتك على سياسة الخصوصية هذه.",

    "privacy.h2": "2. المعلومات التي نقوم بجمعها",
    "privacy.h2.li1": "البريد الإلكتروني (عند التسجيل أو التواصل معنا).",
    "privacy.h2.li2": "اسم الحساب داخل اللعبة.",
    "privacy.h2.li3":
      "بيانات تقنية مثل عنوان الـIP ونوع المتصفح واللغة ونظام التشغيل لأغراض الحماية وتحسين التجربة.",
    "privacy.h2.li4":
      "أي معلومات تقدمها بشكل طوعي (مثال: المشاركة في الفعاليات أو التواصل معنا عبر Discord).",

    "privacy.h3": "3. كيفية استخدام المعلومات",
    "privacy.h3.li1": "إدارة حسابك داخل اللعبة.",
    "privacy.h3.li2": "تقديم الدعم الفني وخدمات اللاعبين.",
    "privacy.h3.li3": "تحسين تجربة المستخدم وتطوير الخدمات.",
    "privacy.h3.li4":
      "إرسال التحديثات أو الإشعارات المتعلقة باللعبة (عبر البريد أو Discord).",
    "privacy.h3.li5": "حماية السيرفر من أي محاولات غش أو استغلال.",

    "privacy.h4": "4. مشاركة المعلومات",
    "privacy.h4.li1":
      "لن نقوم ببيع أو مشاركة معلوماتك مع أي طرف ثالث لأغراض تجارية.",
    "privacy.h4.li2":
      "قد نشارك بعض البيانات مع شركاء موثوقين فقط إذا كان ذلك ضروريًا لتقديم الخدمة (مثل أنظمة الدفع أو استضافة السيرفر).",
    "privacy.h4.li3":
      "نحتفظ بحق مشاركة البيانات إذا طُلب ذلك قانونيًا من قبل السلطات.",

    "privacy.h5": "5. ملفات تعريف الارتباط (Cookies)",
    "privacy.h5.body":
      "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا، مثل حفظ إعدادات اللغة أو تفضيلات تسجيل الدخول. يمكنك التحكم في إعدادات الكوكيز من خلال متصفحك.",

    "privacy.h6": "6. أمان المعلومات",
    "privacy.h6.body":
      "نطبق إجراءات تقنية وتنظيمية مناسبة لحماية بياناتك من الوصول غير المصرح به أو الضياع أو التعديل. لكننا لا نستطيع ضمان الحماية بنسبة 100% نظرًا لطبيعة الإنترنت.",

    "privacy.h7": "7. المدفوعات",
    "privacy.h7.li1":
      "جميع المدفوعات التي تتم عبر موقع عصر الاساطير نهائية وغير قابلة للاسترداد.",
    "privacy.h7.li2":
      "بمجرد إتمام عملية الشراء فإنك تقر وتوافق على عدم أحقيتك في استرداد أي مبالغ مدفوعة.",

    "privacy.h8": "8. حقوقك",
    "privacy.h8.li1": "طلب الوصول إلى بياناتك أو تعديلها.",
    "privacy.h8.li2":
      "طلب حذف بياناتك (قد يؤدي ذلك إلى فقدان حسابك في اللعبة).",
    "privacy.h8.li3": "سحب موافقتك على تلقي رسائل تسويقية في أي وقت.",

    "privacy.h9": "9. روابط خارجية",
    "privacy.h9.body":
      "قد يحتوي موقعنا على روابط لمواقع أو خدمات أخرى (مثل Discord أو YouTube). لسنا مسؤولين عن سياسات الخصوصية الخاصة بتلك المواقع.",

    "privacy.h10": "10. تحديثات سياسة الخصوصية",
    "privacy.h10.body":
      "قد نقوم بتحديث هذه السياسة من وقت لآخر، وسيتم نشر التعديلات على هذه الصفحة مع تعديل تاريخ التحديث.",

    "privacy.h11": "11. التواصل معنا",
    "privacy.h11.email": "البريد الإلكتروني: ",
    "privacy.h11.discord": "Discord الرسمي: ",
    "privacy.h11.discord.link": "رابط Discord الخاص بالسيرفر",
    //terms
    "terms.title": "شروط الاستخدام – عصر الاساطير",
    "terms.updated": "آخر تحديث: 27 أغسطس 2025",

    "terms.h1": "1. القبول",
    "terms.h1.body":
      "باستخدامك لموقع عصر الاساطير أو انضمامك إلى السيرفر، فإنك توافق على الالتزام بهذه الشروط بالكامل. إذا لم توافق على أي جزء من هذه الشروط، فيجب عليك التوقف عن استخدام الموقع أو اللعبة.",

    "terms.h2": "2. الحسابات",
    "terms.h2.li1": "يجب أن تقدم معلومات صحيحة ودقيقة عند إنشاء حسابك.",
    "terms.h2.li2":
      "أنت مسؤول عن الحفاظ على سرية بيانات تسجيل الدخول الخاصة بك.",
    "terms.h2.li3":
      "أي استخدام غير مشروع أو مشبوه لحسابك قد يؤدي إلى حظره بشكل مؤقت أو دائم.",

    "terms.h3": "3. السلوك داخل اللعبة",
    "terms.h3.li1":
      "يُحظر استخدام أي برامج أو أدوات غش (Bots, Hacks, Exploits).",
    "terms.h3.li2":
      "يُمنع استغلال الثغرات أو محاولة الإضرار بالسيرفر أو اللاعبين الآخرين.",
    "terms.h3.li3":
      "الاحترام متبادل داخل اللعبة وفي قنوات التواصل (مثل Discord).",
    "terms.h3.li4":
      "يحق للإدارة اتخاذ أي إجراء ضد الحسابات المخالفة، بما في ذلك الحظر الدائم دون استرداد أي مدفوعات.",

    "terms.h4": "4. الخدمات الافتراضية",
    "terms.h4.li1":
      "جميع العناصر والخدمات المقدمة داخل اللعبة (مثل العملات، الأدوات، أو المميزات) هي خدمات افتراضية لا تمثل أي قيمة نقدية حقيقية خارج اللعبة.",
    "terms.h4.li2":
      "لا يحق لك المطالبة بتحويل أو استبدال أو بيع هذه العناصر خارج إطار اللعبة.",

    "terms.h5": "5. المدفوعات",
    "terms.h5.li1":
      "جميع المدفوعات التي تتم عبر موقع عصر الاساطير نهائية وغير قابلة للاسترداد.",
    "terms.h5.li2":
      "بمجرد إتمام عملية الشراء فإنك تقر وتوافق على عدم أحقيتك في استرداد أي مبالغ مدفوعة.",
    "terms.h5.li3":
      "أي محاولة لفتح نزاع (Dispute/Chargeback) لدى بوابة الدفع قد يؤدي إلى حظر دائم لحسابك.",

    "terms.h6": "6. الملكية الفكرية",
    "terms.h6.li1":
      "جميع الشعارات، التصميمات، والمحتويات الخاصة بـ عصر الاساطير محمية ولا يجوز نسخها أو إعادة استخدامها دون إذن مسبق.",
    "terms.h6.li2":
      "لعبة Lineage II وجميع حقوقها الفكرية مملوكة لشركة NCSoft، ونحن لا ندعي أي ملكية لها.",

    "terms.h7": "7. إخلاء المسؤولية",
    "terms.h7.li1": "يتم تقديم خدمات السيرفر “كما هي” (AS IS) دون أي ضمانات.",
    "terms.h7.li2":
      "لا نتحمل مسؤولية أي أعطال تقنية، فقدان بيانات، أو توقف مؤقت أو دائم للسيرفر.",
    "terms.h7.li3": "استخدامك للخدمات يكون على مسؤوليتك الخاصة.",

    "terms.h8": "8. التعديلات على الشروط",
    "terms.h8.li1": "نحتفظ بالحق في تعديل أو تحديث هذه الشروط في أي وقت.",
    "terms.h8.li2":
      "سيتم نشر أي تغييرات على هذه الصفحة مع تعديل تاريخ التحديث.",
    "terms.h8.li3":
      "استمرارك في استخدام الموقع أو اللعبة بعد التعديلات يعني موافقتك عليها.",

    "terms.h9": "9. التواصل",
    "terms.h9.li1": "البريد الإلكتروني: support@l2-eraoflegends.com",
    "terms.h9.li2": "Discord الرسمي: رابط Discord الخاص بالسيرفر",
    //support
    "support.title": "الدعم الفني – عصر الاساطير",
    "support.subtitle": "نحن هنا لمساعدتك في أي وقت.",
    "support.contact.methods": "طرق التواصل:",

    "support.email": "البريد الإلكتروني:",
    "support.email.value": "support@l2-eraoflegends.com",

    "support.discord": "Discord الرسمي:",
    "support.discord.link": "اضغط هنا للانضمام إلى السيرفر",

    "support.faq": "الأسئلة الشائعة",
    "support.faq.q1": "❓ لا أستطيع تسجيل الدخول، ماذا أفعل؟",
    "support.faq.a1":
      "تأكد من كتابة اسم المستخدم وكلمة المرور بشكل صحيح. إذا استمرت المشكلة، تواصل معنا عبر البريد أو Discord.",

    "support.faq.q2": "❓ كيف أستعيد كلمة المرور؟",
    "support.faq.a2":
      "يمكنك طلب إعادة تعيين كلمة المرور من خلال نموذج الاستعادة (سيتم توفيره لاحقًا) أو عبر التواصل معنا.",

    "support.faq.q3": "❓ هل يمكنني استرداد مدفوعاتي؟",
    "support.faq.a3":
      "جميع المدفوعات نهائية وغير قابلة للاسترداد وفقًا لشروط الاستخدام.",
  },
  en: {
    //site name
    "brand.name": "Era of Legends",
    // Navigation
    "nav.home": "Home",
    "nav.download": "Download",
    "nav.register": "Login",
    "nav.discord": "Discord",

    // Hero Section
    "hero.welcome": "Welcome to Era of Legends!",
    "hero.description1":
      "Lineage II High Five server with Low Rate system and real challenge for true progression and hard achievements lovers.",
    "hero.description2":
      "Designed to last for years, combining competitiveness, fun, and fair balance for everyone.",
    "hero.launchTitle": "Official Launch Date",
    "hero.launchDate": "Thursday, September 11th, 2025 - 16:00 Mecca Time",

    "hero.registerNow": "Register Now",
    "hero.joinDiscord": "Join Discord",
    "hero.downloadGame": "Download Game",

    // Countdown
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",

    // Features Section
    "features.title": "Why Choose Era of Legends?",
    "features.lowRate.title": "True Low Rate System",
    "features.lowRate.desc":
      "Experience Lineage II as it should be, without shortcuts or compromises.",
    "features.autoFarm.title": "Advanced Auto-Farm System",
    "features.autoFarm.desc":
      "Save your time without wasting effort, continue progressing even while away.",
    "features.clans.title": "Balanced Clan System",
    "features.clans.desc":
      "Clans limited to 9 players only — for fair and real competition. Special rewards for committed clans + exclusive contests!",
    "features.official.title": "Official AdvExt64 Files",
    "features.official.desc":
      "Complete stability and high performance built on official L2OFF files.",
    "features.arabic.title": "International Support + Full Arabic",
    "features.arabic.desc":
      "Fully Arabic interface and chat. Diverse community ready to welcome you.",
    "features.events.title": "Varied Daily & Weekly Events",
    "features.events.desc":
      "PvP / Raid Boss / Registration contests / Cash prizes / and more!",

    // Server Info
    "serverInfo.title": "System & Gameplay Information",
    "serverInfo.subtitle":
      "Balanced server rates for a real and balanced gaming experience",
    "serverInfo.xpSp": "XP & SP Points",
    "serverInfo.adena": "Adena",
    "serverInfo.drop": "Drop & Spoil",
    "serverInfo.safeEnchant": "Safe Enchant",
    "serverInfo.maxEnchant": "Max Enchant",
    "serverInfo.charactersLimit": "Characters Limit per PC",
    "serverInfo.specialFeatures": "Special Features",
    "serverInfo.subclass": "Subclass",
    "serverInfo.subclassDesc": "Through Quests",
    "serverInfo.noblesse": "Sub & Noblesse",
    "serverInfo.noblesseDesc": "Through Quests",

    // Community Section
    "community.title": "Join Our Community Now!",
    "community.subtitle":
      "Talk, share, compete, and be among the first in Era of Legends!",
    "community.discord.title": "Active Discord Server",
    "community.discord.desc":
      "Communicate with thousands of players and developers directly",
    "community.updates.title": "Live Updates",
    "community.updates.desc": "Polls + suggestions + server news first hand",
    "community.support.title": "Direct Communication with Management",
    "community.support.desc":
      "Fast technical support and immediate solutions for all your inquiries",
    "community.joinHistory": "Be Part of History",
    "community.joinHistoryDesc":
      "Join Era of Legends community and write your name in Arabic Lineage II history",
    "community.joinDiscord": "Join Discord",
    "community.followNews": "Follow Our News",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.support": "Technical Support",
    "footer.discord": "Discord",
    "footer.copyright": "© 2025 Era of Legends | All Rights Reserved",

    // Registration Page
    "register.title": "Create New Account",
    "register.subtitle": "Join Era of Legends and start your adventure",
    "register.username": "Username",
    "register.usernamePlaceholder": "Enter your username",
    "register.email": "Email Address",
    "register.emailPlaceholder": "Enter your email address",
    "register.password": "Password",
    "register.passwordPlaceholder": "Enter your password",
    "register.confirmPassword": "Confirm Password",
    "register.confirmPasswordPlaceholder": "Re-enter your password",
    "register.submitButton": "Create Account",
    "register.loginLink": "Already have an account? Sign In",
    "register.termsAccept": "I agree to the",
    "register.termsLink": "Terms of Use",
    "register.and": "and",
    "register.privacyLink": "Privacy Policy",

    // Sign In Page
    "signin.title": "Sign In",
    "signin.subtitle": "Access your Era of Legends account",
    "signin.username": "Username or Email",
    "signin.usernamePlaceholder": "Enter your username or email",
    "signin.password": "Password",
    "signin.passwordPlaceholder": "Enter your password",
    "signin.rememberMe": "Remember me",
    "signin.forgotPassword": "Forgot password?",
    "signin.submitButton": "Sign In",
    "signin.registerLink": "Don't have an account? Create new account",

    // 404 Page
    "404.title": "Page Not Found",
    "404.description": "Sorry, the page you are looking for is not available",
    "404.backToHome": "Back to Home",
    // Downloads (Modal)
    "download.title": "Downloads",
    "download.close": "Close",
    "download.note": "Choose a download type to see available links.",
    "download.externalWarning": "Note: Links open in a new tab.",
    "download.launcher": "Download Launcher",
    "download.patch": "Download Patch",
    "download.client": "Download Client",
    "download.hint.launcher": "Recommended for newcomers — auto-updates.",
    "download.hint.patch": "Already have the client? Get the latest update.",
    "download.hint.client": "Full package — might be split into parts.",
    "download.providers.mediafire": "MediaFire",
    "download.providers.mega": "MEGA",
    "download.providers.gdrive": "Google Drive",
    "download.providers.direct": "Direct",
    "download.providers.torrent": "Torrent",
    "download.providers.other": "Other",
    //policy
    "privacy.title": "Privacy Policy – Era of Legends",
    "privacy.updated": "Last updated: August 27, 2025",

    "privacy.h1": "1. Introduction",
    "privacy.h1.body":
      "At Era of Legends, we respect our visitors' privacy and do not collect or use your personal information except in accordance with applicable laws and regulations. Your use of the website or our services constitutes your acceptance of this Privacy Policy.",

    "privacy.h2": "2. Information We Collect",
    "privacy.h2.li1": "Email address (when registering or contacting us).",
    "privacy.h2.li2": "In-game account name.",
    "privacy.h2.li3":
      "Technical data such as IP address, browser type, language, and OS for security and experience improvement.",
    "privacy.h2.li4":
      "Any information you voluntarily provide (e.g., event participation or contacting us via Discord).",

    "privacy.h3": "3. How We Use the Information",
    "privacy.h3.li1": "Manage your in-game account.",
    "privacy.h3.li2": "Provide technical support and player services.",
    "privacy.h3.li3": "Improve user experience and develop services.",
    "privacy.h3.li4":
      "Send updates or notifications related to the game (via email or Discord).",
    "privacy.h3.li5": "Protect the server against cheating or abuse attempts.",

    "privacy.h4": "4. Sharing Information",
    "privacy.h4.li1":
      "We do not sell or share your information with third parties for commercial purposes.",
    "privacy.h4.li2":
      "We may share certain data with trusted partners only when necessary to provide the service (e.g., payment systems or server hosting).",
    "privacy.h4.li3":
      "We reserve the right to share data if legally requested by authorities.",

    "privacy.h5": "5. Cookies",
    "privacy.h5.body":
      "We use cookies to enhance your experience on our site, such as saving language settings or login preferences. You can control cookie settings through your browser.",

    "privacy.h6": "6. Data Security",
    "privacy.h6.body":
      "We apply appropriate technical and organizational measures to protect your data from unauthorized access, loss, or alteration. However, we cannot guarantee 100% protection due to the nature of the internet.",

    "privacy.h7": "7. Payments",
    "privacy.h7.li1":
      "All payments made through the Era of Legends website are final and non-refundable.",
    "privacy.h7.li2":
      "Once a purchase is completed, you acknowledge and agree that you are not entitled to any refunds.",

    "privacy.h8": "8. Your Rights",
    "privacy.h8.li1": "Request access to or correction of your data.",
    "privacy.h8.li2":
      "Request deletion of your data (this may lead to losing your in-game account).",
    "privacy.h8.li3":
      "Withdraw consent to receive marketing messages at any time.",

    "privacy.h9": "9. External Links",
    "privacy.h9.body":
      "Our website may contain links to other websites or services (such as Discord or YouTube). We are not responsible for the privacy policies of those sites.",

    "privacy.h10": "10. Updates to This Policy",
    "privacy.h10.body":
      "We may update this policy from time to time. Changes will be posted on this page with an updated date.",

    "privacy.h11": "11. Contact Us",
    "privacy.h11.email": "Email: ",
    "privacy.h11.discord": "Official Discord: ",
    "privacy.h11.discord.link": "Server Discord Link",
    //trems
    "terms.title": "Terms of Use – Era of Legends",
    "terms.updated": "Last updated: August 27, 2025",

    "terms.h1": "1. Acceptance",
    "terms.h1.body":
      "By using the Era of Legends website or joining the server, you agree to fully comply with these terms. If you do not agree with any part of these terms, you must stop using the site or the game.",

    "terms.h2": "2. Accounts",
    "terms.h2.li1":
      "You must provide accurate and correct information when creating your account.",
    "terms.h2.li2":
      "You are responsible for keeping your login credentials confidential.",
    "terms.h2.li3":
      "Any unauthorized or suspicious use of your account may result in temporary or permanent suspension.",

    "terms.h3": "3. In-Game Conduct",
    "terms.h3.li1":
      "Using any cheat programs or tools (Bots, Hacks, Exploits) is strictly prohibited.",
    "terms.h3.li2":
      "Exploiting bugs or attempting to harm the server or other players is forbidden.",
    "terms.h3.li3":
      "Respect is mandatory inside the game and across communication channels (such as Discord).",
    "terms.h3.li4":
      "The administration reserves the right to take any action against violating accounts, including permanent bans without refunds.",

    "terms.h4": "4. Virtual Services",
    "terms.h4.li1":
      "All items and services provided in-game (such as currencies, items, or features) are virtual and have no real-world monetary value.",
    "terms.h4.li2":
      "You are not entitled to request conversion, replacement, or sale of these items outside the game.",

    "terms.h5": "5. Payments",
    "terms.h5.li1":
      "All payments made through Era of Legends are final and non-refundable.",
    "terms.h5.li2":
      "Once a purchase is completed, you acknowledge and agree that you are not entitled to a refund.",
    "terms.h5.li3":
      "Any attempt to open a dispute/chargeback with the payment gateway may result in permanent account suspension.",

    "terms.h6": "6. Intellectual Property",
    "terms.h6.li1":
      "All logos, designs, and content of Era of Legends are protected and may not be copied or reused without prior permission.",
    "terms.h6.li2":
      "Lineage II and all its intellectual property rights belong to NCSoft, and we do not claim any ownership.",

    "terms.h7": "7. Disclaimer",
    "terms.h7.li1":
      "The server services are provided 'as is' without any warranties.",
    "terms.h7.li2":
      "We are not responsible for any technical failures, data loss, or temporary/permanent server downtime.",
    "terms.h7.li3": "Your use of the services is at your own risk.",

    "terms.h8": "8. Amendments to Terms",
    "terms.h8.li1":
      "We reserve the right to amend or update these terms at any time.",
    "terms.h8.li2":
      "Any changes will be published on this page with the updated date.",
    "terms.h8.li3":
      "Continued use of the site or the game after amendments means you accept them.",

    "terms.h9": "9. Contact",
    "terms.h9.li1": "Email: support@l2-eraoflegends.com",
    "terms.h9.li2": "Official Discord: Server Discord Link",
    //support
    "support.title": "Technical Support – Era of Legends",
    "support.subtitle": "We are here to assist you anytime.",
    "support.contact.methods": "Contact Methods:",

    "support.email": "Email:",
    "support.email.value": "support@l2-eraoflegends.com",

    "support.discord": "Official Discord:",
    "support.discord.link": "Click here to join the server",

    "support.faq": "Frequently Asked Questions",
    "support.faq.q1": "❓ I can’t log in, what should I do?",
    "support.faq.a1":
      "Make sure your username and password are correct. If the issue persists, please contact us via email or Discord.",

    "support.faq.q2": "❓ How can I reset my password?",
    "support.faq.a2":
      "You can request a password reset through the recovery form (coming soon) or by contacting us directly.",

    "support.faq.q3": "❓ Can I get a refund?",
    "support.faq.a3":
      "All payments are final and non-refundable as stated in the Terms of Use.",
  },
} as const;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const t = (key: string): string => {
    const ar = (translations as any).ar?.[key];
    const en = (translations as any).en?.[key];
    return (language === "ar" ? (ar ?? en) : (en ?? ar)) ?? key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
