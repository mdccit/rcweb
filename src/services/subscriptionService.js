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
      throw new Error(error || 'Failed to register');
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

  const connection_accept = async (connection_id, request_body) => {
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
    get_subscription,
    connection_accept,
    get_stripe_payment_history,
    get_customer_payment_methods,
    get_customer_active_payment_method,
    cancel_subscription
  };


}


export default createSubscriptionService;
