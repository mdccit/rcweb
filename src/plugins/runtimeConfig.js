export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;

  if (!nuxtApp.$apiConfig) {
    nuxtApp.provide('apiConfig', config);
  } else {
    console.warn('$apiConfig is already defined.');
  }

  console.log("API URL:", config.apiUrl);
  console.log("Access Key:", config.accessKey);
  console.log("Default Language:", config.defaultLang);
});
