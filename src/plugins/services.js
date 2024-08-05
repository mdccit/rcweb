import { initializeServices } from '@/services';

export default defineNuxtPlugin((nuxtApp) => {
  if (!nuxtApp._provided) {
    nuxtApp._provided = {};
  }

  if (!nuxtApp._provided.apiService) {
    const { apiService, authService } = initializeServices();
    nuxtApp.provide('apiService', apiService);
    nuxtApp.provide('authService', authService);
    console.log('API Service and Auth Service provided:', { apiService, authService });
  }
});
