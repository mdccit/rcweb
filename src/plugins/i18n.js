import { createI18n } from 'vue-i18n';
import en from '../../locales/en.json';
import es from '../../locales/es.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false, // Use Composition API
    locale: 'en', // Set locale
    fallbackLocale: 'en', // Set fallback locale
    messages: {
      en,
      es
    }
  });

  vueApp.use(i18n);
});
