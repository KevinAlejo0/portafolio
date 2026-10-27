import { useState } from 'react'
import {
  ArrowUpRight, BookOpen, Briefcase, ChartColumn, Check, Copy, Download, FileText, GraduationCap,
  Languages, Mail, MapPin, Moon, Sparkles, Sun, Sunrise, Users, Wrench, Clock,
} from 'lucide-react'
import Tarjeta, { TituloTarjeta } from './Tarjeta'
import { IconoGithub, IconoInstagram, IconoLinkedin, IconoWhatsapp } from './Iconos'
import { perfil } from '../data/contenido'

const ICONOS_DIA = { sunrise: Sunrise, sun: Sun, moon: Moon }

function Redes({ className = '' }) {
  const enlaces = [
    { href: perfil.redes.linkedin, nombre: 'LinkedIn', Icono: IconoLinkedin },
    { href: perfil.redes.github, nombre: 'GitHub', Icono: IconoGithub },
    { href: perfil.redes.instagram, nombre: 'Instagram', Icono: IconoInstagram },
  ]
  return (
    <div className={`flex gap-2 ${className}`}>
      {enlaces.map(({ href, nombre, Icono }) => (
        <a
          key={nombre}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={nombre}
          title={nombre}
          className="grid size-10 place-items-center rounded-xl border border-borde text-suave transition-colors hover:border-marca hover:bg-hielo hover:text-marca"
        >
          <Icono className="size-[18px]" />
        </a>
      ))}
    </div>
  )
}

