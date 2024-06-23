import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en.translation.json'
import translationHE from './locales/he.translation.json'
import LanguageDetector from 'i18next-browser-languagedetector/cjs'

const resources = {
  en: {
    translation: translationEN
  },
  he: {
    translation: translationHE
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    supportedLngs: ['en', 'he'],
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    react: {
      useSuspense: false
    },
  })

export default i18n
