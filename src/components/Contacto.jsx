import { useState } from 'react'
import { Check, Copy, Download } from 'lucide-react'
import { motion } from 'motion/react'
import { Aparecer, EtiquetaSeccion, TextoRevelado } from './Movimiento'
import { IconoWhatsapp } from './Iconos'
import { Redes } from './Redes'
import { perfil } from '../data/contenido'

export default function Contacto({ t }) {
  const c = t.contacto
  const [copiado, setCopiado] = useState(false)

  async function copiarCorreo() {
    try {
      await navigator.clipboard.writeText(perfil.email)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      window.location.href = `mailto:${perfil.email}`
    }
  }

  return (
    <section id="contacto" className="px-3 py-12 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-marca-600 via-marca to-[#1e3a8a] px-6 py-16 text-white sm:px-12 sm:py-24">
        {/* Círculos decorativos que respiran */}
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-32 -bottom-40 size-[30rem] rounded-full border border-white/15"
          aria-hidden="true"
        />
        <motion.span
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="pointer-events-none absolute -right-10 -bottom-20 size-[18rem] rounded-full bg-white/[0.06]"
          aria-hidden="true"
        />
        <div className="puntos pointer-events-none absolute top-10 right-10 h-28 w-40 text-white/15" aria-hidden="true" />

        <div className="relative">
          <EtiquetaSeccion numero="07" clara>{c.etiqueta}</EtiquetaSeccion>
          <h2 className="font-display text-[clamp(4.5rem,17vw,12rem)] leading-[0.85] uppercase">
            <TextoRevelado texto={c.titulo} />
          </h2>
          <Aparecer as="p" delay={0.1} className="mt-6 max-w-[52ch] text-blue-100 sm:text-lg">
            {c.texto}
          </Aparecer>

          <Aparecer delay={0.2} className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-center gap-2 rounded-full bg-white/10 p-1.5 pl-5 ring-1 ring-white/20 backdrop-blur lg:w-[440px]">
              <a href={`mailto:${perfil.email}`} className="min-w-0 flex-1 truncate font-semibold hover:text-sky-200">
                {perfil.email}
              </a>
              <button
                type="button"
                onClick={copiarCorreo}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-marca transition-colors hover:bg-sky-100"
              >
                {copiado ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
                <span aria-live="polite">{copiado ? c.copiado : c.copiar}</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${perfil.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-marca transition-transform duration-300 hover:-translate-y-1"
              >
                <IconoWhatsapp className="size-4" />
                {c.whatsapp}
              </a>
              <a
                href={perfil.cv}
                download
                aria-label={t.nav.cv}
                className="grid size-11 place-items-center rounded-full border border-white/25 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-marca"
              >
                <Download className="size-[18px]" aria-hidden="true" />
              </a>
              <Redes clara />
            </div>
          </Aparecer>
        </div>
      </div>
    </section>
  )
}
