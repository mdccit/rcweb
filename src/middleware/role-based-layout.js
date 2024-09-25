import { useNuxtApp} from '#app';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();
  const $userService = nuxtApp.$publicService;

  // Get the slug from the route
  const slug = to.params.slug;

  // Fetch the user profile based on the slug
  const response = await $userService.get_user_profile(slug);
  const roleId = response.user_basic_info?.user_role_id || null; // Default roleId is 4

  // Determine the layout based on the user's roleId
  let layout = 'profile-without-cover'; // Default layout
  switch (roleId) {
    case 4:
      layout = 'profile-without-cover';  // Layout for roleId 4
      break;
    case 5:
      layout = 'profile-without-cover';  // Layout for roleId 5
      break;
    default:
      layout = 'profile-without-cover';  // Default layout
  }

  // Set the layout in the route's meta
  to.meta.layout = layout;
});

