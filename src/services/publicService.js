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

  const get_business = async (business_slug) => {
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

  const get_school = async (school_slug) => {
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

  const get_user_profile = async (slug) => {
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

// const get_business= async (business_slug) => {
//   const url = `/public/businesses/${business_slug}`;
//   console.log(url)
//   try {
//     const response = await apiService.getRequest(url);
//     if (response && response.data) {
//       return response.data;
//     } else {
//       throw new Error('Unexpected API response structure');
//     }
//   } catch (error) {
//     console.log(error)
//     throw new Error(error.message || 'Failed to register');
//   }
// };

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

// const get_user_profile= async (slug) => {
//   const url = `/public/users/${slug}`;
//   try {
//     const response = await apiService.getRequest(url);
//     if (response && response.data) {
//       console.log(response.data);
//       return response.data;
//     } else {
//       throw new Error('Unexpected API response structure');
//     }
//   } catch (error) {
//     console.log(error)
//     throw new Error(error.message || 'Failed to register');
//   }
// };

const get_school_team= async (id) => {
  const url = `/public/school-team-get/${id}`;
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

const delete_school_team= async (id) => {
  const url = `/public/school-team-delete/${id}`;
  try {
    const response = await apiService.deleteRequest(url);
    return response;
  } catch (error) {
    console.log(error)
    throw new Error(error.message || 'Failed to register');
  }
};

const add_school_team= async (request_body) => {
  const url = '/public/school-team-add';
  const body = request_body;

  try {
    const response = await apiService.postRequest(url, body);
    return response;
  } catch (error) {
    throw new Error(error.response.display_message || 'Failed to register');
  }
};

const delete_school_user= async (id) => {
  const url = `/public/schools-user-delete/${id}`;
  try {
    const response = await apiService.deleteRequest(url);
    return response;
  } catch (error) {
    console.log(error)
    throw new Error(error.message || 'Failed to register');
  }
};

const upload_business_media = async (formData) => {
  // Extract user_slug from the formData to build the URL
  const businessSlug = formData.get('business_slug');

  // Ensure userSlug is present
  if (!businessSlug) {
    throw new Error('Business slug is missing from formData.');
  }

  const url = `/public/businesses/upload-media/${businessSlug}`;

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


const upload_business_profile_picture = async (file, businessSlug) => {

  const url = `/public/businesses/upload-profile-picture/${businessSlug}`;
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
const upload_business_cover_picture = async (file, businessSlug) => {

  const url = `/public/businesses/upload-cover-picture/${businessSlug}`;
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
const update_business_media_remove = async (request_body) => {

  const url = `/public/businesses/remove-media/${request_body.business_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update');
  }
};

const update_business_bio = async (request_body) => {

  const url = `/public/businesses/update-bio/${request_body.business_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update');
  }
};

const update_business_basic_info = async (request_body) => {

  const url = `/public/businesses/update-basic-info/${request_body.business_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update');
  }
};
  return {
    get_player,
    get_coache,
    get_business_user,
    get_business,
    get_scool,
    get_user_profile,
    get_school_team,
    add_school_team,
    delete_school_team,
    delete_school_user,
    upload_business_media,
    upload_business_profile_picture,
    upload_business_cover_picture,
    update_business_media_remove,
    update_business_basic_info,
    update_business_bio
  };


}


export default createPublicService;
