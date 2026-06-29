/**
 * Logo visual del Homebanking Alfin.
 * Usa el PNG ubicado en public/assets/homebanking/alfin-logo.png.
 * Se mantiene el mismo componente y las mismas props para no afectar rutas ni lógica.
 */
export default function Logo({
  size = 44,
  wordmark = true,
  variant = 'dark',
  subtitle = 'BANCA DIGITAL',
}) {
  const textColor = variant === 'light' ? '#ffffff' : '#ff4b1f'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.82)' : '#7b1fa2'
  const nameSize = Math.round(size * 0.42)
  const subSize = Math.max(9, Math.round(size * 0.22))

  return (
    <span className="alfin-logo" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <img
        src="/assets/homebanking/alfin-logo.png"
        alt="Alfin Banco"
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          display: 'block',
          borderRadius: '50%',
          flexShrink: 0,
        }}
      />

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 900,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.6px',
            }}
          >
            Alfin Banco
          </span>
          {subtitle && (
            <span
              style={{
                fontSize: subSize,
                fontWeight: 800,
                color: subColor,
                letterSpacing: '1.4px',
              }}
            >
              {subtitle}
            </span>
          )}
        </span>
      )}
    </span>
  )
}
