const createAdminService = (apiService) => {

  const new_user_register = async (request_body) => {
    const url = '/admin/user-register';
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const user_update = async (request_body) => {
    
    const url = `/admin/user-update/${request_body.user_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };
  
  const list_users = async (request_body) => {
    const url = '/admin/users';
    const body = request_body;

    try {
      const response = await apiService.getRequest(url, body);
      if (response && response.data && response.data && response.data.dataSets) {
        return response.data.dataSets;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };


  const get_user_details = async (user_id) => {
    const url = `/admin/users/${user_id}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data.user_basic_info) {
        return response.data.user_basic_info;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };
  
  const list_schools = async (page = 1, per_page_items = 5) => {
    const url = `/admin/schools?page=${page}&per_page_items=${per_page_items}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data.dataSets) {
        return response.data.dataSets;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to retrieve schools');
    }
  };
  

  const school_register = async (request_body) => {
    const url = '/admin/school-register';
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const school_update = async (request_body) => {
    
    const url = `/admin/school-update/${request_body.school_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const list_school_staff = async (school_id) => {
    const url = `/admin/schools/users/${school_id}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to retrieve businesses');
    }
  };
  

  const get_school_details = async (user_id) => {
    const url = `/admin/schools/${user_id}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to get details');
    }
  };



  const list_business = async (page = 1, per_page_items = 10) => {
    const url = `/admin/businesses?page=${page}&per_page_items=${per_page_items}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data.dataSets) {
        return response.data.dataSets;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to retrieve businesses');
    }
  };


  const get_business_details = async (business_id) => {
    const url = `/admin/businesses/${business_id}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to get details');
    }
  };



  const business_register = async (request_body) => {
    const url = '/admin/business-register';
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register business');
    }
  };

  const get_business_members = async (business_id) => {
    const url = `/admin/businesses/users/${business_id}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to retrieve businesses');
    }
  };
  
  const search_business_users = async (business_id,page , per_page_items, search_key = '') => {

    const url = `/admin/businesses/search-users/${business_id}?page=${page}&per_page_items=${per_page_items}&search_key=${search_key}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to retrieve businesses');
    }
  };
  

  const add_business_user = async (request_body) => {
    const url = '/admin/businesses/add-user';
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };


  const add_school_user = async (request_body) => {
    const url = '/admin/schools/add-user';
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };



  const get_player_details = async (user_id) => {
    const url = `/admin/player-get/${user_id}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data.user_profile_info) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const player_update = async (user_id,request_body) => {
    
    const url = `/admin/player-update/${user_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update');
    }
  };

  const user_session_delete = async (user_id) => {
    const url = `/admin/user-session-delete/${user_id}`;
    try {
      const response = await apiService.deleteRequest(url);

      if (response) {
        return response;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };
  
  const user_delete = async (user_id) => {
    const url = `/admin/user-delete/${user_id}`;
  
    try {
      const response = await apiService.deleteRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const school_delete = async (school_id) => {
    const url = `/admin/schools/${school_id}`;
  
    try {
      const response = await apiService.deleteRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const business_delete = async (business_id) => {
    const url = `/admin/businesses/${business_id}`;
  
    try {
      const response = await apiService.deleteRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const morderation_all =async (page = 1, per_page_items = 10) => {
    const url = `/admin/morderation-get-all?page=${page}&per_page_items=${per_page_items}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data.dataSets) {
        return response.data.dataSets;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };
  const morderation_get =async (morderation_id) => {
    const url = `/admin/morderation-get/${morderation_id}`;
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data ) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const morderation_comments =async (morderation_id) => {
    const url = `/admin/morderation-comment-get-all/${morderation_id}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data ) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const morderation_close =async (morderation_id,request_body) => {
    const url = `/admin/morderation-close/${morderation_id}`;
    const body = request_body;
    try {
      const response = await apiService.putRequest(url,body);
      return response
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const morderation_reopen =async (morderation_id ,request_body) => {
    const url = `/admin/morderation-reopen/${morderation_id}`;
    const body = request_body;
    try {
      const response = await apiService.putRequest(url,body);
      return response
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const morderation_delete =async (morderation_id) => {
    const url = `/admin/morderation-delete/${morderation_id}`;
  
    try {
      const response = await apiService.deleteRequest(url);
      return response;
      
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const morderation_comment_add =async (request_body) => {
    const url = '/admin/morderation-comment-create';
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const morderation_approve =async (morderation_id ,request_body) => {
    const url = `/admin/morderation-approve/${morderation_id}`;
    const body = request_body;
    try {
      const response = await apiService.putRequest(url,body);
      return response
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const morderation_logs =async (morderation_id) => {
    const url = `/admin/morderation-log/${morderation_id}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data ) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  
  const search_school_users = async (school_id, page, per_page_items, search_key = '') => {

    const url = `/admin/school/search-users/${school_id}?page=${page}&per_page_items=${per_page_items}&search_key=${search_key}`;
  
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to retrieve businesses');
    }
  };

  return {
    new_user_register,
    list_users,
    get_user_details,
    list_schools,
    user_update,
    school_register,
    school_update,
    list_school_staff,
    search_school_users,
    add_school_user,
    get_school_details,
    list_business,
    business_register,
    get_business_members,
    search_business_users,
    add_business_user,
    get_business_details,
    school_update,
    get_player_details,
    player_update,
    user_session_delete,
    user_delete,
    school_delete,
    business_delete,
    morderation_all,
    morderation_get,
    morderation_comments,
    morderation_close,
    morderation_reopen,
    morderation_delete,
    morderation_comment_add,
    morderation_approve,
    morderation_logs
  };
};

export default createAdminService;
