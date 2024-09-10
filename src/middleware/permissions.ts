// import { useUserStore } from '~/stores/userStore';

// export default defineNuxtRouteMiddleware((to, from) => {
//   const userStore = useUserStore();

//   // Initialize user from localStorage if not already done
//   if (!userStore.user && process.client) {
//     userStore.initializeUser();
//   }

//   // Check if user is null or token is missing
//   if (!userStore.isLoggedIn || !userStore.token || !userStore.user) {
//     console.log('User is not authenticated. Clearing user data and redirecting to login.');

//     // // Clear user data
//     // userStore.clearUser();

//     // // Redirect to login page
//     // return navigateTo('/login');
//   }

//   // Access user's roles from the store (ensure userStore.user is not null)
//   const userRoles = userStore.roles || [];

//   // Get required roles from the page's meta
//   const requiredRoles = to.meta.roles || [];

//   // Debug logging
//   console.log('User roles from store:', userRoles);
//   console.log('Required roles for the route:', requiredRoles);

//   // If no roles are required, allow access
//   if (requiredRoles.length === 0) {
//     console.log('No roles required, allowing access.');
//     return;
//   }

//   // Check if user has the required role(s)
//   const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
//   console.log('Does user have required role?', hasRequiredRole);

//   // If the user does not have the required role, redirect to the unauthorized page
//   if (!hasRequiredRole) {
//     console.log('User does not have the required roles. Redirecting to unauthorized.');
//     return navigateTo('/unauthorized');
//   }
// });
