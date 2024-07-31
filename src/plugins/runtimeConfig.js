export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  nuxtApp.provide('apiConfig', config);
  console.log("API URL:", config.apiUrl);
  console.log("Access Key:", config.accessKey);
  console.log("Default Language:", config.defaultLang);
  nuxtApp.provide('apiConfig', config);
});
