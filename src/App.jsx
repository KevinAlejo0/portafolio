import { useEffect, useState } from 'react'
import { MotionConfig } from 'motion/react'
import Encabezado from './components/Encabezado'
import Portada from './components/Portada'
import Franja from './components/Franja'
import Servicios from './components/Servicios'
import SobreMi from './components/SobreMi'
import Experiencia from './components/Experiencia'
import Proyectos from './components/Proyectos'
import ZeroBaz from './components/ZeroBaz'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Pie from './components/Pie'
import { textos } from './data/contenido'

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
    // reducedMotion="user": respeta a quien pidió menos animaciones en su sistema
    <MotionConfig reducedMotion="user">
      <Encabezado t={t} idioma={idioma} setIdioma={setIdioma} />
      <main>
        <Portada t={t} />
        <Franja t={t} />
        <Servicios t={t} />
        <SobreMi t={t} />
        <Experiencia t={t} />
        <Proyectos t={t} idioma={idioma} />
        <ZeroBaz t={t} />
        <Galeria t={t} idioma={idioma} />
        <Contacto t={t} />
      </main>
      <Pie t={t} />
    </MotionConfig>
  )
}
