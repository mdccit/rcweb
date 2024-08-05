import createApiService from '@/services/apiService';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  if (!config.apiUrl || !config.accessKey || !config.defaultLang) {
    throw new Error('API configuration is incomplete');
  }

  const apiService = createApiService(config);
  nuxtApp.provide('apiService', apiService);
  console.log('API Service provided:', apiService); // Debug log
});
