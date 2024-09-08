export function handleError(error, errors, notificationMessage, notification_type, showNotification, loading) {
    // Stop loading spinner
    loading.value = false;

    // Reset notification state before handling the new error
    notificationMessage.value = '';
    notification_type.value = '';
    showNotification.value = false;
  // Check if error.message is an object with key-value pairs
  if (typeof error.message === 'object' && !Array.isArray(error.message)) {
      // Assign validation messages to the respective fields
      for (const [field, messages] of Object.entries(error.message)) {
          errors.value[field] = messages; // Map error messages to the form fields
      }
  } else if (typeof error.message === 'string') {
      // If error.message is a string, show notification
      notificationMessage.value = error.message;
      notification_type.value = 'failure';
      showNotification.value = true;
  } else {
      // If it's neither an object nor a string, return early
      return;
  }
}
