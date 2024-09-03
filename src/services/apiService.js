const createApiService = (config) => {
  if (!config) {
    throw new Error('Configuration is not provided');
  }

  const { apiUrl, accessKey, defaultLang } = config;

  const handleResponse = async (response) => {
    const data = await response.json();
    if (!response.ok) {
      const error = data.message || 'Something went wrong';
      throw new Error(error);
    }
    return data;
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
      return await handleResponse(response);
    } catch (error) {
      throw new Error(error.message || 'Error making GET request');
    }
  };

  const postRequest = async (url, body) => {
    try {
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'POST',
        headers:getAuthHeaders(),
        body: JSON.stringify(body),
      });
      return await handleResponse(response);
    } catch (error) {
      throw new Error(error.message || 'Error making POST request');
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
      throw new Error(error.message || 'Error making PUT request');
    }
  };

  const deleteRequest = async (url) => {
    try {
      const response = await fetch(`${apiUrl}${url}`, {
        method: 'DELETE',
        headers:getAuthHeaders(),
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
      throw new Error(error.message || 'Error making PATCH request');
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
