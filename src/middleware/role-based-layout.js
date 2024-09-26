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
  let layout = 'outer'; // Default layout
  switch (roleId) {
    case 4:
      layout = 'player-layout';  // Layout for roleId 4
      break;
    case 5:
      layout = 'coach-layout';  // Layout for roleId 5
      break;
    case 6:
      layout = 'business-user-layout';  // Layout for roleId 6
      break;
    default:
      layout = 'outer';  // Default layout
  }

  // Set the layout in the route's meta
  to.meta.layout = layout;
});

