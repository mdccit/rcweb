const createUserService = (apiService) => {
  

    const get_connection = async (user_id) => {
      const url = `/user/connections-list-with-compare/${user_id}`;
      console.log(url)
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
    
  
    return {
        get_connection
    };
  
  
  }
  
  
  export default createUserService;
  