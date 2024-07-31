export const login = async (email, password) => {
  const credentials = [
    { email: 'admin@example.com', password: 'admin', role: 'admin' },
    { email: 'player@example.com', password: 'player', role: 'player' },
    { email: 'parent@example.com', password: 'parent', role: 'parent' },
    { email: 'coach@example.com', password: 'coach', role: 'coach' },
    { email: 'business@example.com', password: 'business', role: 'business' },
  ];

  const user = credentials.find(cred => cred.email === email && cred.password === password);

  if (user) {
    return {
      status: 200,
      message: `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Login Successful`,
      display_message: `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Login Successful`,
      data: {
        role: user.role,
        token: `${user.role}_mocked_token_12345`
      }
    };
  } else {
    return {
      status: 401,
      message: "Invalid username or password",
      display_message: "Invalid username or password"
    };
  }
};
