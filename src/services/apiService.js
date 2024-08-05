const createApiService = (config) => {
  // Ensure config is provided
  if (!config) {
    throw new Error('Configuration is not provided');
  }

  // Destructure the properties from the config
  const { apiUrl, accessKey, defaultLang } = config;d

  const handleResponse = async (response) => {
    const data = await response.json();
    if (!response.ok) {
      const error = data.message || 'Something went wrong';
      throw new Error(error);
    }
    return data;
  };

  const getHeaders = () => ({
    'Content-Type': 'application/json',
    'access_key': accessKey,
    'lang': defaultLang,
  });

  const getRequest = async (url) => {
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    return handleResponse(response);
  };

  const postRequest = async (url, body) => {
    console.log("Post Request Body:", body);
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  };

  const putRequest = async (url, body) => {
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  };

  const patchRequest = async (url, body) => {
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  };

  const deleteRequest = async (url) => {
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    return handleResponse(response);
  };

  return { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
};

export default createApiService;
