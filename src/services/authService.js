const createAuthService = (apiService) => {
  console.log('apiService in createAuthService:', apiService); // Debug log
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

  const getGoogleAuthUrl = async () => {
    const url = '/auth/google-auth-url';

    try {
      const response = await apiService.getRequest(url);
      return response.authUrl; // Assuming response contains authUrl directly
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
    getGoogleAuthUrl,
    googleLogin,
    googleRegister,
  };
};

export default createAuthService;
