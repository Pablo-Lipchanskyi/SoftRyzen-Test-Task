import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en', // Начальный язык
    fallbackLng: 'en', // Язык, используемый при отсутствии перевода для выбранного языка
    backend: {
      loadPath: './{{lng}}/{{ns}}.json', // Путь к вашим файлам с переводами
    },
    react: {
      useSuspense: false, // Если true, используйте <Suspense> для ленивой загрузки переводов
    },
  });

export default i18n;