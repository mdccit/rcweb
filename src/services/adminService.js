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

  const get_business_members = async (business_id) => {
    const url = `/admin/businesses/users/${business_id}`;
  
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
  
  const search_business_users = async (business_id) => {
    const url = `/admin/businesses/search-users/${business_id}?page=${page}&per_page_items=${per_page_items}`;
  
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
  
  const user_session_delete = async (user_id) => {
    const url = `/admin/user-session-delete/${user_id}`;
  
    try {
      const response = await apiService.deleteRequest(url);
      if (response && response.data && response.data.user_basic_info) {
        return response.data.user_basic_info;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
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
    get_school_details,
    list_business,
    get_business_members,
    search_business_users,
    user_session_delete
  };
};

export default createAdminService;
