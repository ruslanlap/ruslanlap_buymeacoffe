import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define available languages
export type Language = 'uk' | 'en';

// Translation type
export type TranslationKey =
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroButton'
  | 'whySupportTitle'
  | 'whySupportSubtitle'
  | 'reasonProjectDevelopment'
  | 'reasonProjectDevelopmentDesc'
  | 'reasonContentCreation'
  | 'reasonContentCreationDesc'
  | 'reasonCreativitySupport'
  | 'reasonCreativitySupportDesc'
  | 'donationOptionsTitle'
  | 'donationOptionsSubtitle'
  | 'monobankTitle'
  | 'monobankDesc'
  | 'paypalTitle'
  | 'paypalDesc'
  | 'supportViaMonobank'
  | 'supportViaPaypal'
  | 'aboutTitle'
  | 'aboutSubtitle'
  | 'aboutParagraph1'
  | 'aboutParagraph2'
  | 'aboutParagraph3'
  | 'footerThankYou'
  | 'footerDescription'
  | 'footerRights'
  | 'footerCreatedWith'
  | 'reportBugTitle'
  | 'reportBugDesc'
  | 'suggestChangeTitle'
  | 'suggestChangeDesc'
  | 'reportBugButton'
  | 'suggestChangeButton'
  | 'reviewsTitle'
  | 'reviewsDescription'
  | 'leaveReview'
  | 'scanToDonate'
  | 'qrCodeDescription';

