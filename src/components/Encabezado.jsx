import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useSpring } from 'motion/react'
import { perfil } from '../data/contenido'

const SECCIONES = ['inicio', 'sobreMi', 'proyectos', 'zerobaz', 'contacto']

export default function Encabezado({ t, idioma, setIdioma }) {
  const { scrollYProgress } = useScroll()
  const progreso = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })

  return (
    <>
      {/* Barra de progreso de lectura */}
      <motion.div style={{ scaleX: progreso }} className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-linear-to-r from-marca to-cielo" aria-hidden="true" />

      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-3 z-40 px-3 sm:top-4 sm:px-6"
      >
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 rounded-full border border-white/70 bg-white/75 py-2 pr-2 pl-2 shadow-[0_8px_30px_-12px_rgb(11_27_63/0.25)] backdrop-blur-xl sm:pl-3">
          <a href="#inicio" className="flex items-center gap-2.5 font-bold text-tinta">
            <span className="grid size-10 place-items-center rounded-full bg-tinta text-sm font-extrabold tracking-tight text-white">KM</span>
            <span className="hidden text-sm sm:inline">{perfil.nombreCorto}</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {SECCIONES.slice(1).map((s) => (
              <a key={s} href={`#${s === 'sobreMi' ? 'sobre-mi' : s}`} className="rounded-full px-3.5 py-2 text-sm font-medium text-suave transition-colors hover:bg-hielo hover:text-marca">
                {t.nav[s]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="relative flex rounded-full bg-fondo p-1 font-mono text-xs" role="group" aria-label="Idioma / Language">
              {['es', 'en'].map((cod) => (
                <button
                  key={cod}
                  type="button"
                  onClick={() => setIdioma(cod)}
                  aria-pressed={idioma === cod}
                  className={`relative z-10 rounded-full px-2.5 py-1.5 font-medium uppercase transition-colors ${idioma === cod ? 'text-white' : 'text-suave hover:text-tinta'}`}
                >
                  {idioma === cod && (
                    <motion.span layoutId="idioma-activo" className="absolute inset-0 -z-10 rounded-full bg-marca" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                  )}
                  {cod}
                </button>
              ))}
            </div>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-tinta py-1.5 pr-1.5 pl-4 text-sm font-semibold text-white transition-colors hover:bg-marca"
            >
              <span className="hidden sm:inline">{t.nav.hablemos}</span>
              <span className="sr-only sm:hidden">{t.nav.hablemos}</span>
              <span className="grid size-8 place-items-center rounded-full bg-white text-tinta transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </nav>
      </motion.header>
    </>
  )
}
