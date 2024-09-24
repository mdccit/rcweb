const createUserService = (apiService) => {


  const get_connection = async (user_id) => {
    const url = `/user/connections-list-with-compare/${user_id}`;
    try {
      const response = await apiService.getRequest(url);
      console.log(response)
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      console.log(error)
      throw new Error(error.message || 'Failed to register');
    }
  };

  const get_check_connection_type = async (user_id) => {
    const url = `/user/connections-check/${user_id}`;
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      console.log(error)
      throw new Error(error.message || 'Failed to register');
    }
  };


  const connection_request = async (request_body) => {
    const url = '/user/connections-request';
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const connection_accept = async (connection_id, request_body) => {
    const url = `/user/connections-accept/${connection_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const save_search = async (request_body) => {
    const url = `/user/save-search`;
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const get_save_search = async () => {
    const url = `/user/get-save-search`;
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      console.log(error)
      throw new Error(error.message || 'Failed to register');
    }
  };

  const delete_save = async (id) => {
    const url = `/user/delete-search/${id}`;
    try {
      const response = await apiService.deleteRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      console.log(error)
      throw new Error(error.message || 'Failed to register');
    }
  };

  const search_user = async (request_body) => {
    const url = `/user/search`;
    const body = request_body;

    try {
      const response = await apiService.getRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update post');
    }
  };


  const update_player_bio = async (request_body) => {

    const url = `/public/players/update-bio/${request_body.user_slug}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const update_player_name = async (request_body) => {

    const url = `/public/players/update-basic-info/${request_body.user_slug}`;
    const body = request_body;

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


  const update_player_info = async (request_body) => {

    const url = `/public/players/update-other-info/${request_body.user_slug}`;
    const body = request_body;

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
  const connection_cancelle = async (connection_id,request_body) => {
    const url = `/user/connections-cancelle/${connection_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
       return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const connection_reject = async (connection_id,request_body) => {
    const url = `/user/connections-reject/${connection_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
       return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const connection_remove = async (connection_id,request_body) => {
    const url = `/user/connections-remove/${connection_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
       return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const upload_player_media = async (formData) => {
    // Extract user_slug from the formData to build the URL
    const userSlug = formData.get('user_slug');
  
    // Ensure userSlug is present
    if (!userSlug) {
      throw new Error('User slug is missing from formData.');
    }
  
    const url = `/public/players/upload-media/${userSlug}`;
  
    try {
      // Send the FormData directly as the body
      const response = await apiService.postMedia(url, formData); // No need to set Content-Type, the browser handles it
  
      return response;
    } catch (error) {
      // Handle error response from the API
      if (error.response) {
        throw error.response; // Pass the full response for further handling
      } else {
        throw new Error(error.message || 'Failed to upload media');
      }
    }
  };
  

  return {
    get_connection,
    connection_request,
    connection_accept,
    get_check_connection_type,
    save_search,
    get_save_search,
    delete_save,
    search_user,
    update_player_bio,
    update_player_name,
    update_player_info,
    connection_reject,
    connection_cancelle,
    connection_remove,
    upload_player_media
  };


}


export default createUserService;
