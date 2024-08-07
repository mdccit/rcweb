// src/services/authService.js
const createAuthService = (apiService) => {
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

  const logout = async (request_body) => {
    const url = '/auth/logout';
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to Logout');
    }
  };


  const register = async (request_body) => {
    const url = '/auth/register';
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };


  const registerStep2 = async (userDetails) => {
    const url = '/auth/register-step-2';
    const body = userDetails;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to register 2');
    }
  };

  const getGoogleAuthUrl = async () => {
    const url = '/auth/google-auth-url';

    try {
      const response = await apiService.getRequest(url);
      return response.data.authUrl; 
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch Google auth URL');
    }
  };

  const googleLogin = async (authCode) => {
    const url = '/auth/google-login';
    const body = { auth_code: authCode };

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to login with Google');
    }
  };

  const googleRegister = async (authCode) => {
    const url = '/auth/google-register';
    const body = { auth_code: authCode };

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register with Google');
    }
  };

  return {
    login,
    register,
    registerStep2,
    getGoogleAuthUrl,
    googleLogin,
    googleRegister,
  };
};

export default createAuthService;
