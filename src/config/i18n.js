import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  nonExplicitWhitelist: true,
  whitelist: [
    'pt',
    'en',
  ],
  load: 'languageOnly',
  fallbackLng: 'en',
  detection: {
    caches: [],
    order: ['navigator', 'htmlTag'],
  },
  debug: process.env.NODE_ENV !== 'production',
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: process.env.PUBLIC_URL + '/locales/{{lng}}/{{ns}}.json',
    allowMultiLoading: true,
  },
});

export default i18n;
