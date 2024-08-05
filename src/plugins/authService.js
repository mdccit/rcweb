import createAuthService from '@/services/authService';

export default defineNuxtPlugin((nuxtApp) => {
  const apiConfig = nuxtApp.$apiConfig; 
  const authService = createAuthService(apiConfig);
  nuxtApp.provide('authService', authService);
});
