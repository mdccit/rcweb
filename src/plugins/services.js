import { initializeServices } from '@/services';

export default defineNuxtPlugin((nuxtApp) => {
  // Check if services are already provided to avoid redefinition
  if (!nuxtApp.provided) {
    nuxtApp.provided = {};
  }

  if (!nuxtApp.provided.apiService) {
    const { apiService, authService } = initializeServices();
    nuxtApp.provide('apiService', apiService);
    nuxtApp.provide('authService', authService);
    console.log('API Service and Auth Service provided:', { apiService, authService });
  }
});
