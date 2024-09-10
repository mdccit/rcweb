const createFeedService = (apiService) => {

  const list_posts = async (request_body) => {
    const url = `/feed/posts?sortBy=updated_at`;
    const body = request_body;

    try {
      const response = await apiService.getRequest(url, body);
      if (response && response.message) {
        return response.message;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const create_post = async (request_body) => {
    const url = '/feed/post';
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };


  const update_post = async (post_id, request_body) => {
    const url = `/feed/posts/${post_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update post');
    }
  };

  const delete_post = async (post_id) => {
    const url = `/feed/posts/${post_id}`;
    
    try {
      const response = await apiService.deleteRequest(url);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update post');
    }
  };

  const get_all_post_comment = async (post_id) => {
    const url = `/feed/postcomments/${post_id}`;
    const body = request_body;

    try {
      const response = await apiService.getRequest(url, body);
      return response.message;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const get_comment = async (comment_id, request_body) => {
    const url = `/feed/comments/${comment_id}`;
    const body = request_body;

    try {
      const response = await apiService.getRequest(url, body);
      return response.message;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };



  const create_comment = async (post_id, request_body) => {
    const url = `/feed/posts/${post_id}/comment`;
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const update_comment = async (comment_id, request_body) => {
    const url = `/feed/comments/${comment_id}`;
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update post');
    }
  };

  const delete_comment = async (comment_id) => {
    const url = `/feed/comments/${comment_id}`;
    const body = '';

    try {
      const response = await apiService.deleteRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update post');
    }
  };

  const like_post = async (post_id, request_body) => {
    const url = `/feed/posts/${post_id}/like`;
    const body = request_body;

    try {
      const response = await apiService.postRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const unlike_post = async (post_id, request_body) => {
    const url = `/feed/posts/${post_id}/like`;
    const body = request_body;
    
    try {
      const response = await apiService.deleteRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update post');
    }
  };

  const get_single_post = async (post_id, request_body) => {
    const url = `/feed/posts/${post_id}`;
    const body = request_body;

    try {
      const response = await apiService.getRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update post');
    }
  };

  return {
    create_post,
    list_posts,
    update_post,
    delete_post,
    create_comment,
    update_comment,
    delete_comment,
    like_post,
    unlike_post,
    get_comment,
    get_all_post_comment,
    get_single_post

  };


}


export default createFeedService;
