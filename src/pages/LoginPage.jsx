import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { CreditCard, Lock, LogIn, ArrowLeft, ShieldCheck, Clock, Smartphone } from 'lucide-react'
import { useHBAuth } from '../hooks/useHBAuth.js'
import { extractError } from '../utils/format.js'
import Alert from '../components/ui/Alert.jsx'
import Logo from '../components/ui/Logo.jsx'
import ImageSlot from '../components/ui/ImageSlot.jsx'

export default function LoginPage() {
  const { login, isAuthenticated } = useHBAuth()
  const navigate = useNavigate()
  const location = useLocation()
  // El backend /auth/login recibe exactamente: { username, password }.
  const [username, setUsername] = useState(location.state?.tarjeta || '')
  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // Si ya hay sesión, va directo a la banca.
  useEffect(() => {
    if (isAuthenticated) navigate('/inicio', { replace: true })
  }, [isAuthenticated, navigate])

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const usernameLimpio = username.trim()
    const passwordLimpio = password.trim()

    if (!usernameLimpio || !passwordLimpio) {
      setError('Ingresa tu usuario y clave de Internet.')
      return
    }

    setLoading(true)
    try {
      // El DNI se muestra solo visualmente. No se envía: el backend solo espera username + password.
      await login(usernameLimpio, passwordLimpio)
      navigate('/inicio', { replace: true })
    } catch (err) {
      setError(extractError(err, 'No se pudo iniciar sesión.'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="hb-login-bg alfin-login-bg">
      <span className="alfin-floating-orb orb-one" />
      <span className="alfin-floating-orb orb-two" />
      <span className="alfin-floating-orb orb-three" />
      <div className="alfin-login-shell">
        <div className="alfin-login-copy">
          <span className="alfin-login-kicker">Banca en línea</span>
          <h1>Entra a tu banca digital de forma segura</h1>
          <p>Consulta saldos, movimientos, pagos y préstamos con una interfaz clara y moderna.</p>
          <ImageSlot
            className="alfin-login-art"
            src="/assets/homebanking/login-seguro.png"
            alt="Seguridad digital"
            label="Ilustración de acceso seguro"
          />
        </div>

        <div className="hb-login-card alfin-login-card">
          <div className="hb-login-franja" />
          <div className="hb-login-head" style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
            <Logo size={48} variant="dark" subtitle="BANCA EN LÍNEA" />
          </div>
          <p style={{ textAlign: 'center', color: 'var(--hb-muted)', fontSize: 13, margin: '0 0 22px' }}>
            Ingresa con tu usuario, DNI y clave de Internet
          </p>

          <Alert tipo="error">{error}</Alert>

          <form onSubmit={onSubmit}>
            <div className="hb-field">
              <label htmlFor="username">Usuario</label>
              <div style={{ position: 'relative' }}>
                <CreditCard size={18} style={iconStyle} />
                <input
                  id="username"
                  className="hb-input"
                  style={{ paddingLeft: 40 }}
                  placeholder="Ej. cli000002"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                  required
                />
              </div>
            </div>

            <div className="hb-field">
              <label htmlFor="dni">DNI</label>
              <div style={{ position: 'relative' }}>
                <CreditCard size={18} style={iconStyle} />
                <input
                  id="dni"
                  className="hb-input"
                  style={{ paddingLeft: 40 }}
                  placeholder="Ej. 11200001"
                  autoComplete="off"
                  inputMode="numeric"
                  maxLength={8}
                  value={dni}
                  onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
                />
              </div>
            </div>

            <div className="hb-field">
              <label htmlFor="password">Clave de Internet</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={iconStyle} />
                <input
                  id="password"
                  type="password"
                  className="hb-input"
                  style={{ paddingLeft: 40 }}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="hb-btn" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
              <LogIn size={18} />
              {loading ? 'Ingresando…' : 'Ingresar'}
            </button>
          </form>

          <p className="hb-login-hint">
            El DNI es visual. El backend consume solo usuario y clave, igual que Swagger.
          </p>

          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--hb-muted)', fontSize: 13 }}>
              <ArrowLeft size={15} /> Volver al inicio
            </Link>
          </div>
          <div className="alfin-login-trust">
            <span><ShieldCheck size={15} /> Acceso protegido</span>
            <span><Clock size={15} /> Consulta rápida</span>
            <span><Smartphone size={15} /> Banca digital</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const iconStyle = {
  position: 'absolute',
  left: 12,
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#9ca3af',
  pointerEvents: 'none',
}
