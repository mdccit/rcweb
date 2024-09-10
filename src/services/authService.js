const createAuthService = (apiService) => {
  const login = async (email, password) => {
    const url = '/auth/login';
    const body = { email, password };

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || 'Failed to login');
      }
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
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || 'Failed to register');
      }
    }
  };


  const registerStepTwo = async (endpoint_url, userDetails) => {
    const url = endpoint_url;
    const body = userDetails;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || 'Failed to login');
      }
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
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || 'Failed to login');
      }
    }
  };

  const googleRegister = async (authCode) => {
    const url = '/auth/google-register';
    const body = { auth_code: authCode };

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || 'Failed to register');
      }
    }
  };

  const resetPasswordRequest = async (email) => {
    const url = '/auth/forgot-password-request';
    const body = { email };

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || 'Failed to register');
      }
    }
  };


  const resetPassword = async (password_reset_id, recovery_code, password, password_confirmation) => {
    // Check if password_reset_id is provided
    if (!password_reset_id) {
      throw new Error('Password reset ID is required.');
    }

    // Construct the URL with the password_reset_id
    const url = `/auth/reset-password/${password_reset_id}`;

    // Prepare the request body
    const body = {
      recovery_code,
      password,
      password_confirmation,
    };

    try {
      // Make the API request
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
      throw new Error(error.message || 'Failed to register');
      }
    }
  };


  return {
    login,
    logout,
    register,
    registerStepTwo,
    getGoogleAuthUrl,
    googleLogin,
    googleRegister,
    resetPasswordRequest,
    resetPassword,
  };
};

export default createAuthService;
