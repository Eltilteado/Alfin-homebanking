import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

export default function ImageSlot({
  src,
  alt = '',
  className = '',
  label = 'Imagen decorativa',
}) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className={`asset-slot asset-slot-empty ${className}`} aria-label={label}>
        <div className="asset-orbit asset-orbit-a" />
        <div className="asset-orbit asset-orbit-b" />
        <div className="asset-glass-card">
          <ImageIcon size={34} strokeWidth={1.8} />
        </div>
        <div className="asset-mini-card asset-mini-card-a" />
        <div className="asset-mini-card asset-mini-card-b" />
      </div>
    )
  }

  return (
    <div className={`asset-slot has-image ${className}`}>
      <img src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />
    </div>
  )
}
