import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en/translation.json';
import translationAR from './ar/translation.json';

const resources = {
	en: { translation: translationEN },
	ar: { translation: translationAR },
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(LanguageDetector)

	.init({
		resources,
		supportedLngs: ['en', 'ar'],
		fallbackLng: 'en',

		detection: {
			order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
			caches: ['cookie'],
		},

		react: { usesuSpense: false },
	});

export default i18n;
