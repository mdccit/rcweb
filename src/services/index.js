import createApiService from './apiService';
import createAuthService from './authService';
import createAdminService from './admin/adminService';
import { useRuntimeConfig } from '#app';

export const initializeServices = () => {
  const config = useRuntimeConfig().public;
  if (!config.apiUrl || !config.accessKey || !config.defaultLang) {
    throw new Error('API configuration is incomplete');
  }

  const apiService = createApiService(config);
  const authService = createAuthService(apiService);
  const adminService = createAdminService(adminService);

  return { apiService, authService , adminService };
};
