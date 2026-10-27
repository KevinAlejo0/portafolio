import { Download } from 'lucide-react'
import { perfil } from '../data/contenido'

export default function Encabezado({ t, idioma, setIdioma }) {
  return (
    <header className="sticky top-0 z-30 border-b border-borde/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5 font-bold text-tinta">
          <span className="grid size-9 place-items-center rounded-xl bg-marca text-sm font-extrabold tracking-tight text-white">KM</span>
          <span className="hidden sm:inline">{perfil.nombreCorto}</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <a href="#inicio" className="hidden rounded-lg px-3 py-2 text-sm font-medium text-suave hover:bg-hielo hover:text-marca md:inline">{t.nav.inicio}</a>
          <a href="#proyectos" className="hidden rounded-lg px-3 py-2 text-sm font-medium text-suave hover:bg-hielo hover:text-marca md:inline">{t.nav.proyectos}</a>
          <a href="#contacto" className="hidden rounded-lg px-3 py-2 text-sm font-medium text-suave hover:bg-hielo hover:text-marca md:inline">{t.nav.contacto}</a>

          <div className="flex rounded-lg border border-borde bg-fondo p-0.5 font-mono text-xs" role="group" aria-label="Idioma / Language">
            {['es', 'en'].map((cod) => (
              <button
                key={cod}
                type="button"
                onClick={() => setIdioma(cod)}
                aria-pressed={idioma === cod}
                className={`rounded-md px-2.5 py-1.5 font-medium uppercase transition-colors ${idioma === cod ? 'bg-white text-marca shadow-sm' : 'text-suave hover:text-tinta'}`}
              >
                {cod}
              </button>
            ))}
          </div>

          <a
            href={perfil.cv}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-marca px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-marca-600"
          >
            <Download className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t.nav.cv}</span>
            <span className="sr-only sm:hidden">{t.nav.cv}</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
