import { useRef } from 'react'
import { ArrowUpRight, FileText } from 'lucide-react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Aparecer, EtiquetaSeccion, TextoRevelado } from './Movimiento'
import { perfil } from '../data/contenido'

// Línea de tiempo que se va llenando de azul mientras bajas
export default function Experiencia({ t }) {
  const e = t.experiencia
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const llenado = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <EtiquetaSeccion numero="03">{e.etiqueta}</EtiquetaSeccion>
          <h2 className="font-display text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.92] text-tinta uppercase">
            <TextoRevelado texto={e.titulo} />
          </h2>
          <Aparecer delay={0.15}>
            <a
              href={perfil.cv}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border-2 border-tinta/10 bg-white py-2 pr-2 pl-5 text-sm font-semibold text-tinta transition-colors hover:border-marca hover:text-marca"
            >
              <FileText className="size-4" aria-hidden="true" />
              {e.verCv}
              <span className="grid size-9 place-items-center rounded-full bg-tinta text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-marca">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </a>
          </Aparecer>
        </div>

        <ol ref={ref} className="relative pl-10 sm:pl-14">
          <span className="absolute top-2 bottom-2 left-[11px] w-0.5 rounded-full bg-borde sm:left-[19px]" aria-hidden="true" />
          <motion.span
            style={{ scaleY: llenado }}
            className="absolute top-2 bottom-2 left-[11px] w-0.5 origin-top rounded-full bg-linear-to-b from-marca to-cielo sm:left-[19px]"
            aria-hidden="true"
          />
          {e.lista.map((item, i) => (
            <Aparecer as="li" key={item.cargo + item.lugar} delay={0.05} className="relative pb-12 last:pb-0">
              <span
                className={`absolute top-1 -left-10 grid size-6 place-items-center rounded-full border-4 border-fondo sm:-left-14 sm:size-10 ${i === 0 ? 'bg-marca' : 'bg-white ring-1 ring-borde'}`}
                aria-hidden="true"
              >
                {i === 0 && <span className="latido size-2 rounded-full bg-white" />}
              </span>
              <p className="font-mono text-xs font-medium tracking-wider text-marca uppercase">{item.periodo}</p>
              <h3 className="mt-1.5 text-2xl leading-tight font-bold text-tinta sm:text-[1.7rem]">{item.cargo}</h3>
              <p className="mt-1 font-semibold text-suave">{item.lugar}</p>
              <p className="mt-3 max-w-[58ch] leading-relaxed text-suave">{item.detalle}</p>
            </Aparecer>
          ))}
        </ol>
      </div>
    </section>
  )
}
