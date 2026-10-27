import { useEffect, useRef, useState } from 'react'
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Tarjeta, { TituloTarjeta } from './Tarjeta'
import { galeria } from '../data/contenido'

// Tarjeta "Mi día a día": mosaico de fotos que se amplían al hacer clic
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
    <Tarjeta className="md:col-span-2">
      <TituloTarjeta icono={Camera}>{t.galeria.titulo}</TituloTarjeta>
      <p className="-mt-2 mb-4 text-sm text-suave">{t.galeria.subtitulo}</p>

      <ul className="grid auto-rows-[92px] grid-cols-3 gap-2 sm:auto-rows-[118px]">
        {galeria.map((g, i) => (
          <li key={g.foto} className={i === 0 && total >= 3 ? 'col-span-2 row-span-2' : ''}>
            <button
              type="button"
              onClick={() => setAbierta(i)}
              aria-label={`${t.galeria.ampliar}: ${g[idioma]}`}
              className="group relative block size-full overflow-hidden rounded-2xl bg-hielo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marca"
            >
              <img
                src={g.foto}
                alt={g[idioma]}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-linear-to-t from-tinta/80 to-transparent p-2 pt-6 text-left text-xs font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                {g[idioma]}
              </span>
            </button>
          </li>
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
        className="m-auto w-[min(92vw,960px)] overflow-visible bg-transparent p-0 backdrop:bg-tinta/85 backdrop:backdrop-blur-sm"
      >
        {actual && (
          <figure className="relative">
            <img src={actual.foto} alt={actual[idioma]} className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl" />
            <figcaption className="mt-3 text-center text-sm font-medium text-white">
              {actual[idioma]}
              {total > 1 && <span className="ml-2 font-mono text-xs text-sky-200">{abierta + 1}/{total}</span>}
            </figcaption>
            <button
              type="button"
              onClick={() => setAbierta(null)}
              aria-label={t.galeria.cerrar}
              className="absolute -top-3 -right-3 grid size-10 place-items-center rounded-full bg-white text-tinta shadow-lg hover:text-marca"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => mover(-1)}
                  aria-label={t.galeria.anterior}
                  className="absolute top-1/2 left-2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-tinta shadow-lg hover:text-marca"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => mover(1)}
                  aria-label={t.galeria.siguiente}
                  className="absolute top-1/2 right-2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-tinta shadow-lg hover:text-marca"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </>
            )}
          </figure>
        )}
      </dialog>
    </Tarjeta>
  )
}
