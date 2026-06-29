import hbApi, { TOKEN_KEY, USER_KEY } from './hb_api.js'

/**
 * Login del CLIENTE.
 * Backend: POST /auth/login
 * Body exacto requerido: { username, password }
 */
export async function login(username, password) {
  const body = {
    username: String(username || '').trim(),
    password: String(password || '').trim(),
  }

  const { data } = await hbApi.post('/auth/login', body)
  const token = data.access_token
  const cliente = data.cliente || {}
  const user = {
    codcliente: cliente.codcliente ?? body.username,
    nombre: cliente.nombre ?? body.username,
    pkcliente: cliente.pkcliente,
  }
  return { token, user }
}

export function saveSession(token, user) {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

export function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}
