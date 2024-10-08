const createPublicService = (apiService) => {
  

  const get_player = async (user_slug) => {
    const url = `/public/players/${user_slug}`;

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

const get_business_user = async (user_slug) => {
  const url = `/public/business-managers/${user_slug}`;
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

const get_business= async (business_slug) => {
  const url = `/public/businesses/${business_slug}`;
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

const get_scool= async (school_slug) => {
  const url = `/public/schools/${school_slug}`;
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

const get_user_profile= async (slug) => {
  const url = `/public/users/${slug}`;
  try {
    const response = await apiService.getRequest(url);
    if (response && response.data) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error('Unexpected API response structure');
    }
  } catch (error) {
    console.log(error)
    throw new Error(error.message || 'Failed to register');
  }
};

const delete_media_player = async (media_id) => {
  const url = `/public/players/remove-media/${media_id}`;
  
  try {
    const response = await apiService.deleteRequest(url);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update post');
  }
};

const delete_media_coache = async (media_id) => {
  const url = `/public/coaches/remove-media/${media_id}`;
  
  try {
    const response = await apiService.deleteRequest(url);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update post');
  }
};
  return {
    get_player,
    get_coache,
    get_business_user,
    get_business,
    get_scool,
    get_user_profile,
    delete_media_player,
    delete_media_coache
  };


}


export default createPublicService;
