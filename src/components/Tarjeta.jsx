import { useEffect, useRef } from 'react'

// Hace visible el elemento con una animación suave cuando entra en pantalla
export function useAparecer() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// Caja base del bento grid
export default function Tarjeta({ as: Etiqueta = 'article', className = '', children, ...props }) {
  const ref = useAparecer()
  return (
    <Etiqueta
      ref={ref}
      className={`reveal rounded-3xl border border-borde bg-white p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-[box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgb(29_78_216/0.25)] ${className}`}
      {...props}
    >
      {children}
    </Etiqueta>
  )
}

export function TituloTarjeta({ icono: Icono, children, className = '' }) {
  return (
    <h2 className={`mb-4 flex items-center gap-2 font-mono text-xs font-medium tracking-wider text-suave uppercase ${className}`}>
      {Icono && <Icono className="size-4 text-marca" aria-hidden="true" />}
      {children}
    </h2>
  )
}
