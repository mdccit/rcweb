const createSubscriptionService = (apiService) => {


  const get_subscription = async () => {
    const url = `/subscription/show`;
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

  const get_stripe_payment_history = async () => {
    const url = `/subscription/stripe/payment-history`;
    try {
      const response = await apiService.getRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error || 'Failed to register');
    }
  };

  const get_customer_payment_methods = async () => {
    const url = `/subscription/stripe/customer-payment-methods`;
    try {
      const response = await apiService.getRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      throw new Error(error || 'Failed to register');
    }
  };

  const get_customer_active_payment_method = async () => {
    const url = `/subscription/stripe/customer-active-payment-method`;
    try {
      const response = await apiService.getRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response for further handling
      } else {
        throw new Error(error.message || ' Error in retrieve active payment method');
      }
    }
  };

  const cancel_subscription = async (request_body) => {
    const url = '/subscription/cancel';
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const delete_stripe_payment_method = async (payment_method_id) => {
    const url = `/subscription/remove-payment-method/${payment_method_id}`;
    try {
      const response = await apiService.deleteRequest(url);
      if (response) {
        return response;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      if (error.response) {
        throw error.response; // Pass the full response for further handling
      } else {
        throw new Error(error.message || 'Failed to remove payment method');
      }

    }
  };


  const stop_premium_cancellation = async (request_body) => {
    const url = '/subscription/stop_cancel';
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const update_default_payment_method = async (request_body) => {
    const url = '/subscription/set-default-payment-method';
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const add_new_card = async (request_body) => {
    const url = '/subscription/add-new-card';
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };

  const add_new_default_card = async (request_body) => {
    const url = '/subscription/add-new-default-card';
    const body = request_body;

    try {
      const response = await apiService.putRequest(url, body);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to register');
    }
  };




  return {
    get_subscription,
    get_stripe_payment_history,
    get_customer_payment_methods,
    get_customer_active_payment_method,
    cancel_subscription,
    delete_stripe_payment_method,
    stop_premium_cancellation,
    update_default_payment_method,
    add_new_card,
    add_new_default_card,
  };


}


export default createSubscriptionService;
