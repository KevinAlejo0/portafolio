import { ArrowUp } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { perfil } from '../data/contenido'

// Pie con el nombre gigante que se desliza al llegar al final
export default function Pie({ t }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-4%'])

  return (
    <footer ref={ref} className="relative overflow-hidden pt-10 pb-8">
      <motion.p
        style={{ x }}
        className="contorno font-display text-[19vw] leading-[0.85] whitespace-nowrap uppercase select-none"
        aria-hidden="true"
      >
        Kevin Mostacero
      </motion.p>
      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-suave sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {perfil.nombre}</p>
        <p className="inline-flex items-center gap-2">
          {t.pie.hecho} ·
          <img src="img/zerobaz.svg" alt="" className="size-4" />
          <span className="font-semibold tracking-wider text-tinta">ZEROBAZ</span>
        </p>
        <a href="#inicio" className="group inline-flex items-center gap-2 font-semibold text-tinta hover:text-marca">
          {t.pie.arriba}
          <span className="grid size-9 place-items-center rounded-full bg-tinta text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-marca">
            <ArrowUp className="size-4" aria-hidden="true" />
          </span>
        </a>
      </div>
    </footer>
  )
}
