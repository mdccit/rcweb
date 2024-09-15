import createApiService from './apiService';
import createAuthService from './authService';
import createAdminService from './adminService';
import createFeedService from './feedService';
import createPublicService from './publicService';
import createUserService from './userService';

import { useRuntimeConfig } from '#app';

export const initializeServices = () => {
  const config = useRuntimeConfig().public;
  if (!config.apiUrl || !config.accessKey || !config.defaultLang) {
    throw new Error('API configuration is incomplete');
  }

  const apiService = createApiService(config);
  const authService = createAuthService(apiService);
  const adminService = createAdminService(apiService);
  const feedService = createFeedService(apiService);
  const publicService = createPublicService(apiService);
  const userService = createUserService(apiService);

  return { apiService, authService , adminService, feedService, publicService, userService };
};
