import { useState } from 'react'
import { Check, Database, Globe, Hospital, House, ShoppingBag, SquareParking, Truck, Waves } from 'lucide-react'
import Tarjeta, { useAparecer } from './Tarjeta'
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

export default function Proyectos({ t, idioma }) {
  const [filtro, setFiltro] = useState('todos')
  const refTitulo = useAparecer()
  const visibles = filtro === 'todos' ? proyectos : proyectos.filter((p) => p.categorias.includes(filtro))

  return (
    <section id="proyectos" className="mt-20">
      <div ref={refTitulo} className="reveal mb-8 flex flex-col gap-5">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-tinta sm:text-4xl">{t.proyectos.titulo}</h2>
          <p className="mt-2 max-w-[56ch] text-suave">{t.proyectos.subtitulo}</p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label={t.proyectos.titulo}>
          {FILTROS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltro(f)}
              aria-pressed={filtro === f}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filtro === f ? 'bg-marca text-white' : 'border border-borde bg-white text-suave hover:border-marca hover:text-marca'
              }`}
            >
              {f === 'todos' ? t.proyectos.todos : t.proyectos.categorias[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibles.map((p) => {
          const Icono = ICONOS_PROYECTO[p.icono]
          const txt = p[idioma]
          return (
            <Tarjeta key={p.id} className={`flex flex-col ${p.destacado ? 'ring-2 ring-marca/15' : ''}`}>
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className={`grid size-11 place-items-center rounded-2xl ${p.destacado ? 'bg-marca text-white' : 'bg-hielo text-marca'}`}>
                  <Icono className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {p.destacado && (
                    <span className="rounded-full bg-marca px-2.5 py-1 font-mono text-[11px] font-medium text-white">{t.proyectos.destacado}</span>
                  )}
                  {p.categorias.map((c) => (
                    <span key={c} className="rounded-full bg-fondo px-2.5 py-1 font-mono text-[11px] font-medium text-suave">
                      {t.proyectos.categorias[c]}
                    </span>
                  ))}
                </div>
              </div>

              <p className="font-mono text-xs text-suave">{txt.contexto}</p>
              <h3 className="mt-1 text-lg leading-snug font-bold text-tinta">{txt.titulo}</h3>
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
                  <li key={s} className="rounded-lg border border-borde px-2 py-0.5 font-mono text-[11px] text-slate-600">{s}</li>
                ))}
              </ul>
            </Tarjeta>
          )
        })}
      </div>
    </section>
  )
}
