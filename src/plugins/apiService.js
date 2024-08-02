import createApiService from '~/services/apiService';

export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$apiConfig;

  if (!config) {
    console.error("Config is not provided!");
    return;
  }

  const apiService = createApiService(config);

  // Make the apiService available globally
  nuxtApp.provide('apiService', apiService);
});
