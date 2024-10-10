const createUserService = (apiService) => {


  const get_connection = async (user_id) => {
    const url = `/user/connections-list-with-compare/${user_id}`;
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

  const get_check_connection_type = async (user_slug) => {
    const url = `/user/connections-check/${user_slug}`;
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
    const { user_role, search_key, state, city, tuition_in_state_min, tuition_in_state_max, tuition_out_state_min, tuition_out_state_max, gender, graduation_month, graduation_year, country_id, handedness, utr_min, utr_max, wtn_min, wtn_max, atp_ranking, itf_ranking, national_ranking } = request_body;
    const url = `/user/search?user_role=${user_role}&search_key=${search_key}&state=${state}&city=${city}&tuition_in_state_min=${tuition_in_state_min}&tuition_in_state_max=${tuition_in_state_max}&tuition_out_state_min=${tuition_out_state_min}&tuition_out_state_max=${tuition_out_state_max}&gender=${gender}&graduation_month=${graduation_month}&country_id=${country_id}&handedness=${handedness}&utr_min=${utr_min}&utr_max=${utr_max}&wtn_min=${wtn_min}&wtn_max=${wtn_max}&atp_ranking=${atp_ranking}&itf_ranking=${itf_ranking}&national_ranking=${national_ranking}`;
    try {
      const response = await apiService.getRequest(url);
      console.log(response)
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
  const connection_cancelle = async (connection_id, request_body) => {
    const url = `/user/connections-cancelle/${connection_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const connection_reject = async (connection_id, request_body) => {
    const url = `/user/connections-reject/${connection_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const connection_remove = async (connection_id, request_body) => {
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


  const update_player_budget = async (request_body) => {

    const url = `/public/players/update-budget/${request_body.user_slug}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };


  const update_player_contact_info = async (request_body) => {

    const url = `/public/players/update-contact-info/${request_body.user_slug}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };



  const update_player_core_values = async (request_body) => {
    const url = `/public/players/update-core-values/${request_body.user_slug}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        throw new Error('No response received from server');
      } else {
        throw new Error(error.message || 'Error in request setup');
      }
    }
  };

  const delete_player_media = async (media_id) => {

    const url = `/public/players/remove-media/${media_id}`;
    const body = {};

    try {
      const response = await apiService.deleteRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };


  const upload_player_profile_picture = async (file, user_slug) => {

    const url = `/public/players/upload-profile-picture/${user_slug}`;
    // Create a new FormData object
    const formData = new FormData();

    // Ensure the file is appended correctly
    if (file) {
      formData.append('file', file); // The field name must match what the backend expects
    } else {
      throw new Error('No file selected'); // Handle if no file is selected
    }
    try {
      const response = await apiService.postMedia(url, formData);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || 'Failed to login');
      }
    }
  };

  const update_coach_bio = async (request_body) => {

    const url = `/public/coaches/update-bio/${request_body.user_slug}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };


  
  const update_coach_contact_info = async (request_body) => {

    const url = `/public/coaches/update-contact-info/${request_body.user_slug}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const update_coach_other_info = async (request_body) => {

    const url = `/public/coaches/update-other-info/${request_body.user_slug}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const update_coach_name = async (request_body) => {

    const url = `/public/coaches/update-basic-info/${request_body.user_slug}`;
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


  const upload_coach_profile_picture = async (file, user_slug) => {

    const url = `/public/coaches/upload-profile-picture/${user_slug}`;
    // Create a new FormData object
    const formData = new FormData();

    // Ensure the file is appended correctly
    if (file) {
      formData.append('file', file); // The field name must match what the backend expects
    } else {
      throw new Error('No file selected'); // Handle if no file is selected
    }
    try {
      const response = await apiService.postMedia(url, formData);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || 'Failed to login');
      }
    }
  };


  const upload_coach_media = async (formData) => {
    // Extract user_slug from the formData to build the URL
    const userSlug = formData.get('user_slug');

    // Ensure userSlug is present
    if (!userSlug) {
      throw new Error('User slug is missing from formData.');
    }

    const url = `/public/coaches/upload-media/${userSlug}`;

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

  const upload_coach_cover_photo = async (file, user_slug) => {

    const url = `/public/coaches/upload-cover-picture/${user_slug}`;
    // Create a new FormData object
    const formData = new FormData();

    // Ensure the file is appended correctly
    if (file) {
      formData.append('file', file); // The field name must match what the backend expects
    } else {
      throw new Error('No file selected'); // Handle if no file is selected
    }
    try {
      const response = await apiService.postMedia(url, formData);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || 'Failed to login');
      }
    }
  };

  const delete_coach_media = async (media_id) => {

    const url = `/public/coaches/remove-media/${media_id}`;
    const body = {};

    try {
      const response = await apiService.deleteRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
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
    update_player_budget,
    update_player_contact_info,
    update_player_core_values,
    connection_reject,
    connection_cancelle,
    connection_remove,
    upload_player_media,
    delete_player_media,
    upload_player_profile_picture,
    update_coach_bio,
    update_coach_contact_info,
    update_coach_other_info,
    update_coach_name,
    upload_coach_profile_picture,
    upload_coach_media,
    upload_coach_cover_photo,
    delete_coach_media

  };


}


export default createUserService;
