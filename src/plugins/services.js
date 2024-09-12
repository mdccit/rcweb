import { initializeServices } from '@/services';
import createAdminService from '@/services/adminService';
import createFeedService from '@/services/feedService';
import createPublicService from '@/services/publicService';

export default defineNuxtPlugin((nuxtApp) => {
    const { apiService, authService } = initializeServices();
    
    // Explicitly create and initialize adminService after apiService
    const adminService = createAdminService(apiService);
    const feedService = createFeedService(apiService);
    const publicService = createPublicService(apiService);

    nuxtApp.provide('apiService', apiService);
    nuxtApp.provide('authService', authService);
    nuxtApp.provide('adminService', adminService);
    nuxtApp.provide('feedService', feedService);
    nuxtApp.provide('publicService', publicService);

    console.debug(' Application Running.......')

    // console.log('API Service, Auth Service, and Admin Service provided:', { apiService, authService, adminService });
});
