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

    const connection_accept = async (connection_id,request_body) => {
      const url = `/user/connections-accept/${connection_id}`;
      const body = request_body;

      try {
        const response = await apiService.putRequest(url, body);
         return response;
      } catch (error) {
        throw new Error(error.message || 'Failed to update');
      }
    };
  
    return {
        get_connection,
        connection_request,
        connection_accept,
        get_check_connection_type

    };
  
  
  }
  
  
  export default createUserService;
  