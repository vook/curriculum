import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next)

export const i18nPromise = i18n.init({
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
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: process.env.PUBLIC_URL + '/locales/{{lng}}/{{ns}}.json',
    allowMultiLoading: true,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
