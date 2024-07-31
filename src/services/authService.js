import createApiService from './apiService';

const createAuthService = ($config) => {
  const apiService = createApiService($config);

  const login = async (email, password) => {
    const url = '/auth/login';
    const body = { email, password };

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to login');
    }
  };

  const register = async (email, password) => {
    const url = '/auth/register';
    const body = { email, password };

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  return { login, register };
};

export default createAuthService;
