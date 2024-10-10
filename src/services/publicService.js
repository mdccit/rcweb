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
const get_parent= async (slug) => {
  const url = `/public/parents/${slug}`;
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

const upload_parent_cover_photo = async (file, user_slug) => {

  const url = `/public/parents/upload-cover-picture/${user_slug}`;
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

const delete_media_parent = async (media_id) => {
  const url = `/public/parents/remove-media/${media_id}`;
  
  try {
    const response = await apiService.deleteRequest(url);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update post');
  }
};

const upload_parent_profile_photo = async (file, user_slug) => {

  const url = `/public/parents/upload-profile-picture/${user_slug}`;
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

const update_parent_basic_info = async (request_body) => {

  const url = `/public/parents/update-basic-info/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update');
  }
};

const update_parent_bio = async (request_body) => {

  const url = `/public/parents/update-bio/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update');
  }
};

const update_parent_info = async (request_body) => {

  const url = `/public/parents/update-contact-info/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update');
  }
};

const upload_parent_media = async (formData) => {
  // Extract user_slug from the formData to build the URL
  const userSlug = formData.get('user_slug');

  // Ensure userSlug is present
  if (!userSlug) {
    throw new Error('User slug is missing from formData.');
  }

  const url = `/public/parents/upload-media/${userSlug}`;

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
const add_parent_child = async (request_body) => {

  const url = `/public/parents/child/add-new/${request_body.user_slug}`;
  const body = request_body;
console.log(body)
  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update');
  }
};

const update_parent_child = async (request_body) => {
  const url = `/public/parents/child/update/${request_body.user_id}`;
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


const upload_school_cover_photo = async (file, school_slug) => {

  const url = `/public/schools/upload-cover-picture/${school_slug}`;
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

const upload_school_profile_picture = async (file, school_slug) => {

  const url = `/public/schools/upload-profile-picture/${school_slug}`;
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


const upload_school_media = async (file, school_slug) => {

  const url = `/public/schools/upload-media/${school_slug}`;
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

const delete_school_media = async (request_body) => {

  const url = `/public/schools/remove-media/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response; // Pass the full response for further handling
    } else {
      throw new Error(error.message || 'Failed to upload media');
    }
  }
};

const update_school_bio = async (request_body) => {

  const url = `/public/schools/update-bio/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response; // Pass the full response for further handling
    } else {
      throw new Error(error.message || 'Failed to upload media');
    }
  }
};

const update_school_basic_info = async (request_body) => {

  const url = `/public/schools/update-basic-info/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response; // Pass the full response for further handling
    } else {
      throw new Error(error.message || 'Failed to upload media');
    }
  }
};

const school_add_new_academic = async (request_body) => {

  const url = `/public/schools/add-new-academic/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response; // Pass the full response for further handling
    } else {
      throw new Error(error.message || 'Failed to upload media');
    }
  }
};

const school_remove_academic = async (request_body) => {

  const url = `/public/schools/remove-academic/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response; // Pass the full response for further handling
    } else {
      throw new Error(error.message || 'Failed to upload media');
    }
  }
};

const update_school_tennis_info = async (request_body) => {

  const url = `/public/schools/update-tennis-info/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response; // Pass the full response for further handling
    } else {
      throw new Error(error.message || 'Failed to upload media');
    }
  }
};

const update_school_status_info = async (request_body) => {

  const url = `/public/schools/update-status-info/${request_body.user_slug}`;
  const body = request_body;

  try {
    const response = await apiService.putRequest(url, body);
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response; // Pass the full response for further handling
    } else {
      throw new Error(error.message || 'Failed to upload media');
    }
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
    update_business_bio,
    get_school,
    get_parent,
    upload_parent_cover_photo,
    delete_media_parent,
    upload_parent_profile_photo,
    update_parent_basic_info,
    update_parent_bio,
    update_parent_info,
    upload_parent_media,
    add_parent_child,
    update_parent_child,
    update_school_status_info,
    update_school_tennis_info,
    school_remove_academic,
    school_add_new_academic,
    update_school_basic_info,
    update_school_bio,
    delete_school_media,
    upload_school_media,
    upload_school_profile_picture,
    upload_school_cover_photo,
    delete_media_player,
    delete_media_coache

}
}


export default createPublicService;
