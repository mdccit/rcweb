

import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
const createApiService = (config) => {
  if (!config) {
    throw new Error('Configuration is not provided');
  }

  const { apiUrl, accessKey, defaultLang } = config;

  // Handle the response and check for HTTP status codes
  const handleResponse = async (response) => {
    const responseData = await response.json(); // Parse JSON response

    if (!response.ok) {
      // If the response status is not in the 2xx range, throw an error
      const error = new Error('HTTP error');
      error.status = response.status;
      error.response = responseData;  // Include server response in error
      throw error;
    }
    return responseData; // Return the parsed data for successful requests
  };

  // Handle 401 Unauthorized error and log out
  const handleUnauthorizedError = async () => {
    const userStore = useUserStore(); // Access user store
    const router = useRouter(); // Access router
    const token = userStore.token; // Get token from store instead of localStorage

    // Call the logout API and wait for the result
    try {
      const response = await logout({ bearer_token: token });

      // If the logout was successful, clear user data and redirect
      if (response.status === 200) {
        userStore.clearUser(); // Clear user from store
        router.push('/login'); // Redirect to login page
      } else {
        console.error('Logout failed.');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'AccessKey': accessKey,
      'Lang': defaultLang,
      'Authorization': token ? `Bearer ${token}` : '', // Include the token if it exists
    };
  };

  const getRequest = async (url) => {
    try {
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'GET',
        headers: getAuthHeaders(),
      });

      // Check for 401 Unauthorized error
      if (response.status === 401) {
        // Call the specific function when 401 error occurs
        handleUnauthorizedError(); // Call your function here

        // Optionally, throw a new error or return a specific result
        throw new Error('Unauthorized - 401');
      }
      return await handleResponse(response);
    } catch (error) {
      throw new Error(error.message || 'Error making GET request');
    }
  };

  const postRequest = async (url, body) => {
    try {
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(body),
      });

      // Handle the response (check for errors)
      return await handleResponse(response);
    } catch (error) {
      throw error;
    }
  };


  const putRequest = async (url, body) => {
    try {
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(body),
      });
      return await handleResponse(response);
    } catch (error) {
      throw error;
    }
  };

  const deleteRequest = async (url) => {
    try {
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      return await handleResponse(response);
    } catch (error) {
      throw new Error(error.message || 'Error making DELETE request');
    }
  };

  const patchRequest = async (url, body) => {
    try {
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify(body),
      });
      return await handleResponse(response);
    } catch (error) {
      throw error;
    }
  };

  return {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
    patchRequest,
  };
};

export default createApiService;
