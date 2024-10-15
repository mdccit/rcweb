const createAdminService = (apiService) => {
  const new_user_register = async (request_body) => {
    const url = "/admin/user-register";
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      if (error) {
        if (error.response) {
          throw error.response; // Pass the full response for further handling
        } else {
          throw new Error(error.message || "Failed to featch user");
        }
      }
    }
  };

  const user_update = async (request_body) => {
    const url = `/admin/user-update/${request_body.user_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to update");
    }
  };

  const list_users = async (role, lasteenAt, emailVerified) => {
    let url = "";
    if (role == 1) {
      url = `/admin/users?is_email_verified=${emailVerified}&last_seen_at=${lasteenAt}`;
    } else {
      url = `/admin/users?is_email_verified=${emailVerified}&last_seen_at=${lasteenAt}&user_role=${role}`;
    }

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data && response.data.dataSets) {
        return response.data.dataSets;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const get_user_details = async (user_id) => {
    const url = `/admin/users/${user_id}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const list_schools = async (current_page = "", page = 1, per_page_items = 5, data) => {
    current_page = "";
    const newData = {
      role: data.role ?? "",
      admin: data.admin ?? "",
      govId: data.govId ?? "",
      coordLat: data.coordLat ?? "",
    };

    const url = `/admin/schools?page=${page}&per_page_items=${per_page_items}&has_admins=${newData.admin}&is_verified=${newData.role}&has_coordinates=${newData.coordLat}&is_connected_to_school=${newData.govId}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data.dataSets) {
        return response.data.dataSets;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to retrieve schools");
    }
  };

  const school_register = async (request_body) => {
    const url = "/admin/school-register";
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || "Failed to login");
      }
    }
  };

  const school_update = async (request_body) => {
    const url = `/admin/school-update/${request_body.school_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to update");
    }
  };

  const list_school_staff = async (school_id) => {
    const url = `/admin/schools/users/${school_id}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to retrieve businesses");
    }
  };

  const get_school_details = async (user_id) => {
    const url = `/admin/schools/${user_id}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to get details");
    }
  };

  const list_business = async (page = 1, per_page_items = 10, hasAdmin) => {
    const url = `/admin/businesses?page=${page}&per_page_items=${per_page_items}&has_admins=${hasAdmin}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data.dataSets) {
        return response.data.dataSets;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to retrieve businesses");
    }
  };

  const get_business_details = async (business_id) => {
    const url = `/admin/businesses/${business_id}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to get details");
    }
  };

  const business_register = async (request_body) => {
    const url = "/admin/business-register";
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response to be handled in the frontend
      } else {
        throw new Error(error.message || "Failed to login");
      }
    }
  };

  const business_update = async (request_body) => {
    const url = `/admin/business-update/${request_body.business_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to update");
    }
  };

  const get_business_members = async (business_id) => {
    const url = `/admin/businesses/users/${business_id}`;

    try {
      const response = await apiService.getRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to retrieve businesses");
    }
  };

  const search_business_users = async (business_id, page, per_page_items, search_key = "") => {
    // Use 'let' to allow modification of the URL string
    let url = `/admin/businesses/search-users/${business_id}?page=${page}&per_page_items=${per_page_items}`;

    // Add search_key to URL only if it's not an empty string
    if (search_key) {
      url += `&search_key=${encodeURIComponent(search_key)}`;
    }

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to retrieve businesses");
    }
  };

  const add_business_user = async (request_body) => {
    const url = "/admin/businesses/add-user";
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const add_school_user = async (request_body) => {
    const url = "/admin/schools/add-user";
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const get_player_details = async (user_id) => {
    const url = `/admin/player-get/${user_id}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data.user_profile_info) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const player_update = async (user_id, request_body) => {
    const url = `/admin/player-update/${user_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to update");
    }
  };

  const user_session_delete = async (user_id) => {
    const url = `/admin/user-session-delete/${user_id}`;
    try {
      const response = await apiService.deleteRequest(url);

      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const user_delete = async (user_id) => {
    const url = `/admin/user-delete/${user_id}`;

    try {
      const response = await apiService.deleteRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const school_delete = async (school_id) => {
    const url = `/admin/schools/${school_id}`;

    try {
      const response = await apiService.deleteRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const business_delete = async (business_id) => {
    const url = `/admin/businesses/${business_id}`;

    try {
      const response = await apiService.deleteRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const morderation_all = async (status) => {
    const url = `/admin/morderation-get-all?status=${status}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data && response.data.dataSets) {
        return response.data.dataSets;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };
  const morderation_get = async (morderation_id) => {
    const url = `/admin/morderation-get/${morderation_id}`;
    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const morderation_comments = async (morderation_id) => {
    const url = `/admin/morderation-comment-get-all/${morderation_id}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const morderation_close = async (morderation_id, request_body) => {
    const url = `/admin/morderation-close/${morderation_id}`;
    const body = request_body;
    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const morderation_reopen = async (morderation_id, request_body) => {
    const url = `/admin/morderation-reopen/${morderation_id}`;
    const body = request_body;
    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const morderation_delete = async (morderation_id) => {
    const url = `/admin/morderation-delete/${morderation_id}`;

    try {
      const response = await apiService.deleteRequest(url);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const morderation_comment_add = async (request_body) => {
    const url = "/admin/morderation-comment-create";
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const morderation_approve = async (morderation_id, request_body) => {
    const url = `/admin/morderation-approve/${morderation_id}`;
    const body = request_body;
    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const morderation_logs = async (morderation_id) => {
    const url = `/admin/morderation-log/${morderation_id}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const search_school_users = async (school_id, page, per_page_items, search_key = "") => {
    // Build the base URL
    let url = `/admin/schools/search-users/${school_id}?page=${page}&per_page_items=${per_page_items}`;

    // Add search_key to URL only if it's not an empty string
    if (search_key) {
      url += `&search_key=${encodeURIComponent(search_key)}`;
    }

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to retrieve businesses");
    }
  };

  const morderation_all_open_count = async () => {
    const url = `/admin/morderation-open-count`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const school_profile = async (school_id, profile_picture) => {
    const url = `/admin/schools/upload-profile-picture/${school_id}`;
    const formData = new FormData();
    if (profile_picture) {
      formData.append("file", profile_picture);
    } else {
      throw new Error("No file selected");
    }
    try {
      const response = await apiService.postMedia(url, formData);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error.message || "Failed to register");
    }
  };

  const school_cover = async (school_id, cover_image) => {
    const url = `/admin/schools/upload-cover-picture/${school_id}`;
    const formData = new FormData();
    if (cover_image) {
      formData.append("file", cover_image);
    } else {
      throw new Error("No file selected");
    }
    try {
      const response = await apiService.postMedia(url, formData);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const business_profile = async (business_id, profile_picture) => {
    const url = `/admin/businesses/upload-profile-picture/${business_id}`;
    const formData = new FormData();
    if (profile_picture) {
      formData.append("file", profile_picture);
    } else {
      throw new Error("No file selected");
    }
    try {
      const response = await apiService.postMedia(url, formData);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const business_cover = async (business_id, cover_image) => {
    const url = `/admin/businesses/upload-cover-picture/${business_id}`;
    const formData = new FormData();
    if (cover_image) {
      formData.append("file", cover_image);
    } else {
      throw new Error("No file selected");
    }
    try {
      const response = await apiService.postMedia(url, formData);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const user_profile = async (user_id, profile_picture) => {
    const url = `/admin/users/upload-profile-picture/${user_id}`;
    const formData = new FormData();
    if (profile_picture) {
      formData.append("file", profile_picture);
    } else {
      throw new Error("No file selected");
    }
    try {
      const response = await apiService.postMedia(url, formData);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const user_profile_delete = async (media_id) => {
    const url = `/admin/users/remove-media/${media_id}`;
    try {
      const response = await apiService.deleteRequest(url);

      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const upload_user_media = async (formData) => {
    // Extract user_slug from the formData to build the URL
    const userId = formData.get("user_id");

    // Ensure userSlug is present
    if (!userId) {
      throw new Error("User slug is missing from formData.");
    }

    const url = `/admin/users/upload-media/${userId}`;

    try {
      // Send the FormData directly as the body
      const response = await apiService.postMedia(url, formData); // No need to set Content-Type, the browser handles it

      return response;
    } catch (error) {
      // Handle error response from the API
      if (error.response) {
        throw error.response; // Pass the full response for further handling
      } else {
        throw new Error(error.message || "Failed to upload media");
      }
    }
  };

  const upload_school_media = async (formData) => {
    // Extract user_slug from the formData to build the URL
    const schoolId = formData.get("school_id");

    // Ensure userSlug is present
    if (!schoolId) {
      throw new Error("School Id is missing from formData.");
    }

    const url = `/admin/schools/upload-media/${schoolId}`;

    try {
      // Send the FormData directly as the body
      const response = await apiService.postMedia(url, formData); // No need to set Content-Type, the browser handles it

      return response;
    } catch (error) {
      // Handle error response from the API
      if (error.response) {
        throw error.response; // Pass the full response for further handling
      } else {
        throw new Error(error.message || "Failed to upload media");
      }
    }
  };

  const school_media_delete = async (media_id) => {
    const url = `/admin/schools/remove-media/${media_id}`;
    try {
      const response = await apiService.deleteRequest(url);

      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const upload_business_media = async (formData) => {
    // Extract user_slug from the formData to build the URL
    const businessId = formData.get("business_id");

    // Ensure userSlug is present
    if (!businessId) {
      throw new Error("Business Id is missing from formData.");
    }

    const url = `/admin/businesses/upload-media/${businessId}`;

    try {
      // Send the FormData directly as the body
      const response = await apiService.postMedia(url, formData); // No need to set Content-Type, the browser handles it

      return response;
    } catch (error) {
      // Handle error response from the API
      if (error.response) {
        throw error.response; // Pass the full response for further handling
      } else {
        throw new Error(error.message || "Failed to upload media");
      }
    }
  };

  const business_media_delete = async (media_id) => {
    const url = `/admin/businesses/remove-media/${media_id}`;
    try {
      const response = await apiService.deleteRequest(url);

      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const list_transcripts = async (search, status) => {
    const url = `/admin/transcript/get-transcripts?search_key=${search}&&status=${status}`;

    try {
      const response = await apiService.getRequest(url);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const transcript_delete = async (transcript_id) => {
    const url = `/admin/transcript/delete-transcript/${transcript_id}`;

    try {
      const response = await apiService.deleteRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
    }
  };

  const transcript_update = async (transcript_id, data) => {
    const url = `/admin/transcript/update-transcript/${transcript_id}`;

    try {
      const response = await apiService.putRequest(url, data);
      if (response) {
        return response;
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to register");
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
    business_update,
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
    morderation_logs,
    morderation_all_open_count,
    school_profile,
    school_cover,
    business_profile,
    business_cover,
    user_profile,
    user_profile_delete,
    upload_user_media,
    upload_school_media,
    school_media_delete,
    upload_business_media,
    business_media_delete,
    transcript_delete,
    list_transcripts,
    transcript_update,
  };
};

export default createAdminService;
