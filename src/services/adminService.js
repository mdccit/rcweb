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
        return response.data;
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
  };
};

export default createAdminService;
