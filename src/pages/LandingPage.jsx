import { useNavigate } from 'react-router-dom'
import {
  CreditCard, Wallet, PiggyBank, Send, Smartphone, ShieldCheck,
  TrendingUp, Clock, MapPin, ArrowRight, Lock, BadgePercent, Briefcase, Sparkles, BarChart3, ReceiptText,
} from 'lucide-react'
import PublicHeader from '../components/layout/PublicHeader.jsx'
import PublicFooter from '../components/layout/PublicFooter.jsx'
import ImageSlot from '../components/ui/ImageSlot.jsx'

// Diseño visual alineado a Alfin: cálido, simple, naranja + morado.
const PRODUCTOS = [
  { icon: PiggyBank, color: '#ff5a1f', titulo: 'Cuenta de Ahorros', desc: 'Consulta saldos, movimientos y mantén tu dinero disponible desde tu banca en línea.' },
  { icon: Wallet, color: '#7b1fa2', titulo: 'Cuenta Sueldo', desc: 'Recibe tu sueldo y opera tus pagos frecuentes desde una experiencia simple.' },
  { icon: BadgePercent, color: '#ff8a00', titulo: 'Crédito de Consumo', desc: 'Solicita un préstamo, simula tus cuotas y revisa el estado de tu evaluación.' },
  { icon: Briefcase, color: '#8e24aa', titulo: 'Crédito Microempresa', desc: 'Financiamiento pensado para emprendedores, negocios y metas personales.' },
  { icon: Send, color: '#ff5a1f', titulo: 'Transferencias', desc: 'Mueve dinero entre tus propias cuentas de forma rápida y segura.' },
  { icon: CreditCard, color: '#6a1b9a', titulo: 'Tarjeta de Débito', desc: 'Controla tus operaciones y revisa tus movimientos desde el homebanking.' },
]

const BENEFICIOS = [
  { icon: Smartphone, titulo: 'Simple y digital', desc: 'Consulta tus productos y opera desde cualquier dispositivo.' },
  { icon: ShieldCheck, titulo: 'Seguro y controlado', desc: 'Acceso con credenciales y operaciones protegidas.' },
  { icon: Clock, titulo: 'Siempre disponible', desc: 'Saldos, pagos y solicitudes cuando lo necesites.' },
  { icon: MapPin, titulo: 'Hecho para clientes', desc: 'Flujo claro para ahorro, créditos, pagos y movimientos.' },
]

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="lp-page alfin-public">
      <PublicHeader />

      <section className="lp-hero alfin-hero">
        <div className="lp-hero-inner alfin-hero-inner">
          <div className="lp-hero-text">
            <span className="lp-hero-tag">Banca digital para clientes</span>
            <h1>Alcanza tu propósito con una banca simple</h1>
            <p>
              Revisa tus cuentas, paga tus cuotas, transfiere dinero y solicita préstamos
              desde una experiencia moderna, clara y segura.
            </p>
            <div className="lp-hero-actions">
              <button className="lp-btn lp-btn-light" onClick={() => navigate('/login')}>
                <Lock size={18} /> Ingresar a mi banca
              </button>
              <a className="lp-btn lp-btn-outline" href="#productos">
                Ver productos <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <ImageSlot
            className="alfin-hero-art"
            src="/assets/homebanking/hero-homebanking.png"
            alt="Cliente usando banca digital"
            label="Ilustración principal de banca digital"
          />
        </div>
      </section>

      <section className="lp-quickbar alfin-quickbar">
        <button className="lp-quick" onClick={() => navigate('/login')}><Wallet size={20} /> Ver saldos</button>
        <button className="lp-quick" onClick={() => navigate('/login')}><BadgePercent size={20} /> Solicitar préstamo</button>
        <button className="lp-quick" onClick={() => navigate('/login')}><Send size={20} /> Transferir</button>
        <button className="lp-quick" onClick={() => navigate('/login')}><CreditCard size={20} /> Pagar cuota</button>
      </section>


      <section className="alfin-experience">
        <div className="alfin-experience-copy">
          <span className="alfin-mini-label"><Sparkles size={15} /> Banca clara y moderna</span>
          <h2>Una experiencia más simple para tus clientes</h2>
          <p>Diseño preparado para mostrar cuentas, pagos y solicitudes con una presentación más limpia y profesional.</p>
        </div>
        <div className="alfin-experience-grid">
          <article className="alfin-experience-card">
            <ImageSlot
              className="alfin-mini-art"
              src="/assets/homebanking/transferencias.png"
              alt="Transferencias digitales"
              label="Ilustración de transferencias digitales"
            />
            <div><Send size={18} /><strong>Transferencias</strong><span>Flujo simple para mover dinero.</span></div>
          </article>
          <article className="alfin-experience-card">
            <ImageSlot
              className="alfin-mini-art"
              src="/assets/homebanking/pagos-cuotas.png"
              alt="Pagos y cuotas"
              label="Ilustración de pagos y cuotas"
            />
            <div><ReceiptText size={18} /><strong>Pagos y cuotas</strong><span>Vista amigable para operaciones.</span></div>
          </article>
          <article className="alfin-experience-card">
            <ImageSlot
              className="alfin-mini-art"
              src="/assets/homebanking/metricas-cliente.png"
              alt="Métricas del cliente"
              label="Ilustración de control visual"
            />
            <div><BarChart3 size={18} /><strong>Control visual</strong><span>Indicadores y movimientos destacados.</span></div>
          </article>
        </div>
      </section>

      <section className="lp-section" id="productos">
        <div className="lp-section-head">
          <h2>Productos para operar fácil</h2>
          <p>Todo lo principal del Homebanking en tarjetas claras y rápidas de entender.</p>
        </div>
        <div className="lp-products">
          {PRODUCTOS.map((p) => {
            const Icon = p.icon
            return (
              <article className="lp-product" key={p.titulo}>
                <span className="lp-product-icon" style={{ background: `${p.color}18`, color: p.color }}>
                  <Icon size={26} />
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
                <button className="lp-product-link" onClick={() => navigate('/login')}>
                  Ingresar <ArrowRight size={15} />
                </button>
              </article>
            )
          })}
        </div>
      </section>

      <section className="lp-promo alfin-promo">
        <div className="lp-promo-inner alfin-promo-inner">
          <div>
            <span className="lp-promo-tag"><TrendingUp size={15} /> Crédito digital</span>
            <h2>Solicita tu préstamo desde el Homebanking</h2>
            <p>El cliente registra su solicitud y el Core Bancario continúa con la evaluación, aprobación y desembolso.</p>
          </div>
          <ImageSlot
            className="alfin-promo-art"
            src="/assets/homebanking/credito-aprobado.png"
            alt="Solicitud de préstamo"
            label="Ilustración de crédito digital"
          />
          <button className="lp-btn lp-btn-light" onClick={() => navigate('/login')}>
            Solicitar ahora <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="lp-section" id="beneficios">
        <div className="lp-section-head">
          <h2>Una interfaz más cercana</h2>
          <p>Visual limpio, botones claros, cards redondeadas y colores cálidos tipo Alfin.</p>
        </div>
        <div className="lp-benefits">
          {BENEFICIOS.map((b) => {
            const Icon = b.icon
            return (
              <div className="lp-benefit" key={b.titulo}>
                <span className="lp-benefit-icon"><Icon size={24} /></span>
                <h3>{b.titulo}</h3>
                <p>{b.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
