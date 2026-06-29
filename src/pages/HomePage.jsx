import { useNavigate } from 'react-router-dom'
import {
  Wallet, CreditCard, Send, Receipt, FileText, FilePlus2,
  PiggyBank, ChevronRight, TrendingDown, TrendingUp, ShieldCheck, Clock3, BarChart3,
} from 'lucide-react'
import { useHBAuth } from '../hooks/useHBAuth.js'
import { useCuentas } from '../hooks/useCuentas.js'
import { useCreditos } from '../hooks/useCreditos.js'
import { simboloMoneda, toNumber } from '../utils/format.js'
import PageLayout from '../components/layout/PageLayout.jsx'
import ActionPanel from '../components/ui/ActionPanel.jsx'
import Card from '../components/ui/Card.jsx'
import Money from '../components/ui/Money.jsx'
import Badge from '../components/ui/Badge.jsx'
import Loader from '../components/ui/Loader.jsx'
import ImageSlot from '../components/ui/ImageSlot.jsx'

export default function HomePage() {
  const { user } = useHBAuth()
  const navigate = useNavigate()
  const { cuentas, loading: lc } = useCuentas('ahorro')
  const { creditos, loading: lk } = useCreditos()

  const totalAhorro = cuentas.reduce((s, c) => s + toNumber(c.saldo), 0)
  const totalDeuda = creditos.reduce((s, c) => s + toNumber(c.pago_pendiente), 0)

  const acciones = [
    { icon: Send, label: 'Transferir dinero', to: '/operaciones/transferencia' },
    { icon: Receipt, label: 'Pagar cuota', to: '/operaciones/pago-credito' },
    { icon: FileText, label: 'Pagar servicios', to: '/operaciones/pago-servicios' },
    { icon: FilePlus2, label: 'Solicitar préstamo', to: '/creditos/solicitar' },
  ]

  return (
    <PageLayout aside={<ActionPanel title="Operaciones frecuentes" items={acciones} />}>
      {/* Saludo visual */}
      <div className="bbva-hello alfin-dashboard-hero">
        <div className="alfin-dashboard-copy">
          <span className="alfin-dashboard-tag">Mi banca en línea</span>
          <h1>Hola {primerNombre(user?.nombre)}, ¿qué quieres hacer hoy?</h1>
          <p>Revisa tus cuentas, paga tus cuotas o solicita un préstamo desde un panel simple y seguro.</p>
        </div>
        <ImageSlot
          className="alfin-dashboard-art"
          src="/assets/homebanking/dashboard-cliente.png"
          alt="Dashboard del cliente"
          label="Ilustración de dashboard cliente"
        />
      </div>

      {/* KPIs */}
      <div className="bbva-kpis">
        <div className="bbva-kpi">
          <span className="bbva-kpi-ico" style={{ background: '#e2132b1a', color: 'var(--hb-red)' }}>
            <PiggyBank size={22} />
          </span>
          <div>
            <span className="bbva-kpi-label"><TrendingUp size={13} /> Total disponible</span>
            <Money className="bbva-kpi-val" value={totalAhorro} />
            <small>{cuentas.length} cuenta(s)</small>
          </div>
        </div>
        <div className="bbva-kpi">
          <span className="bbva-kpi-ico" style={{ background: '#00a9a51a', color: 'var(--hb-turquesa)' }}>
            <CreditCard size={22} />
          </span>
          <div>
            <span className="bbva-kpi-label"><TrendingDown size={13} /> Créditos por pagar</span>
            <Money className="bbva-kpi-val" value={totalDeuda} />
            <small>{creditos.length} crédito(s)</small>
          </div>
        </div>
      </div>


      <section className="alfin-dashboard-showcase">
        <article className="alfin-showcase-card alfin-showcase-main">
          <div>
            <span className="alfin-mini-label"><ShieldCheck size={15} /> Resumen protegido</span>
            <h2>Tu dinero en una vista más visual</h2>
            <p>Este bloque es solo presentación visual. Los datos principales siguen llegando desde tus hooks y servicios actuales.</p>
          </div>
          <ImageSlot
            className="alfin-showcase-art"
            src="/assets/homebanking/resumen-cliente.png"
            alt="Resumen del cliente"
              label="Ilustración de resumen financiero"
          />
        </article>
        <article className="alfin-showcase-card compact">
          <Clock3 size={22} />
          <strong>Próxima acción</strong>
          <span>Revisa pagos o movimientos recientes.</span>
        </article>
        <article className="alfin-showcase-card compact purple">
          <BarChart3 size={22} />
          <strong>Control mensual</strong>
          <span>Indicadores visuales para defender mejor.</span>
        </article>
      </section>

      {/* Cuentas resumidas */}
      <Card title="Cuentas de Ahorro" icon={<Wallet size={18} />}
        actions={<button className="bbva-link" onClick={() => navigate('/cuentas/ahorro')}>Ver todas <ChevronRight size={14} /></button>}>
        {lc ? <Loader text="Cargando cuentas…" /> : cuentas.length === 0 ? (
          <p className="bbva-empty">No registra cuentas de ahorro.</p>
        ) : (
          <ul className="bbva-prodlist">
            {cuentas.map((c) => (
              <li key={c.codcuentaahorro} onClick={() => navigate(`/cuentas/ahorro/${c.codcuentaahorro}/movimientos`)}>
                <div className="bbva-prod-info">
                  <strong>{c.codcuentaahorro}</strong>
                  <small>{c.tipo} · <Badge estado={c.estado} /></small>
                </div>
                <div className="bbva-prod-amt">
                  <Money value={c.saldo} simbolo={simboloMoneda(c.moneda)} />
                  <ChevronRight size={16} />
                </div>
              </li>
            ))}
            <li className="bbva-prodlist-total">
              <span>Saldo disponible total</span>
              <Money value={totalAhorro} className="bbva-money-strong" />
            </li>
          </ul>
        )}
      </Card>

      {/* Créditos resumidos */}
      <Card title="Préstamos" icon={<CreditCard size={18} />}
        actions={<button className="bbva-link" onClick={() => navigate('/cuentas/credito')}>Ver todos <ChevronRight size={14} /></button>}>
        {lk ? <Loader text="Cargando créditos…" /> : creditos.length === 0 ? (
          <p className="bbva-empty">No registra créditos vigentes.</p>
        ) : (
          <ul className="bbva-prodlist">
            {creditos.map((c) => (
              <li key={c.codcuentacredito} onClick={() => navigate(`/cuentas/credito/${c.codcuentacredito}/cuotas`)}>
                <div className="bbva-prod-info">
                  <strong>{c.codcuentacredito}</strong>
                  <small>Consumo · <Badge estado={c.calificacion || 'Normal'} tone={c.dias_atraso > 0 ? 'red' : undefined} /></small>
                </div>
                <div className="bbva-prod-amt">
                  <Money value={c.pago_pendiente} />
                  <ChevronRight size={16} />
                </div>
              </li>
            ))}
            <li className="bbva-prodlist-total">
              <span>Saldo pendiente total</span>
              <Money value={totalDeuda} className="bbva-money-strong" />
            </li>
          </ul>
        )}
      </Card>
    </PageLayout>
  )
}

function primerNombre(nombre) {
  if (!nombre) return 'Cliente'
  // El backend usa "Apellido, Nombre"; tomamos el nombre de pila si está.
  const parts = nombre.split(',')
  const np = (parts[1] || parts[0]).trim().split(/\s+/)[0]
  return np || 'Cliente'
}
