import { useState } from 'react'
import { Check, Database, Globe, Hospital, House, ShoppingBag, SquareParking, Truck, Waves } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { EtiquetaSeccion, TextoRevelado } from './Movimiento'
import { proyectos } from '../data/contenido'

const ICONOS_PROYECTO = {
  hospital: Hospital,
  waves: Waves,
  database: Database,
  parking: SquareParking,
  shop: ShoppingBag,
  truck: Truck,
  globe: Globe,
  home: House,
}

const FILTROS = ['todos', 'datos', 'ml', 'dev', 'iot']

// Portada dibujada para los proyectos que no tienen foto
function CubiertaDibujada({ proyecto }) {
  const Icono = ICONOS_PROYECTO[proyecto.icono]
  const esOla = proyecto.icono === 'waves'
  return (
    <div className="relative size-full overflow-hidden bg-linear-to-br from-hielo via-white to-hielo">
      <div className="puntos absolute inset-0 text-marca/10" aria-hidden="true" />
      {esOla ? (
        <div className="absolute inset-x-0 bottom-0 h-3/4" aria-hidden="true">
          {[0, 1, 2].map((n) => (
            <svg
              key={n}
              viewBox="0 0 800 120"
              preserveAspectRatio="none"
              className={`absolute bottom-0 h-full w-[200%] ${n % 2 ? 'franja-inversa' : 'franja'}`}
              style={{ opacity: 0.35 + n * 0.25, bottom: `${n * -14}%` }}
            >
              <path
                d="M0 60 Q 100 10 200 60 T 400 60 T 600 60 T 800 60 V 120 H 0 Z"
                fill={n === 2 ? '#1d4ed8' : n === 1 ? '#2563eb' : '#38bdf8'}
              />
            </svg>
          ))}
        </div>
      ) : (
        <div className="absolute right-6 bottom-6 flex items-end gap-1.5 opacity-60" aria-hidden="true">
          {[40, 65, 50, 85, 70].map((h, i) => (
            <span key={i} className="w-3 rounded-full bg-marca/25" style={{ height: `${h * 0.6}px` }} />
          ))}
        </div>
      )}
      <span className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-white text-marca shadow-[0_20px_40px_-18px_rgb(29_78_216/0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
        <Icono className="size-9" aria-hidden="true" />
      </span>
    </div>
  )
}

export default function Proyectos({ t, idioma }) {
  const [filtro, setFiltro] = useState('todos')
  const visibles = filtro === 'todos' ? proyectos : proyectos.filter((p) => p.categorias.includes(filtro))

  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <EtiquetaSeccion numero="04">{t.proyectos.etiqueta}</EtiquetaSeccion>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="flex items-start gap-2 font-display text-[clamp(3.5rem,13vw,9rem)] leading-[0.85] text-tinta uppercase">
            <TextoRevelado texto={t.proyectos.titulo} />
            <span className="mt-2 font-mono text-lg text-marca sm:text-2xl">({String(proyectos.length).padStart(2, '0')})</span>
          </h2>
          <p className="mt-4 max-w-[48ch] text-suave sm:text-lg">{t.proyectos.subtitulo}</p>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label={t.proyectos.titulo}>
          {FILTROS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltro(f)}
              aria-pressed={filtro === f}
              className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                filtro === f ? 'text-white' : 'border border-borde bg-white text-suave hover:border-marca hover:text-marca'
              }`}
            >
              {filtro === f && (
                <motion.span layoutId="filtro-activo" className="absolute inset-0 rounded-full bg-marca" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              <span className="relative">{f === 'todos' ? t.proyectos.todos : t.proyectos.categorias[f]}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {visibles.map((p) => {
            const txt = p[idioma]
            return (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col overflow-hidden rounded-[2rem] border border-borde bg-white p-3 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(29_78_216/0.45)] ${
                  p.destacado ? 'md:col-span-2 lg:col-span-3' : 'lg:col-span-2'
                }`}
              >
                <div className={`relative overflow-hidden rounded-[1.5rem] ${p.destacado ? 'h-60 sm:h-72' : 'h-44'}`}>
                  {p.portada ? (
                    <img src={p.portada} alt="" loading="lazy" className="size-full object-cover object-[30%_40%] transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <CubiertaDibujada proyecto={p} />
                  )}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {p.destacado && (
                      <span className="rounded-full bg-marca px-3 py-1 font-mono text-[11px] font-medium text-white shadow">{t.proyectos.destacado}</span>
                    )}
                    {p.categorias.map((c) => (
                      <span key={c} className="rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-medium text-tinta shadow-sm backdrop-blur">
                        {t.proyectos.categorias[c]}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 pt-5">
                  <p className="font-mono text-xs text-suave">{txt.contexto}</p>
                  <h3 className={`mt-1.5 leading-tight font-bold text-tinta ${p.destacado ? 'text-2xl' : 'text-lg'}`}>{txt.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-suave">{txt.resumen}</p>
                  <ul className="mt-4 space-y-2">
                    {txt.puntos.map((punto) => (
                      <li key={punto} className="flex gap-2 text-sm leading-snug text-slate-600">
                        <Check className="mt-0.5 size-4 shrink-0 text-marca" aria-hidden="true" />
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-full border border-borde px-2.5 py-1 font-mono text-[11px] text-slate-600">{s}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
