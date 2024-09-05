export default function ({ route, redirect }) {
  const userRole = localStorage.getItem('user_role');

  if (!userRole) {
    return redirect('/login'); // Redirect to login if user role is not set
  }

  const routeRole = route.meta[0]?.role; // Get the required role from the route meta

  if (routeRole && routeRole !== userRole) {
    // If the route requires a different role, redirect accordingly
    if (userRole === 'admin') {
      return redirect('/admin/dashboard');
    } else if (userRole === 'coach') {
      return redirect('/coach/dashboard');
    } else if (userRole === 'business') {
      return redirect('/business/dashboard');
    } else if (userRole === 'parent') {
      return redirect('/parent/dashboard');
    }
  }
}
