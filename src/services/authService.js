export const login = async (email, password) => {
  const url = `${process.env.NUXT_PUBLIC_API_URL}/auth/login`
  const headers = {
    'access_key': process.env.ACCESS_KEY,
    'lang': process.env.DEFAULT_LANG,
    'Content-Type': 'application/json',
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to login')
  }

  return await response.json()
}
