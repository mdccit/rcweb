import { defineNuxtPlugin } from '#app';
import Flowbite from 'flowbite-vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Flowbite);
});
