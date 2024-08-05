import createAuthService from '@/services/authService';

export default defineNuxtPlugin((nuxtApp) => {
  const apiService = nuxtApp.$apiService;
  console.log('API Service in authService plugin:', apiService); // Debug log
  if (!apiService) {
    console.error("apiService is not available!");
    return;
  }

  const authService = createAuthService(apiService);
  nuxtApp.provide('authService', authService);
  console.log('Auth Service provided:', authService); // Debug log
});
