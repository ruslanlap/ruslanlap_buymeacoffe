import React, { createContext, useContext, useState, ReactNode } from "react";

// Визначення доступних мов
export type Language = "uk" | "en";

// Ключі перекладів
export type TranslationKey =
  | "heroTitle"
  | "heroSubtitle"
  | "heroButton"
  | "whySupportTitle"
  | "whySupportSubtitle"
  | "reasonProjectDevelopment"
  | "reasonProjectDevelopmentDesc"
  | "reasonContentCreation"
  | "reasonContentCreationDesc"
  | "reasonCreativitySupport"
  | "reasonCreativitySupportDesc"
  | "donationOptionsTitle"
  | "donationOptionsSubtitle"
  | "monobankTitle"
  | "monobankDesc"
  | "supportViaMonobank"
  | "aboutTitle"
  | "aboutSubtitle"
  | "aboutParagraph1"
  | "aboutParagraph2"
  | "aboutParagraph3"
  | "footerThankYou"
  | "footerDescription"
  | "footerRights"
  | "footerCreatedWith"
  | "reportBugTitle"
  | "reportBugDesc"
  | "suggestChangeTitle"
  | "suggestChangeDesc"
  | "reportBugButton"
  | "suggestChangeButton"
  | "reviewsTitle"
  | "reviewsDescription"
  | "leaveReview"
  | "scanToDonate"
  | "qrCodeDescription"
  | "footerBy"
  | "logoAlt"
  | "withLove"
  | "scrollDown"
  | "feedbackTitle"
  | "feedbackSubtitle";

