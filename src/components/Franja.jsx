import { herramientasFranja } from '../data/contenido'

function Fila({ items, className, estilo }) {
  // Se duplica la lista para que el desplazamiento infinito no tenga cortes
  const doble = [...items, ...items]
  return (
    <div className={`flex w-max ${className}`}>
      {doble.map((item, i) => (
        <span key={i} className={`flex items-center gap-6 px-3 font-display text-3xl tracking-wide uppercase sm:text-5xl ${estilo}`}>
          {item}
          <span className="text-xl text-cielo sm:text-3xl" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  )
}

// Dos franjas cruzadas que se desplazan solas: herramientas y lo que hago
export default function Franja({ t }) {
  return (
    <section className="relative -my-4 overflow-hidden py-14" aria-label={herramientasFranja.join(', ')}>
      <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[2.5deg] bg-marca py-4" aria-hidden="true">
        <Fila items={t.franja} className="franja-inversa" estilo="contorno-claro" />
      </div>
      <div className="relative -rotate-2 bg-noche py-5 shadow-[0_20px_50px_-20px_rgb(12_26_61/0.6)]" aria-hidden="true">
        <Fila items={herramientasFranja} className="franja" estilo="text-white" />
      </div>
    </section>
  )
}
