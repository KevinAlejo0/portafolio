import { useRef } from 'react'
import { ArrowUpRight, Download, FileText, Globe, LayoutGrid, ChartColumn, Users, Wrench } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Aparecer, EtiquetaSeccion, TextoRevelado } from './Movimiento'
import { perfil } from '../data/contenido'

const ICONOS_SERVICIO = [LayoutGrid, Globe, ChartColumn, Wrench, Download, FileText]

// Franja azul marino de ZeroBaz, con los colores de su flyer
export default function ZeroBaz({ t }) {
  const z = t.zerobaz
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const giro = useTransform(scrollYProgress, [0, 1], [-40, 140])

  return (
    <section id="zerobaz" ref={ref} className="px-3 py-12 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-noche px-6 py-16 text-white sm:px-12 sm:py-20">
        {/* Logo gigante que gira al hacer scroll */}
        <motion.svg
          style={{ rotate: giro }}
          viewBox="0 0 100 100"
          className="pointer-events-none absolute -top-24 -right-24 size-[26rem] opacity-90 sm:size-[34rem]"
          aria-hidden="true"
        >
          <path d="M68.5 17.5 A37 37 0 1 0 82.5 31.5" fill="none" stroke="#2563eb" strokeWidth="11" strokeLinecap="round" />
          <line x1="30" y1="70" x2="74" y2="26" stroke="#38bdf8" strokeWidth="11" strokeLinecap="round" />
        </motion.svg>
        <div className="puntos pointer-events-none absolute bottom-10 left-1/2 h-24 w-56 text-white/10" aria-hidden="true" />

        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <EtiquetaSeccion numero="05" clara>{z.etiqueta}</EtiquetaSeccion>
            <Aparecer className="flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-2xl bg-white">
                <img src="img/zerobaz.svg" alt="" className="size-9" />
              </span>
              <div>
                <p className="text-2xl font-extrabold tracking-[0.18em]">ZEROBAZ</p>
                <p className="text-sm text-sky-200">{z.cargo}</p>
              </div>
            </Aparecer>
            <h2 className="mt-8 font-display text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.92] uppercase">
              <TextoRevelado texto={z.lema[0]} className="block" />{" "}
              <TextoRevelado texto={z.lema[1]} className="block text-cielo" delay={0.15} />
            </h2>
            <Aparecer as="p" delay={0.1} className="mt-6 max-w-[56ch] leading-relaxed text-blue-100 sm:text-lg">
              {z.descripcion}
            </Aparecer>
            <Aparecer delay={0.2} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={`https://wa.me/${perfil.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 font-semibold text-noche transition-colors hover:bg-cielo"
              >
                {z.cta}
                <span className="grid size-10 place-items-center rounded-full bg-marca text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </span>
              </a>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Users className="size-4 text-cielo" aria-hidden="true" />
                {z.equipo}
              </span>
              <span className="text-sm text-sky-200">{z.cliente}</span>
            </Aparecer>
          </div>

          <ul className="grid grid-cols-2 gap-3 self-end">
            {z.servicios.map((s, i) => {
              const Icono = ICONOS_SERVICIO[i]
              return (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-white/[0.12]"
                >
                  <span className="mb-6 grid size-10 place-items-center rounded-xl bg-marca/40 text-cielo">
                    <Icono className="size-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-snug font-semibold">{s}</p>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
