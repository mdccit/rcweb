import createApiService from './apiService';
import createAuthService from './authService';
import { useRuntimeConfig } from '#app';

export const initializeServices = () => {
  const config = useRuntimeConfig().public;
  console.log('Runtime Config in initializeServices:', config); // Debug log
  if (!config.apiUrl || !config.accessKey || !config.defaultLang) {
    throw new Error('API configuration is incomplete');
  }

  const apiService = createApiService(config);
  const authService = createAuthService(apiService);

  console.log('Initialized Services:', { apiService, authService }); // Debug log
  return { apiService, authService };
};
