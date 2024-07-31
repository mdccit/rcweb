export default ({ $config }) => {
  const baseUrl = $config.apiUrl;


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
    'access_key': process.env.ACCESS_KEY,
    'lang': process.env.DEFAULT_LANG,
  });

  const getRequest = async (url) => {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    return handleResponse(response);
  };

  const postRequest = async (url, body) => {


    const response = await fetch(`${baseUrl}${url}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  };

  const putRequest = async (url, body) => {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  };

  const patchRequest = async (url, body) => {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  };

  const deleteRequest = async (url) => {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    return handleResponse(response);
  };

  return { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
};