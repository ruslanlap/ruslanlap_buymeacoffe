import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "uk" | "en";

export type TranslationKey =
  | "logoAlt"
  | "navSupport"
  | "navImpact"
  | "navCommunity"
  | "navAbout"
  | "headerSupportBtn"
  | "heroBadge"
  | "heroTitle"
  | "heroTitleMuted"
  | "heroSubtitle"
  | "heroPrimaryCta"
  | "heroSecondaryCta"
  | "heroStat1"
  | "heroStat2"
  | "heroStat3"
  | "specimenLabel"
  | "specimenStatus"
  | "donateKicker"
  | "donateTitle"
  | "donateSubtitle"
  | "monoBadge"
  | "monobankTitle"
  | "monobankDesc"
  | "supportViaMonobank"
  | "tier1"
  | "tier2"
  | "tier3"
  | "cardLabel"
  | "copyBtn"
  | "copiedBtn"
  | "copiedToast"
  | "copyErrorToast"
  | "scanToDonate"
  | "qrCodeDescription"
  | "openJarLink"
  | "whyKicker"
  | "whySupportTitle"
  | "whySupportSubtitle"
  | "reason1Tag"
  | "reasonProjectDevelopment"
  | "reasonProjectDevelopmentDesc"
  | "reason2Tag"
  | "reasonContentCreation"
  | "reasonContentCreationDesc"
  | "reason3Tag"
  | "reasonCreativitySupport"
  | "reasonCreativitySupportDesc"
  | "communityKicker"
  | "communityTitle"
  | "communitySubtitle"
  | "reviewsBadge"
  | "reviewsTitle"
  | "reviewsDescription"
  | "leaveReview"
  | "reportBugTag"
  | "reportBugTitle"
  | "reportBugDesc"
  | "reportBugButton"
  | "suggestChangeTag"
  | "suggestChangeTitle"
  | "suggestChangeDesc"
  | "suggestChangeButton"
  | "aboutKicker"
  | "aboutTitle"
  | "aboutSubtitle"
  | "aboutParagraph1"
  | "aboutParagraph2"
  | "aboutParagraph3"
  | "specProjectLabel"
  | "specProjectValue"
  | "specPlatformLabel"
  | "specPlatformValue"
  | "specModelLabel"
  | "specModelValue"
  | "specAuthorLabel"
  | "specAuthorValue"
  | "specJarLabel"
  | "githubProfileBtn"
  | "firefoxAddonBtn"
  | "footerDescription"
  | "footerRights"
  | "footerSupportLink"
  | "footerFeedbackLink";