// Translations object
const translations: Record<Language, Record<TranslationKey, string>> = {
  uk: {
    //bug report & suggest change
    reportBugButton: 'Повідомити про помилку',
    suggestChangeButton: 'Запропонувати зміни',

    // Hero section
    heroTitle: 'Підтримайте мою роботу!',
    heroSubtitle: 'Ваша підтримка допомагає мені створювати якісний контент та розвивати проєкти. Кожна гривня має значення для майбутніх творчих починань!',
    heroButton: 'Підтримати зараз',

    // Why support section
    whySupportTitle: 'Чому варто підтримати',
    whySupportSubtitle: 'Ваша підтримка має безпосередній вплив на розвиток моїх проєктів та створення нового контенту',
    reasonProjectDevelopment: 'Розвиток проєкту',
    reasonProjectDevelopmentDesc: 'Ваша підтримка допомагає масштабувати проєкт, впроваджувати нові ідеї та розширювати аудиторію.',
    reasonContentCreation: 'Створення контенту',
    reasonContentCreationDesc: 'Кожен внесок допомагає мені приділяти більше часу створенню якісного контенту, корисного для спільноти.',
    reasonCreativitySupport: 'Підтримка творчості',
    reasonCreativitySupportDesc: 'Ваші донати є проявом віри в мою роботу та мотивують мене продовжувати творити й ділитися знаннями.',

    // Donation options section
    donationOptionsTitle: 'Підтримати мою роботу',
    donationOptionsSubtitle: 'Оберіть зручний для вас спосіб підтримки. Кожен внесок важливий!',
    monobankTitle: 'Monobank',
    monobankDesc: 'Підтримайте через зручну Monobank банку, кошти надійдуть миттєво.',
    paypalTitle: 'PayPal',
    paypalDesc: 'Міжнародні перекази через PayPal — зручно для підтримки з-за кордону.',
    supportViaMonobank: 'Підтримати через Monobank',
    supportViaPaypal: 'Підтримати через PayPal',

    // About section
    aboutTitle: 'Декілька слів про те',
    aboutSubtitle: 'хто я',
    aboutParagraph1: 'Привіт! Я творець контенту та розробник, який присвятив себе створенню цікавих та корисних проєктів для спільноти.',
    aboutParagraph2: 'Мої проєкти народжуються з бажання вирішувати реальні проблеми та ділитися знаннями з іншими. Кожен донат не лише підтримує мою роботу, але й мотивує створювати ще більше якісного контенту.',
    aboutParagraph3: 'Завдяки вашій підтримці я можу зосередитися на розробці нових функцій, створенні навчальних матеріалів та розширенні проєкту. Разом ми будуємо щось особливе!',

    // Footer
    footerThankYou: 'Дякую за підтримку!',
    footerDescription: 'Ваші внески допомагають мені продовжувати створювати якісний контент.',
    footerRights: 'Всі права захищено',
    footerCreatedWith: 'Створено з',

    // Feedback section
    reportBugTitle: 'Повідомити про помилку',
    reportBugDesc: 'Знайшли помилку або баг? Повідомте нам, щоб ми могли покращити наш сервіс.',
    suggestChangeTitle: 'Запропонувати зміни',
    suggestChangeDesc: 'Маєте ідеї щодо покращення? Поділіться своїми думками та пропозиціями.',

    //Stars
    reviewsTitle: "Відгуки користувачів",
    reviewsDescription: "Ваші відгуки допомагають нам стати кращими. Залиште відгук на Firefox Add-ons!",
    leaveReview: "Залишити відгук",
    scanToDonate: "Відскаунити для пожертви",
    qrCodeDescription: "Також, ви можете відсканувати QR-код, щоб подарувати каву",
  },
  en: {
    // Hero section
    heroTitle: 'Support My Work!',
    heroSubtitle: 'Your support helps me create quality content and develop projects. Every contribution matters for future creative endeavors!',
    heroButton: 'Support Now',

    // Why support section
    whySupportTitle: 'Why Support',
    whySupportSubtitle: 'Your support has a direct impact on the development of my projects and creation of new content',
    reasonProjectDevelopment: 'Project Development',
    reasonProjectDevelopmentDesc: 'Your support helps to scale the project, implement new ideas, and expand the audience.',
    reasonContentCreation: 'Content Creation',
    reasonContentCreationDesc: 'Each contribution helps me dedicate more time to creating quality content that benefits the community.',
    reasonCreativitySupport: 'Supporting Creativity',
    reasonCreativitySupportDesc: 'Your donations are a sign of belief in my work and motivate me to continue creating and sharing knowledge.',

    // Donation options section
    donationOptionsTitle: 'Support My Work',
    donationOptionsSubtitle: 'Choose a convenient way to support. Every contribution matters!',
    monobankTitle: 'Monobank',
    monobankDesc: 'Support through convenient Monobank, funds will arrive instantly.',
    paypalTitle: 'PayPal',
    paypalDesc: 'International transfers via PayPal — convenient for support from abroad.',
    supportViaMonobank: 'Support via Monobank',
    supportViaPaypal: 'Support via PayPal',

    // About section
    aboutTitle: 'About Me',
    aboutSubtitle: 'Who I Am',
    aboutParagraph1: 'Hello! I am a content creator and developer dedicated to creating interesting and useful projects for the community.',
    aboutParagraph2: 'My projects are born from a desire to solve real problems and share knowledge with others. Each donation not only supports my work but also motivates me to create even more quality content.',
    aboutParagraph3: 'Thanks to your support, I can focus on developing new features, creating educational materials, and expanding the project. Together we are building something special!',

    // Footer
    footerThankYou: 'Thank you for your support!',
    footerDescription: 'Your contributions help me continue to create quality content.',
    footerRights: 'All rights reserved',
    footerCreatedWith: 'Created with',

    // Feedback section
    reportBugTitle: 'Report a Bug',
    reportBugDesc: 'Found a bug or an error? Let us know so we can improve our service.',
    suggestChangeTitle: 'Suggest Changes',
    suggestChangeDesc: 'Have ideas for improvements? Share your thoughts and suggestions with us.',
    reportBugButton: 'Fill out bug report form',
    suggestChangeButton: 'Fill out suggestion form',

    //Stars
    reviewsDescription: "Your feedback helps us improve. Leave a review on Firefox Add-ons!",
    reviewsTitle: "What Users Say",
    leaveReview: "Leave a Review",
    scanToDonate: "Scan to Donate",
    qrCodeDescription: "Also,You can can the QR code to donate a coffee",

  },
};

// Language context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('uk');

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
