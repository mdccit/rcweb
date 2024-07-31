// export const login = async (email, password) => {
//   const url = `${process.env.NUXT_PUBLIC_API_URL}/auth/login`
//   const headers = {
//     'access_key': process.env.ACCESS_KEY,
//     'lang': process.env.DEFAULT_LANG,
//     'Content-Type': 'application/json',
//   }

//   // Simulate a successful login response
//   const response = {
//     status: 200,
//     ok: true,
//     json: async () => ({
//       status: 200,
//       message: "User Login Successful",
//       display_message: "User Login Successful",
//       data: {
//         token: "mocked_token_12345"
//       }
//     })
//   }

//   if (!response.ok) {
//     const error = await response.json()
//     throw new Error(error.message || 'Failed to login')
//   }

//   return await response.json()
// }

export const login = async (email, password) => {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminUsername && password === adminPassword) {
    return {
      status: 200,
      message: "User Login Successful",
      display_message: "User Login Successful",
      data: {
        token: "mocked_token_12345"
      }
    }
  } else {
    return {
      status: 401,
      message: "Invalid username or password",
      display_message: "Invalid username or password"
    }
  }
}

