import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'motion/react'

const SUAVE = [0.22, 1, 0.36, 1]

// Aparece subiendo suavemente cuando entra en pantalla
export function Aparecer({ as = 'div', delay = 0, y = 28, className = '', children, ...props }) {
  const Componente = motion[as]
  return (
    <Componente
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: SUAVE, delay }}
      className={className}
      {...props}
    >
      {children}
    </Componente>
  )
}

// Revela un texto palabra por palabra, cada una saliendo desde abajo de una máscara
export function TextoRevelado({ texto, className = '', delay = 0, alCargar = false }) {
  const palabras = texto.split(' ')
  const disparo = alCargar
    ? { animate: 'visible' }
    : { whileInView: 'visible', viewport: { once: true, amount: 0.6 } }
  return (
    <motion.span
      className={className}
      initial="oculto"
      {...disparo}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={texto}
    >
      {palabras.map((p, i) => (
        // El relleno superior deja espacio a las tildes (Á, Í) para que la máscara no las corte
        <span key={i} className="-mt-[0.18em] inline-block overflow-hidden pt-[0.18em] pb-[0.08em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{ oculto: { y: '110%' }, visible: { y: 0 } }}
            transition={{ duration: 0.8, ease: SUAVE }}
          >
            {p}
            {i < palabras.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

// Número que cuenta desde 0 cuando aparece en pantalla
export function Contador({ numero, decimales = 0, sufijo = '', className = '' }) {
  const ref = useRef(null)
  const visto = useInView(ref, { once: true, amount: 0.6 })
  const reducido = useReducedMotion()
  const final = numero.toFixed(decimales) + sufijo

  useEffect(() => {
    const el = ref.current
    if (!el || !visto) return
    if (reducido) {
      el.textContent = final
      return
    }
    const control = animate(0, numero, {
      duration: 1.6,
      ease: SUAVE,
      onUpdate: (v) => { el.textContent = v.toFixed(decimales) + sufijo },
    })
    return () => control.stop()
  }, [visto, numero, decimales, sufijo, reducido, final])

  return <span ref={ref} className={className}>{final}</span>
}

// Etiqueta pequeña de sección: "01 — Sobre mí"
export function EtiquetaSeccion({ numero, children, clara = false }) {
  return (
    <Aparecer y={12} className={`mb-4 flex items-center gap-3 font-mono text-xs font-medium tracking-[0.18em] uppercase ${clara ? 'text-sky-200' : 'text-marca'}`}>
      <span>{numero}</span>
      <span className={`h-px w-10 ${clara ? 'bg-sky-200/60' : 'bg-marca/40'}`} aria-hidden="true" />
      <span>{children}</span>
    </Aparecer>
  )
}
