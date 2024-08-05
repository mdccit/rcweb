export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;

  nuxtApp.provide('apiConfig', config);
  
  console.log("API URL Runtime:", config.apiUrl);
});