const translations: Record<Language, Record<TranslationKey, string>> = {
  uk: {
    logoAlt: "Логотип SVG Extractor Pro",
    navSupport: "Підтримати",
    navImpact: "На що йдуть кошти",
    navCommunity: "Відгуки",
    navAbout: "Про автора",
    headerSupportBtn: "Пригостити кавою",

    heroBadge: "Незалежний open-source проєкт",
    heroTitle: "Підтримайте розвиток",
    heroTitleMuted: "SVG Extractor Pro та корисних утиліт.",
    heroSubtitle:
      "Безкоштовне розширення без реклами, трекерів і підписок. Якщо інструмент економить ваш час у щоденній роботі — ви можете підтримати його подальший розвиток.",
    heroPrimaryCta: "Підтримати через Monobank",
    heroSecondaryCta: "Встановити для Firefox",
    heroStat1: "0 трекерів",
    heroStat2: "100% безкоштовно",
    heroStat3: "Активна підтримка",
    specimenLabel: "VECTOR SPECIMEN",
    specimenStatus: "ГОТОВО ДО ЕКСПОРТУ",

    donateKicker: "01 / ПІДТРИМКА",
    donateTitle: "Прямий внесок без посередників",
    donateSubtitle:
      "Оберіть зручний спосіб: миттєве поповнення банки Monobank, переказ за номером картки або сканування QR-коду.",
    monoBadge: "MONOBANK JAR",
    monobankTitle: "Поповнити банку Monobank",
    monobankDesc:
      "Підтримує Apple Pay, Google Pay та картки будь-яких банків. Кожна чашка кави безпосередньо фінансує час на оновлення та нові функції.",
    supportViaMonobank: "Відкрити банку Monobank",
    tier1: "☕ На еспресо",
    tier2: "⚡ На нову фічу",
    tier3: "🛠 Підтримка релізів",
    cardLabel: "НОМЕР КАРТКИ ДЛЯ ПЕРЕКАЗУ",
    copyBtn: "Копіювати",
    copiedBtn: "Скопійовано",
    copiedToast: "Номер картки скопійовано",
    copyErrorToast: "Не вдалося скопіювати номер",
    scanToDonate: "Швидкий переказ за QR",
    qrCodeDescription:
      "Наведіть камеру телефону або відкрийте застосунок банку, щоб миттєво перейти до банки.",
    openJarLink: "Перейти за посиланням",

    whyKicker: "02 / НА ЩО ЙДЕ ПІДТРИМКА",
    whySupportTitle: "Прозора користь від кожного внеску",
    whySupportSubtitle:
      "Усі донати допомагають зберігати інструмент швидким, незалежним і відкритим для спільноти.",
    reason1Tag: "ПІДТРИМКА",
    reasonProjectDevelopment: "Оновлення та сумісність",
    reasonProjectDevelopmentDesc:
      "Регулярна адаптація під нові версії браузерів, виправлення крайових випадків та оптимізація парсингу складних SVG-дерев.",
    reason2Tag: "НЕЗАЛЕЖНІСТЬ",
    reasonContentCreation: "Без реклами і пейволів",
    reasonContentCreationDesc:
      "Ваша підтримка дозволяє залишати всі ключові можливості безкоштовними без нав’язливих банерів, телеметрії та продажів даних.",
    reason3Tag: "РОЗВИТОК",
    reasonCreativitySupport: "Нові функції та інструменти",
    reasonCreativitySupportDesc:
      "Пріоритизація побажань користувачів, покращення експорту та створення супутніх міні-утиліт для дизайнерів і фронтенд-розробників.",

    communityKicker: "03 / СПІЛЬНОТА ТА ЗВОРОТНИЙ ЗВ’ЯЗОК",
    communityTitle: "Допоможіть зробити інструмент кращим",
    communitySubtitle:
      "Оцінка в каталозі Firefox або короткий звіт про помилку допомагають проєкту не менше за фінансовий внесок.",
    reviewsBadge: "FIREFOX ADD-ONS",
    reviewsTitle: "Користуєтесь SVG Extractor Pro?",
    reviewsDescription:
      "Залиште чесний відгук на сторінці розширення Mozilla — це допомагає іншим розробникам і дизайнерам знайти інструмент.",
    leaveReview: "Залишити відгук на Firefox",
    reportBugTag: "БАГ-РЕПОРТ",
    reportBugTitle: "Знайшли помилку?",
    reportBugDesc:
      "Якщо якийсь сайт некоректно експортує SVG або інтерфейс поводиться дивно — опишіть випадок у короткій формі.",
    reportBugButton: "Повідомити про помилку",
    suggestChangeTag: "ІДЕЯ",
    suggestChangeTitle: "Маєте пропозицію?",
    suggestChangeDesc:
      "Поділіться ідеєю нового формату експорту, гарячих клавіш чи покращення UX — найкращі ідеї потрапляють у наступні релізи.",
    suggestChangeButton: "Запропонувати покращення",

    aboutKicker: "04 / ПРО АВТОРА",
    aboutTitle: "Привіт, я Руслан",
    aboutSubtitle: "Незалежний розробник із фокусом на практичні інструменти.",
    aboutParagraph1:
      "Я створюю легкі та сфокусовані утиліти, які вирішують конкретні щоденні задачі без зайвого візуального шуму та перевантажених інтерфейсів.",
    aboutParagraph2:
      "SVG Extractor Pro з’явився з простої потреби: швидко знаходити, переглядати й завантажувати чисті векторні іконки прямо зі сторінки без занурення в DevTools.",
    aboutParagraph3:
      "Якщо мої інструменти зекономили вам кілька хвилин або годин роботи — буду щиро вдячний за каву, зірочку чи відгук.",
    specProjectLabel: "ПРОЄКТ",
    specProjectValue: "SVG Extractor Pro",
    specPlatformLabel: "ПЛАТФОРМА",
    specPlatformValue: "Firefox Add-on (WebExtensions)",
    specModelLabel: "МОДЕЛЬ",
    specModelValue: "Безкоштовно, без реклами",
    specAuthorLabel: "АВТОР",
    specAuthorValue: "@ruslanlap",
    specJarLabel: "МОНОБАНКА",
    githubProfileBtn: "GitHub @ruslanlap",
    firefoxAddonBtn: "Сторінка Add-on",

    footerDescription:
      "Зроблено незалежно для дизайнерів і розробників. Дякую кожному, хто підтримує проєкт.",
    footerRights: "Руслан Лаптєв",
    footerSupportLink: "Підтримати",
    footerFeedbackLink: "Зворотний зв’язок",
  },
  en: {
    logoAlt: "SVG Extractor Pro logo",
    navSupport: "Support",
    navImpact: "Impact",
    navCommunity: "Feedback",
    navAbout: "Maker",
    headerSupportBtn: "Buy a coffee",

    heroBadge: "Independent Open-Source Tooling",
    heroTitle: "Support the craft behind",
    heroTitleMuted: "SVG Extractor Pro & indie dev utilities.",
    heroSubtitle:
      "A focused browser extension built with zero ads, zero tracking, and zero paywalls. If it saves you time in your daily workflow, consider fueling future updates.",
    heroPrimaryCta: "Support via Monobank",
    heroSecondaryCta: "Get Firefox Add-on",
    heroStat1: "Zero trackers",
    heroStat2: "Free forever",
    heroStat3: "Actively maintained",
    specimenLabel: "VECTOR SPECIMEN",
    specimenStatus: "EXPORT READY",

    donateKicker: "01 / SUPPORT",
    donateTitle: "Direct support, no middlemen",
    donateSubtitle:
      "Contribute in seconds via Monobank Jar (Apple Pay, Google Pay, or any card), copy the direct card number, or scan the QR code.",
    monoBadge: "MONOBANK JAR",
    monobankTitle: "Contribute to the Monobank Jar",
    monobankDesc:
      "Works with Apple Pay, Google Pay, and international cards. Every contribution goes straight toward maintenance hours, browser compatibility, and new features.",
    supportViaMonobank: "Open Monobank Jar",
    tier1: "☕ Espresso",
    tier2: "⚡ Feature fuel",
    tier3: "🛠 Release sponsor",
    cardLabel: "DIRECT CARD NUMBER",
    copyBtn: "Copy",
    copiedBtn: "Copied",
    copiedToast: "Card number copied to clipboard",
    copyErrorToast: "Could not copy card number",
    scanToDonate: "Scan QR to open Jar",
    qrCodeDescription:
      "Point your phone camera at the code or tap it to jump straight to the Monobank Jar.",
    openJarLink: "Open direct link",

    whyKicker: "02 / WHERE IT GOES",
    whySupportTitle: "What your contribution funds",
    whySupportSubtitle:
      "Keeping lightweight developer tools fast, privacy-respecting, and dependable takes ongoing care.",
    reason1Tag: "MAINTENANCE",
    reasonProjectDevelopment: "Browser updates & fixes",
    reasonProjectDevelopmentDesc:
      "Keeping pace with Firefox releases, handling complex nested SVG DOM edge cases, and sharpening extraction speed.",
    reason2Tag: "PRIVACY",
    reasonContentCreation: "Ad-free & tracker-free",
    reasonContentCreationDesc:
      "Reader and user support keeps the extension clean—no sponsored banners, no analytics beacons, and no locked core features.",
    reason3Tag: "ROADMAP",
    reasonCreativitySupport: "New formats & utilities",
    reasonCreativitySupportDesc:
      "Building community-requested improvements like cleaner batch exports, SVG optimization presets, and companion micro-tools.",

    communityKicker: "03 / COMMUNITY & FEEDBACK",
    communityTitle: "Help shape what ships next",
    communitySubtitle:
      "A quick review on Mozilla Add-ons or a reproducible bug note is just as valuable as a donation.",
    reviewsBadge: "FIREFOX ADD-ONS",
    reviewsTitle: "Using SVG Extractor Pro in your workflow?",
    reviewsDescription:
      "Leave an honest rating on the Firefox Add-ons listing—it helps fellow designers and frontend engineers discover the tool.",
    leaveReview: "Review on Firefox Add-ons",
    reportBugTag: "ISSUE TRACKER",
    reportBugTitle: "Spotted a bug?",
    reportBugDesc:
      "Found a site where an inline SVG fails to extract or preview properly? Send over a quick report so it gets fixed.",
    reportBugButton: "Report an issue",
    suggestChangeTag: "FEATURE REQUEST",
    suggestChangeTitle: "Have a feature idea?",
    suggestChangeDesc:
      "Share ideas for export options, keyboard shortcuts, or UI polish—community requests drive the release queue.",
    suggestChangeButton: "Suggest an improvement",

    aboutKicker: "04 / MAKER",
    aboutTitle: "Hi, I'm Ruslan",
    aboutSubtitle: "Independent engineer crafting quiet, practical web tools.",
    aboutParagraph1:
      "I build lightweight developer utilities designed to solve one job cleanly without bloated dashboards or visual clutter.",
    aboutParagraph2:
      "SVG Extractor Pro started from a straightforward itch: inspecting, previewing, and grabbing clean vector assets from any webpage without digging through DevTools.",
    aboutParagraph3:
      "If my work has saved you time on a sprint or side project, thank you for considering a coffee or leaving a note.",
    specProjectLabel: "PROJECT",
    specProjectValue: "SVG Extractor Pro",
    specPlatformLabel: "PLATFORM",
    specPlatformValue: "Firefox Add-on (WebExtensions)",
    specModelLabel: "MODEL",
    specModelValue: "Free & Ad-Free",
    specAuthorLabel: "AUTHOR",
    specAuthorValue: "@ruslanlap",
    specJarLabel: "MONOBANK",
    githubProfileBtn: "GitHub @ruslanlap",
    firefoxAddonBtn: "Firefox Listing",

    footerDescription:
      "Built independently for designers and frontend engineers. Thank you for supporting open tooling.",
    footerRights: "Ruslan Laptev",
    footerSupportLink: "Support",
    footerFeedbackLink: "Feedback",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "ruslanlap_lang";

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "uk" || saved === "en") return saved;
    if (
      typeof navigator !== "undefined" &&
      navigator.language?.toLowerCase().startsWith("uk")
    ) {
      return "uk";
    }
  } catch {
    // Ignore storage access errors in restricted contexts
  }
  return "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLang: Language) => {
    setLanguageState(nextLang);
    try {
      localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
