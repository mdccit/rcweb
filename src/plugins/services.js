import { initializeServices } from '@/services';
import createAdminService from '@/services/adminService';

export default defineNuxtPlugin((nuxtApp) => {
    const { apiService, authService } = initializeServices();
    
    // Explicitly create and initialize adminService after apiService
    const adminService = createAdminService(apiService);

    // nuxtApp.provide('apiService', apiService);
    // nuxtApp.provide('authService', authService);
    // nuxtApp.provide('adminService', adminService);

    console.debug(' Application Running.......')

    // console.log('API Service, Auth Service, and Admin Service provided:', { apiService, authService, adminService });
});
