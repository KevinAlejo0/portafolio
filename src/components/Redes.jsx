import { IconoGithub, IconoInstagram, IconoLinkedin } from './Iconos'
import { perfil } from '../data/contenido'

const ENLACES = [
  { href: perfil.redes.linkedin, nombre: 'LinkedIn', Icono: IconoLinkedin },
  { href: perfil.redes.github, nombre: 'GitHub', Icono: IconoGithub },
  { href: perfil.redes.instagram, nombre: 'Instagram', Icono: IconoInstagram },
]

// Botones redondos de redes sociales; "clara" es para fondos azules
export function Redes({ clara = false, className = '' }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {ENLACES.map(({ href, nombre, Icono }) => (
        <a
          key={nombre}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={nombre}
          title={nombre}
          className={`grid size-11 place-items-center rounded-full border transition-all duration-300 hover:-translate-y-1 ${
            clara
              ? 'border-white/25 text-white hover:bg-white hover:text-marca'
              : 'border-tinta/10 bg-white text-tinta hover:border-marca hover:bg-marca hover:text-white'
          }`}
        >
          <Icono className="size-[18px]" />
        </a>
      ))}
    </div>
  )
}
