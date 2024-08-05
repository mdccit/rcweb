import createApiService from '~/services/apiService';

export default defineNuxtPlugin((nuxtApp) => {

  const apiConfig = nuxtApp.$apiConfig; 
  if (!apiConfig) {
    throw new Error("Configuration is not provided");
  }

  const apiService = createApiService(apiConfig);
  // Make the apiService available globally
  nuxtApp.provide('apiService', apiService);
});
