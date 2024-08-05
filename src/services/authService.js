export default defineNuxtPlugin((nuxtApp) => {
  const apiService = nuxtApp.$apiService;

  if (!apiService) {
    console.error("apiService is not available!");
    return;
  }

  const authService = {
    login: async (email, password) => {
      const url = '/auth/login';
      const body = { email, password };
  
      try {
        const response = await apiService.postRequest(url, body);
        return response;
      } catch (error) {
        throw new Error(error.message || 'Failed to login');
      }
    },
    register: async (email, password) => {
      const url = '/auth/register';
      const body = { email, password };
  
      try {
        const response = await apiService.postRequest(url, body);
        return response;
      } catch (error) {
        throw new Error(error.message || 'Failed to register');
      }
    },
    getGoogleAuthUrl:async () => {
      const url = '/auth/google-auth-url';
  
      try {
        const response = await apiService.getRequest(url);
        return response.data.authUrl;
      } catch (error) {
        throw new Error(error.message || 'Failed to fetch Google auth URL');
      }
    },
    googleLogin:async (authCode) => {
      const url = '/auth/google-login';
      const body = { auth_code: authCode };
  
      try {
        const response = await apiService.postRequest(url, body);
        return response;
      } catch (error) {
        throw new Error(error.message || 'Failed to login with Google');
      }
    },
    googleRegister:async (authCode) => {
      const url = '/auth/google-register';
      const body = { auth_code: authCode };
  
      try {
        const response = await apiService.postRequest(url, body);
        return response;
      } catch (error) {
        throw new Error(error.message || 'Failed to register with Google');
      }
    }

  };

  nuxtApp.provide('authService', authService);
});

