import { useLoadingStore } from '@/stores/loadingStore';

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


  const getAuthHeaders = () => {
    if (process.client) {
      const token = localStorage.getItem('token');

      return {
        'Content-Type': 'application/json',
        'AccessKey': accessKey,
        'Lang': defaultLang,
        'Authorization': token ? `Bearer ${token}` : '', // Include the token if it exists
      };
    } else {

      return {
        'Content-Type': 'application/json',
        'AccessKey': accessKey,
        'Lang': defaultLang,
      };
    }
  };

  const getRequest = async (url) => {
    try {
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'GET',
        headers: getAuthHeaders(),
      });

      return await handleResponse(response);
    } catch (error) {
      throw error;
    }
  };

  const postRequest = async (url, body) => {
    const loadingStore = useLoadingStore();
    try {
      // Start loading
      loadingStore.startLoading();
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(body),
      });

      // Stop loading after request
      loadingStore.stopLoading();
      // Handle the response (check for errors)
      return await handleResponse(response);
    } catch (error) {
      // Stop loading after request
      loadingStore.stopLoading();
      throw error;
    }
  };


  const postMedia = async (url, body) => {
    try {
      const headers = getAuthHeaders();

      // If body is FormData, remove 'Content-Type' to let the browser set it
      if (body instanceof FormData) {
        delete headers['Content-Type'];
      }

      const response = await fetch(`${apiUrl}${url}`, {
        method: 'POST',
        headers: headers,
        body: body,
      });

      // Handle the response (check for errors)
      return await handleResponse(response);
    } catch (error) {
      throw error;
    }
  };

  const putRequest = async (url, body) => {
    const loadingStore = useLoadingStore();
    try {
      // Stop loading after request
      loadingStore.startLoading();
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(body),
      });

      // if (!response.ok) {
      //   const errorData = await response.json(); // Parse the error response
      //   throw { status: response.status, ...errorData }; // Throw the entire error response
      // }
      // Stop loading after request
      loadingStore.stopLoading();
      return await handleResponse(response);
    } catch (error) {
      // Stop loading after request
      loadingStore.stopLoading();
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
      throw error;
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
    postMedia
  };
};

export default createApiService;