// Об'єкт з перекладами
const translations: Record<Language, Record<TranslationKey, string>> = {
  uk: {
    // Загальні елементи
    logoAlt: "Логотип сайту",
    // Кнопки повідомлення про помилку та пропозиції змін
    reportBugButton: "Знайшли помилку? Розкажіть нам",
    suggestChangeButton: "Маєте ідею? Поділіться нею",
    footerBy: "by ruslanlap",
    scrollDown: "Прокрутити вниз",
    withLove: "З любов'ю для вас 💜",

    // Секція "Герой"
    heroTitle: "Підтримайте мою роботу!",
    heroSubtitle:
      "Ваш внесок живить інновації та дозволяє втілювати найсміливіші ідеї в життя. Кожна гривня — це велика підтрика для створення нових проєктів!",
    heroButton: "Долучитися зараз",

    // Секція "Чому варто підтримати"
    whySupportTitle: "Що дає ваша підтримка",
    whySupportSubtitle:
      "Ми перетворюємо ваш внесок на позитивні зміни та можливості для неймовірних проєктів.",
    reasonProjectDevelopment: "Інновації та масштабування",
    reasonProjectDevelopmentDesc:
      "З вашою допомогою ми експериментуємо з новими технологіями, впроваджуємо сміливі ідеї та розширюємо межі можливого.",
    reasonContentCreation: "Натхнення для творчості",
    reasonContentCreationDesc:
      "Ваші донати звільняють час для створення унікального контенту, який надихає, інформує та відкриває нові горизонти.",
    reasonCreativitySupport: "Енергія для змін",
    reasonCreativitySupportDesc:
      "Ваша віра в проєкт надихає щодня долати нові вершини та ділитися знаннями, які змінюють світогляд.",

    // Секція "Підтримка роботи"
    donationOptionsTitle: "Як ви можете допомогти",
    donationOptionsSubtitle:
      "Обирайте свій шлях підтримки – від блискавичного переказу до міжнародної допомоги!",
    monobankTitle: "Блискавичний Monobank",
    monobankDesc:
      "Швидкий та інтуїтивний шлях підтримати проєкт – мінімум кліків, максимум користі.",
    supportViaMonobank: "Підтримати через Mono",

    // Секція "Про мене"
    aboutTitle: "Привіт, мене звати Руслан,",
    aboutSubtitle: "ось мій шлях і філософія",
    aboutParagraph1:
      "Я поєдную розробку з мистецтвом творення, щоб створювати проєкти, які не лише розважають, але й вирішують реальні виклики.",
    aboutParagraph2:
      "Моя місія — трансформувати ідеї в живі проєкти, що служать спільноті. Кожен внесок розпалює полум'я творчості та відкриває нові можливості.",
    aboutParagraph3:
      "З вашою підтримкою я можу фокусуватися на найголовнішому: інноваціях, якості та спільноті. Разом ми не просто створюємо продукт — ми формуємо культуру!",

    footerThankYou: "Вдячний за вашу підтримку!",
    footerDescription:
      "Кожен ваш внесок — це для мене мотивація розвивати проєкти і вкладати час у розробу нових продуктів",
    footerRights: "Захищено авторським правом",
    footerCreatedWith: "Зроблено з натхненням",

    // Секція зворотного зв'язку
    feedbackTitle: "Зворотний зв'язок",
    feedbackSubtitle: "Повідомте нас про будь-які проблеми або пропозиції змін",
    reportBugTitle: "Помітили недолік?",
    reportBugDesc:
      "Ваша уважність допомагає нам удосконалюватись — розкажіть про технічні проблеми, з якими ви зіткнулись.",
    suggestChangeTitle: "Бачите потенціал?",
    suggestChangeDesc:
      "Ваші свіжі ідеї та креативні пропозиції — безцінний ресурс для розвитку проєкту!",

    // Відгуки
    reviewsTitle: "Ваша оцінка та відгук важливі для мене",
    reviewsDescription:
      "Кожен відгук — це компас, що направляє наш розвиток у правильному напрямку!",
    leaveReview: "Поділитися враженнями",
    scanToDonate: "Скануйте для підтримки",
    qrCodeDescription:
      "Один QR-код відкриває шлях до підтримки нашого бачення – так само просто, як насолоджуватися кавою!",
  },
  en: {
    // General elements
    logoAlt: "Website Logo",
    heroTitle: "Support My Work!",
    heroSubtitle:
      "Your contribution ignites creativity and transforms bold ideas into reality. Every donation catalyzes revolutionary projects!",
    heroButton: "Join the Movement",
    scrollDown: "Scroll down",
    withLove: "With love for you 💜",

    // Why Support section
    whySupportTitle: "The Impact of Your Support",
    whySupportSubtitle:
      "Watch how your generosity transforms into tangible innovations and groundbreaking content.",
    reasonProjectDevelopment: "Boundless Growth",
    reasonProjectDevelopmentDesc:
      "Your backing enables experimentation with cutting-edge technologies and implementation of ambitious visions that redefine possibilities.",
    reasonContentCreation: "Creative Freedom",
    reasonContentCreationDesc:
      "Each contribution liberates time for crafting exceptional content that educates, entertains, and expands horizons.",
    reasonCreativitySupport: "Momentum for Innovation",
    reasonCreativitySupportDesc:
      "Your trust fuels our passion to break barriers, explore uncharted territories, and share transformative knowledge.",

    // Support My Work section
    donationOptionsTitle: "Pathways to Partnership",
    donationOptionsSubtitle:
      "Choose your preferred method to join our mission – from lightning-fast transfers to global support!",
    monobankTitle: "Swift Monobank",
    monobankDesc:
      "Experience the seamless way to contribute – minimal clicks, maximum impact on our shared vision.",
    supportViaMonobank: "Contribute via Mono",

    // About Me section
    aboutTitle: "The Creator's Journey",
    aboutSubtitle: "Vision and Philosophy",
    aboutParagraph1:
      "I blend technical expertise with creative artistry to craft projects that not only entertain but address real-world challenges.",
    aboutParagraph2:
      "My mission is transforming concepts into vibrant projects that serve communities. Each contribution ignites the creative flame and unlocks new possibilities.",
    aboutParagraph3:
      "Your support allows me to concentrate on what truly matters: innovation, quality, and community building. Together, we're not just creating products – we're shaping culture!",

    // Footer
    footerThankYou: "Eternally grateful for your support!",
    footerDescription:
      "Your contributions power the engine of innovation and fuel our commitment to excellence.",
    footerRights: "All rights protected",
    footerCreatedWith: "Crafted with inspiration",

    // Feedback section
    feedbackTitle: "Feedback",
    feedbackSubtitle: "Report any issues or suggestions for improvements",
    reportBugTitle: "Spotted an Issue?",
    reportBugDesc:
      "Your keen eye helps us evolve – tell us about technical glitches you've encountered along the way.",
    suggestChangeTitle: "Envision Improvements?",
    suggestChangeDesc:
      "Your fresh perspectives and innovative suggestions are invaluable resources for our growth!",
    reportBugButton: "Highlight a Bug",
    suggestChangeButton: "Share Your Vision",

    // Reviews
    reviewsTitle: "Community Voices",
    reviewsDescription:
      "Every review guides our journey like a compass pointing toward excellence!",
    leaveReview: "Share Your Experience",
    scanToDonate: "Scan to Empower",
    qrCodeDescription:
      "One QR code opens the gateway to supporting our vision – as simple as enjoying your coffee!",

    // Footer
    footerBy: "by ruslanlap",
  },
};

// Інтерфейс мовного контексту
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

// Створення контексту
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Компонент-провайдер для мовного контексту
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Функція для отримання перекладу за ключем
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Кастомний хук для використання мовного контексту
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
