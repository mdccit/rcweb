const createPublicService = (apiService) => {
  

  const get_player = async (user_slug) => {
    const url = `/public/players/${user_slug}`;
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
  
 const get_coache = async (coache_slug) => {
  const url = `/public/coaches/${coache_slug}`;
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
    get_player,
    get_coache
  };


}


export default createPublicService;
