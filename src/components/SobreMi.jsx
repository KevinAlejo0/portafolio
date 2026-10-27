import { Award, BookOpen, GraduationCap, Languages } from 'lucide-react'
import { motion } from 'motion/react'
import { Aparecer, Contador, EtiquetaSeccion, TextoRevelado } from './Movimiento'

const ICONOS_LOGRO = [BookOpen, Award]

export default function SobreMi({ t }) {
  const s = t.sobreMi
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* ---------- Texto, formación e idiomas ---------- */}
        <div>
          <EtiquetaSeccion numero="02">{s.etiqueta}</EtiquetaSeccion>
          <h2 className="font-display text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.92] text-tinta uppercase">
            <TextoRevelado texto={s.titulo} />
          </h2>
          {s.parrafos.map((parrafo, i) => (
            <Aparecer key={i} delay={0.1 + i * 0.1} as="p" className="mt-5 max-w-[60ch] leading-relaxed text-suave sm:text-lg">
              {parrafo}
            </Aparecer>
          ))}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Aparecer className="rounded-[1.75rem] border border-borde bg-white p-6">
              <p className="mb-4 flex items-center gap-2 font-mono text-xs tracking-wider text-suave uppercase">
                <GraduationCap className="size-4 text-marca" aria-hidden="true" />
                {t.educacion.titulo}
              </p>
              <p className="font-bold text-tinta">{t.educacion.carrera}</p>
              <p className="text-sm text-suave">{t.educacion.universidad}</p>
              <p className="mt-0.5 font-mono text-xs text-suave">{t.educacion.periodo}</p>
              <div className="mt-4 mb-1.5 flex justify-between text-xs font-semibold">
                <span className="text-marca">{t.educacion.ciclo}</span>
                <span className="text-suave">{t.educacion.progreso}</span>
              </div>
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: 10 }, (_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className={`h-2.5 flex-1 rounded-full ${i < 9 ? 'bg-marca' : 'latido bg-cielo'}`}
                  />
                ))}
              </div>
            </Aparecer>

            <Aparecer delay={0.1} className="rounded-[1.75rem] border border-borde bg-white p-6">
              <p className="mb-4 flex items-center gap-2 font-mono text-xs tracking-wider text-suave uppercase">
                <Languages className="size-4 text-marca" aria-hidden="true" />
                {t.idiomas.titulo}
              </p>
              <ul className="space-y-4">
                {t.idiomas.lista.map((idioma) => (
                  <li key={idioma.nombre}>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-bold text-tinta">{idioma.nombre}</span>
                      <span className="font-mono text-xs text-suave">{idioma.nivel}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-hielo">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${idioma.valor}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="h-full rounded-full bg-linear-to-r from-marca to-cielo"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Aparecer>
          </div>

          <Aparecer className="mt-4 rounded-[1.75rem] border border-dashed border-marca/30 bg-hielo/60 p-6">
            <p className="mb-4 font-mano text-2xl font-bold text-marca">{t.ahora.titulo}…</p>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {t.ahora.lista.map((a) => (
                <li key={a.etiqueta}>
                  <p className="font-mono text-[11px] font-medium tracking-wide text-marca uppercase">{a.etiqueta}</p>
                  <p className="text-sm leading-snug text-tinta">{a.texto}</p>
                </li>
              ))}
            </ul>
          </Aparecer>
        </div>

        {/* ---------- Números y logros ---------- */}
        <div className="flex flex-col gap-4 lg:pt-16">
          <dl className="grid grid-cols-2 gap-4">
            {s.metricas.map((m, i) => (
              <Aparecer
                key={m.texto}
                delay={i * 0.08}
                className={`flex flex-col justify-between rounded-[1.75rem] p-6 ${i === 0 ? 'bg-marca text-white' : i === 3 ? 'bg-tinta text-white' : 'border border-borde bg-white'}`}
              >
                <dt className={`font-mono text-[11px] tracking-wider uppercase ${i === 0 || i === 3 ? 'text-sky-200' : 'text-suave'}`}>{m.unidad}</dt>
                <dd>
                  <Contador
                    numero={m.numero}
                    decimales={m.decimales}
                    sufijo={m.sufijo}
                    className={`block font-display text-[clamp(3rem,9vw,4.75rem)] leading-none ${i === 0 || i === 3 ? 'text-white' : 'text-marca'}`}
                  />
                  <p className={`mt-2 text-[13px] leading-snug ${i === 0 || i === 3 ? 'text-blue-100' : 'text-suave'}`}>{m.texto}</p>
                </dd>
              </Aparecer>
            ))}
          </dl>

          <p className="mt-4 font-mono text-xs tracking-wider text-suave uppercase">{t.logros.titulo}</p>
          {t.logros.lista.map((l, i) => {
            const Icono = ICONOS_LOGRO[i]
            return (
              <Aparecer key={l.titulo} delay={i * 0.1} className="flex gap-4 rounded-[1.75rem] border border-borde bg-white p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-hielo text-marca">
                  <Icono className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-marca uppercase">{l.tipo}</p>
                  <p className="mt-0.5 leading-snug font-bold text-tinta">{l.titulo}</p>
                  <p className="mt-1 text-xs leading-relaxed text-suave">{l.detalle}</p>
                </div>
              </Aparecer>
            )
          })}
        </div>
      </div>
    </section>
  )
}
