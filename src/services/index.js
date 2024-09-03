import createApiService from './apiService';
import createAuthService from './authService';
import createAdminService from './adminService';
import { useRuntimeConfig } from '#app';

export const initializeServices = () => {
  const config = useRuntimeConfig().public;
  if (!config.apiUrl || !config.accessKey || !config.defaultLang) {
    throw new Error('API configuration is incomplete');
  }

  const apiService = createApiService(config);
  const authService = createAuthService(apiService);
  const adminService = createAdminService(apiService);

  return { apiService, authService , adminService };
};