export default function Bento({ t }) {
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
    <section id="inicio" className="grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* ---------- Presentación ---------- */}
      <Tarjeta className="flex flex-col justify-between gap-8 p-7 sm:p-9 md:col-span-2 lg:row-span-2">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-hielo px-3 py-1.5 font-mono text-xs font-medium text-marca">
            <span className="latido size-2 rounded-full bg-marca-600" aria-hidden="true" />
            {t.hero.estado}
          </p>
          <p className="mb-2 text-lg font-semibold text-suave">{t.hero.saludo}</p>
          <h1 className="text-[2rem] leading-[1.1] font-extrabold tracking-tight text-balance text-tinta sm:text-[2.6rem]">
            {t.hero.rol}
          </h1>
          <p className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-suave sm:text-base">{t.hero.bio}</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-3">
            <a href="#proyectos" className="inline-flex items-center gap-2 rounded-xl bg-marca px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgb(29_78_216/0.6)] transition-colors hover:bg-marca-600">
              {t.hero.ctaProyectos}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href={perfil.cv} download className="inline-flex items-center gap-2 rounded-xl border border-borde bg-white px-5 py-3 text-sm font-semibold text-tinta transition-colors hover:border-marca hover:text-marca">
              <Download className="size-4" aria-hidden="true" />
              {t.hero.ctaCv}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-borde pt-5">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-suave">
              <MapPin className="size-4 text-marca" aria-hidden="true" />
              {t.hero.ubicacion}
            </span>
            <Redes />
          </div>
        </div>
      </Tarjeta>

      {/* ---------- Foto ---------- */}
      <Tarjeta className="relative min-h-[420px] overflow-hidden p-0 lg:row-span-2">
        <img
          src={perfil.foto}
          alt={perfil.nombre}
          className="absolute inset-0 size-full object-cover object-[50%_22%]"
          width="800"
          height="1000"
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-tinta/85 via-tinta/40 to-transparent p-5 pt-16">
          <p className="font-bold text-white">{perfil.nombreCorto}</p>
          <p className="font-mono text-xs text-sky-100">{t.foto.etiqueta}</p>
        </div>
      </Tarjeta>

      {/* ---------- Formación ---------- */}
      <Tarjeta>
        <TituloTarjeta icono={GraduationCap}>{t.educacion.titulo}</TituloTarjeta>
        <p className="font-bold leading-snug text-tinta">{t.educacion.carrera}</p>
        <p className="mt-1 text-sm text-suave">{t.educacion.universidad}</p>
        <p className="mt-0.5 font-mono text-xs text-suave">{t.educacion.periodo}</p>
        <div className="mt-4">
          <div className="mb-1.5 flex justify-between text-xs font-medium">
            <span className="text-marca">{t.educacion.ciclo}</span>
            <span className="text-suave">{t.educacion.progreso}</span>
          </div>
          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} className={`h-2 flex-1 rounded-full ${i < 9 ? 'bg-marca' : 'latido bg-cielo'}`} />
            ))}
          </div>
        </div>
      </Tarjeta>

      {/* ---------- Idiomas ---------- */}
      <Tarjeta>
        <TituloTarjeta icono={Languages}>{t.idiomas.titulo}</TituloTarjeta>
        <ul className="space-y-4">
          {t.idiomas.lista.map((idioma) => (
            <li key={idioma.nombre}>
              <div className="mb-1.5 flex items-baseline justify-between">
                <span className="font-bold text-tinta">{idioma.nombre}</span>
                <span className="font-mono text-xs text-suave">{idioma.nivel}</span>
              </div>
              <div className="h-2 rounded-full bg-hielo">
                <div className="h-full rounded-full bg-linear-to-r from-marca to-cielo" style={{ width: `${idioma.valor}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </Tarjeta>

      {/* ---------- ZeroBaz ---------- */}
      <Tarjeta className="relative overflow-hidden border-marca bg-linear-to-br from-marca to-[#1e40af] text-white md:col-span-2">
        <svg viewBox="0 0 100 100" className="pointer-events-none absolute -top-10 -right-10 size-56 opacity-20" aria-hidden="true">
          <path d="M68.5 17.5 A37 37 0 1 0 82.5 31.5" fill="none" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" />
          <line x1="30" y1="70" x2="74" y2="26" stroke="#7dd3fc" strokeWidth="9" strokeLinecap="round" />
        </svg>
        <div className="relative">
          <p className="mb-4 font-mono text-xs font-medium tracking-wider text-sky-200 uppercase">{t.zerobaz.etiqueta}</p>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl bg-white">
              <img src="img/zerobaz.svg" alt="" className="size-8" />
            </span>
            <div>
              <p className="text-xl font-extrabold tracking-[0.12em]">ZEROBAZ</p>
              <p className="text-sm text-sky-100">{t.zerobaz.cargo}</p>
            </div>
          </div>
          <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-blue-50">{t.zerobaz.descripcion}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.zerobaz.servicios.map((s) => (
              <li key={s} className="rounded-full bg-white/12 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">{s}</li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/20 pt-4 text-sm text-sky-100">
            <span className="inline-flex items-center gap-2 font-semibold text-white">
              <Users className="size-4" aria-hidden="true" />
              {t.zerobaz.equipo}
            </span>
            <span>{t.zerobaz.cliente}</span>
          </div>
        </div>
      </Tarjeta>

      {/* ---------- Métricas ---------- */}
      <Tarjeta className="bg-hielo md:col-span-2">
        <TituloTarjeta icono={ChartColumn}>{t.metricas.titulo}</TituloTarjeta>
        <dl className="grid grid-cols-2 gap-3">
          {t.metricas.items.map((m) => (
            <div key={m.texto} className="rounded-2xl bg-white p-4">
              <dt className="sr-only">{m.unidad}</dt>
              <dd>
                <span className="text-3xl font-extrabold tracking-tight text-marca">{m.valor}</span>
                <span className="ml-1.5 font-mono text-xs font-medium text-suave">{m.unidad}</span>
                <p className="mt-1 text-[13px] leading-snug text-suave">{m.texto}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Tarjeta>

      {/* ---------- Experiencia ---------- */}
      <Tarjeta className="flex flex-col md:col-span-2 lg:row-span-2">
        <TituloTarjeta icono={Briefcase}>{t.experiencia.titulo}</TituloTarjeta>
        <ol className="relative mb-6 space-y-6 border-l-2 border-hielo pl-6">
          {t.experiencia.lista.map((e, i) => (
            <li key={e.cargo + e.lugar} className="relative">
              <span className={`absolute top-1.5 -left-[31px] size-3 rounded-full ring-4 ring-white ${i === 0 ? 'bg-marca' : 'bg-slate-300'}`} aria-hidden="true" />
              <p className="font-mono text-xs text-suave">{e.periodo}</p>
              <p className="mt-0.5 font-bold text-tinta">{e.cargo}</p>
              <p className="text-sm font-medium text-marca">{e.lugar}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-suave">{e.detalle}</p>
            </li>
          ))}
        </ol>
        <a
          href={perfil.cv}
          target="_blank"
          rel="noreferrer"
          className="mt-auto flex items-center justify-between gap-3 rounded-2xl bg-hielo px-4 py-3 text-sm font-semibold text-marca transition-colors hover:bg-blue-100"
        >
          <span className="inline-flex items-center gap-2">
            <FileText className="size-4" aria-hidden="true" />
            {t.experiencia.verCv}
          </span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </Tarjeta>

      {/* ---------- Herramientas ---------- */}
      <Tarjeta className="md:col-span-2">
        <TituloTarjeta icono={Wrench}>{t.habilidades.titulo}</TituloTarjeta>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.habilidades.grupos.map((g, i) => (
            <div key={g.nombre}>
              <p className="mb-2 text-sm font-bold text-tinta">{g.nombre}</p>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((h) => (
                  <li
                    key={h}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium ${i < 2 ? 'bg-hielo text-marca' : 'bg-fondo text-slate-600'}`}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Tarjeta>

      {/* ---------- Ahora mismo ---------- */}
      <Tarjeta>
        <TituloTarjeta icono={Clock}>{t.ahora.titulo}</TituloTarjeta>
        <ul className="space-y-3.5">
          {t.ahora.lista.map((a) => (
            <li key={a.etiqueta}>
              <p className="font-mono text-[11px] font-medium tracking-wide text-marca uppercase">{a.etiqueta}</p>
              <p className="text-sm leading-snug text-tinta">{a.texto}</p>
            </li>
          ))}
        </ul>
      </Tarjeta>

      {/* ---------- Publicación ---------- */}
      <Tarjeta>
        <TituloTarjeta icono={BookOpen}>{t.publicacion.titulo}</TituloTarjeta>
        <p className="leading-snug font-bold text-tinta">{t.publicacion.nombre}</p>
        <p className="mt-2 text-xs leading-relaxed text-suave">{t.publicacion.revista}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-hielo px-2.5 py-1 text-xs font-medium text-marca">
          <Sparkles className="size-3.5" aria-hidden="true" />
          {t.publicacion.rol}
        </p>
      </Tarjeta>

      {/* ---------- Mi día a día ---------- */}
      <Tarjeta className="md:col-span-2">
        <TituloTarjeta icono={Sun}>{t.dia.titulo}</TituloTarjeta>
        <ol className="grid gap-3 sm:grid-cols-3">
          {t.dia.bloques.map((b) => {
            const Icono = ICONOS_DIA[b.icono]
            return (
              <li key={b.momento} className="rounded-2xl border border-borde p-4">
                <span className="mb-3 grid size-9 place-items-center rounded-xl bg-hielo text-marca">
                  <Icono className="size-[18px]" aria-hidden="true" />
                </span>
                <p className="font-bold text-tinta">{b.momento}</p>
                <p className="mt-1 text-sm leading-snug text-suave">{b.texto}</p>
              </li>
            )
          })}
        </ol>
      </Tarjeta>

      {/* ---------- Contacto ---------- */}
      <Tarjeta id="contacto" className="flex flex-col justify-between gap-5 md:col-span-2">
        <div>
          <TituloTarjeta icono={Mail}>{t.nav.contacto}</TituloTarjeta>
          <p className="text-2xl font-extrabold tracking-tight text-tinta">{t.contacto.titulo}</p>
          <p className="mt-2 text-sm leading-relaxed text-suave">{t.contacto.texto}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex min-w-0 items-center gap-2 rounded-xl border border-borde bg-fondo p-1.5 pl-4">
            <a href={`mailto:${perfil.email}`} className="min-w-0 flex-1 truncate text-sm font-semibold text-tinta hover:text-marca">
              {perfil.email}
            </a>
            <button
              type="button"
              onClick={copiarCorreo}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-marca shadow-sm transition-colors hover:bg-hielo"
            >
              {copiado ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
              <span aria-live="polite">{copiado ? t.contacto.copiado : t.contacto.copiar}</span>
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a
              href={`https://wa.me/${perfil.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-marca px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-marca-600"
            >
              <IconoWhatsapp className="size-4" />
              {t.contacto.whatsapp} · {perfil.telefono}
            </a>
            <Redes />
          </div>
        </div>
      </Tarjeta>
    </section>
  )
}
