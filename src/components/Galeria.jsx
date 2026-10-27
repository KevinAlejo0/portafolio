import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion } from 'motion/react'
import { EtiquetaSeccion, TextoRevelado } from './Movimiento'
import { galeria } from '../data/contenido'

// Celdas que ocupa cada foto según su "forma" (ver galeria en contenido.js)
const FORMAS = {
  grande: 'col-span-2 row-span-2',
  alta: 'lg:row-span-2',
}

// "Mi día a día": mosaico de fotos que se amplían al hacer clic
export default function Galeria({ t, idioma }) {
  const [abierta, setAbierta] = useState(null) // índice de la foto ampliada, o null
  const dialogo = useRef(null)

  useEffect(() => {
    const d = dialogo.current
    if (!d) return
    if (abierta !== null && !d.open) d.showModal()
    if (abierta === null && d.open) d.close()
  }, [abierta])

  if (galeria.length === 0) return null

  const total = galeria.length
  const mover = (paso) => setAbierta((i) => (i + paso + total) % total)
  const actual = abierta !== null ? galeria[abierta] : null

  return (
    <section id="dia-a-dia" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <EtiquetaSeccion numero="06">{t.galeria.etiqueta}</EtiquetaSeccion>
      <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
        <h2 className="font-display text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.92] text-tinta uppercase">
          <TextoRevelado texto={t.galeria.titulo} />
        </h2>
        <motion.p
          initial={{ opacity: 0, rotate: -10, y: 10 }}
          whileInView={{ opacity: 1, rotate: -4, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pb-3 font-mano text-2xl font-bold text-marca sm:text-3xl"
          aria-hidden="true"
        >
          ↙ {t.galeria.nota}
        </motion.p>
      </div>

      <ul className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-2 sm:auto-rows-[180px] lg:auto-rows-[190px] lg:grid-cols-4 lg:gap-3">
        {galeria.map((g, i) => (
          <motion.li
            key={g.foto}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={FORMAS[g.forma] ?? ''}
          >
            <button
              type="button"
              onClick={() => setAbierta(i)}
              aria-label={`${t.galeria.ampliar}: ${g[idioma]}`}
              className="group relative block size-full overflow-hidden rounded-[1.5rem] bg-hielo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marca"
            >
              <img
                src={g.foto}
                alt={g[idioma]}
                loading="lazy"
                style={{ objectPosition: g.enfoque }}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-marca/0 transition-colors duration-500 group-hover:bg-marca/20" aria-hidden="true" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-tinta shadow backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
                {g[idioma]}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <dialog
        ref={dialogo}
        onClose={() => setAbierta(null)}
        onClick={(e) => e.target === e.currentTarget && setAbierta(null)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') mover(1)
          if (e.key === 'ArrowLeft') mover(-1)
        }}
        className="m-auto w-[min(92vw,960px)] overflow-visible bg-transparent p-0 backdrop:bg-noche/90 backdrop:backdrop-blur-sm"
      >
        {actual && (
          <figure className="relative">
            <motion.img
              key={abierta}
              src={actual.foto}
              alt={actual[idioma]}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-h-[78vh] w-auto rounded-[1.5rem] object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center font-mano text-2xl font-bold text-white">
              {actual[idioma]}
              {total > 1 && <span className="ml-3 font-mono text-xs font-normal text-sky-200">{abierta + 1}/{total}</span>}
            </figcaption>
            <button
              type="button"
              onClick={() => setAbierta(null)}
              aria-label={t.galeria.cerrar}
              className="absolute -top-3 -right-3 grid size-11 place-items-center rounded-full bg-white text-tinta shadow-lg hover:text-marca"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => mover(-1)}
                  aria-label={t.galeria.anterior}
                  className="absolute top-1/2 left-2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-tinta shadow-lg hover:text-marca"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => mover(1)}
                  aria-label={t.galeria.siguiente}
                  className="absolute top-1/2 right-2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-tinta shadow-lg hover:text-marca"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </>
            )}
          </figure>
        )}
      </dialog>
    </section>
  )
}
