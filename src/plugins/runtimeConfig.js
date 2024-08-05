export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  nuxtApp.provide('apiConfig', config);
  console.log("API Config Runtime:", config); // Debug log
});
