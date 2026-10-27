import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { EtiquetaSeccion, TextoRevelado } from './Movimiento'

// "Lo que hago": cuatro servicios numerados que se pintan de azul al pasar el mouse
export default function Servicios({ t }) {
  const s = t.servicios
  return (
    <section id="lo-que-hago" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <EtiquetaSeccion numero="01">{s.etiqueta}</EtiquetaSeccion>
      <h2 className="max-w-3xl font-display text-[clamp(2.6rem,7vw,5rem)] leading-[0.95] text-tinta uppercase">
        <TextoRevelado texto={s.titulo} />
      </h2>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {s.lista.map((item, i) => (
          <motion.li
            key={item.titulo}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[2rem] border border-borde bg-white p-6 transition-colors duration-500 hover:border-marca hover:bg-marca"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-6xl leading-none text-marca/15 transition-colors duration-500 group-hover:text-white/20">
                #{String(i + 1).padStart(2, '0')}
              </span>
              <span className="grid size-10 place-items-center rounded-full border border-borde text-tinta transition-all duration-500 group-hover:rotate-45 group-hover:border-white/30 group-hover:text-white">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </div>
            <h3 className="mt-auto text-xl font-bold text-tinta transition-colors duration-500 group-hover:text-white">{item.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-suave transition-colors duration-500 group-hover:text-blue-100">{item.texto}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {item.herramientas.map((h) => (
                <li key={h} className="rounded-full bg-fondo px-2.5 py-1 font-mono text-[11px] text-slate-600 transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                  {h}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
