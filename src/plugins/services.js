import { initializeServices } from '@/services';
import createAdminService from '@/services/adminService';
import createFeedService from '@/services/feedService';

export default defineNuxtPlugin((nuxtApp) => {
    const { apiService, authService } = initializeServices();
    
    // Explicitly create and initialize adminService after apiService
    const adminService = createAdminService(apiService);
    const feedService = createFeedService(apiService);

    nuxtApp.provide('apiService', apiService);
    nuxtApp.provide('authService', authService);
    nuxtApp.provide('adminService', adminService);
    nuxtApp.provide('feedService', feedService);

    console.log('API Service provided:', { apiService, authService, adminService , feedService});
});
