import { createPinia } from 'pinia';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  nuxtApp.provide('pinia', pinia);  // Provide pinia instance to Nuxt app
  console.log('Pinia initialized');  // Log to check if Pinia is being initialized
});
