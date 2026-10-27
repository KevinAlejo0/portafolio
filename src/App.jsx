import { useEffect, useState } from 'react'
import Encabezado from './components/Encabezado'
import Bento from './components/Bento'
import Proyectos from './components/Proyectos'
import { perfil, textos } from './data/contenido'

function idiomaInicial() {
  try {
    const guardado = localStorage.getItem('idioma')
    if (guardado === 'es' || guardado === 'en') return guardado
  } catch {
    // sin acceso a localStorage: se usa el idioma del navegador
  }
  return navigator.language?.startsWith('es') === false ? 'en' : 'es'
}

export default function App() {
  const [idioma, setIdioma] = useState(idiomaInicial)
  const t = textos[idioma]

  useEffect(() => {
    document.documentElement.lang = idioma
    try {
      localStorage.setItem('idioma', idioma)
    } catch {
      // no pasa nada si no se puede recordar
    }
  }, [idioma])

  return (
    <>
      <div className="fondo-puntos pointer-events-none absolute inset-x-0 top-0 h-[520px]" aria-hidden="true" />
      <Encabezado t={t} idioma={idioma} setIdioma={setIdioma} />
      <main className="relative mx-auto max-w-6xl px-4 pt-6 pb-16 sm:px-6 sm:pt-10">
        <Bento t={t} />
        <Proyectos t={t} idioma={idioma} />
      </main>
      <footer className="border-t border-borde bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-suave sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {perfil.nombre}</p>
          <p className="inline-flex items-center gap-2">
            {t.pie} ·
            <img src="img/zerobaz.svg" alt="" className="size-4" />
            <span className="font-semibold tracking-wider text-tinta">ZEROBAZ</span>
          </p>
        </div>
      </footer>
    </>
  )
}
