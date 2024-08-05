// src/plugins/apiService.js
import createApiService from '~/services/apiService';

export default defineNuxtPlugin((nuxtApp) => {
  const apiConfig = nuxtApp.$apiConfig;
  console.log('API Config in apiService:', apiConfig); // Debug log
  if (!apiConfig) {
    throw new Error("Configuration is not provided");
  }

  const apiService = createApiService(apiConfig);
  // Make the apiService available globally
  nuxtApp.provide('apiService', apiService);
  console.log('API Service provided:', apiService); // Debug log
});
