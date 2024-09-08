import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

export function handleError(error, errors, notificationMessage, notification_type, showNotification, loading) {
    // Stop loading spinner
    loading.value = false;
    const userStore = useUserStore(); // Access user store
    const router = useRouter(); // Access router
    const token = userStore.token; // Get token from store instead of localStorage

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
        // Call the logout API and wait for the result
        try {
            const response = logout({ bearer_token: token });

            // If the logout was successful, clear user data and redirect
            if (response.status === 200) {
                userStore.clearUser(); // Clear user from store
                router.push('/login'); // Redirect to login page
            } else {
                console.error('Logout failed.');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
        return;
    }
}
