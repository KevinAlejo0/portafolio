import { ArrowDown, ArrowUpRight, Download, MapPin, Trophy } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { TextoRevelado } from './Movimiento'
import { Redes } from './Redes'
import { perfil } from '../data/contenido'

const SUAVE = [0.22, 1, 0.36, 1]

// El círculo azul ocupa left 10% · top 18% · 80% de ancho → centro (50, 58), radio 40
const FORMA_MASCARA = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">' +
    '<rect x="0" y="0" width="100" height="58"/><circle cx="50" cy="58" r="40"/></svg>',
)
const MASCARA_FOTO = {
  maskImage: `url("data:image/svg+xml,${FORMA_MASCARA}")`,
  WebkitMaskImage: `url("data:image/svg+xml,${FORMA_MASCARA}")`,
  maskSize: '100% 100%',
  WebkitMaskSize: '100% 100%',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
}

// Tarjeta flotante que sube y baja suavemente alrededor de la foto
function Flotante({ className = '', delay = 0, amplitud = 10, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: SUAVE, delay }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -amplitud, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.6 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function MiniOla() {
  return (
    <svg viewBox="0 0 80 28" className="h-7 w-20" aria-hidden="true">
      <motion.path
        d="M2 20 C 10 6, 18 6, 26 16 S 42 26, 50 12 S 66 2, 78 10"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: 'easeInOut', delay: 1.3 }}
      />
    </svg>
  )
}

export default function Portada({ t }) {
  const p = t.portada
  const { scrollY } = useScroll()
  const xFondo = useTransform(scrollY, [0, 800], [0, -220])
  const yFoto = useTransform(scrollY, [0, 800], [0, 60])

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* Palabra gigante de fondo que se desplaza al bajar */}
      <motion.p
        style={{ x: xFondo }}
        className="contorno pointer-events-none absolute bottom-0 left-0 font-display text-[34vw] leading-[0.8] whitespace-nowrap select-none lg:text-[24vw]"
        aria-hidden="true"
      >
        {p.fondo} {p.fondo} {p.fondo}
      </motion.p>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
        {/* ---------- Texto ---------- */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SUAVE, delay: 0.3 }}
            className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-3"
          >
            <span className="font-mono text-xs font-medium tracking-[0.2em] text-suave uppercase">{p.meta}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-marca/20 bg-white/70 px-3 py-1.5 text-xs font-semibold text-marca">
              <span className="latido size-2 rounded-full bg-marca-600" aria-hidden="true" />
              {p.estado}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SUAVE, delay: 0.4 }}
            className="mb-3 text-lg font-semibold text-suave sm:text-xl"
          >
            {p.saludo}
          </motion.p>

          <h1 className="font-display text-[clamp(4rem,15vw,9.5rem)] leading-[0.86] tracking-tight uppercase">
            <TextoRevelado texto={p.titulo[0]} alCargar delay={0.5} className="block text-tinta" />{" "}
            <TextoRevelado texto={p.titulo[1]} alCargar delay={0.65} className="block text-marca" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SUAVE, delay: 0.9 }}
            className="mt-7 max-w-[54ch] text-base leading-relaxed text-suave sm:text-lg"
          >
            {p.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SUAVE, delay: 1.05 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#proyectos" className="group inline-flex items-center gap-3 rounded-full bg-marca py-2 pr-2 pl-6 font-semibold text-white shadow-[0_14px_30px_-12px_rgb(29_78_216/0.7)] transition-colors hover:bg-tinta">
              {p.ctaProyectos}
              <span className="grid size-10 place-items-center rounded-full bg-white text-marca transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </span>
            </a>
            <a href={perfil.cv} download className="inline-flex items-center gap-2 rounded-full border-2 border-tinta/10 bg-white px-6 py-4 text-sm font-semibold text-tinta transition-colors hover:border-marca hover:text-marca">
              <Download className="size-4" aria-hidden="true" />
              {p.ctaCv}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-suave">
              <MapPin className="size-4 text-marca" aria-hidden="true" />
              {p.ubicacion}
            </span>
            <Redes />
          </motion.div>
        </div>

        {/* ---------- Foto recortada sobre el círculo ---------- */}
        <motion.div style={{ y: yFoto }} className="relative order-1 mx-auto w-full max-w-[min(88vw,500px)] lg:order-2">
          <div className="relative aspect-square">
            {/* Trama de puntos y anillo que gira */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="puntos absolute top-[6%] -left-[4%] size-[34%] rounded-3xl text-marca/25"
              aria-hidden="true"
            />
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute top-[12%] left-[4%] size-[92%] text-marca/35"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 2.5" />
            </motion.svg>

            {/* Círculo azul */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: SUAVE, delay: 0.2 }}
              className="absolute top-[18%] left-[10%] aspect-square w-[80%] rounded-full bg-linear-to-br from-marca-600 via-marca to-[#1e3a8a] shadow-[0_40px_80px_-30px_rgb(29_78_216/0.8)]"
            >
              <div className="puntos absolute inset-[14%] rounded-full text-white/10" aria-hidden="true" />
            </motion.div>

            {/* Máscara: por encima del centro del círculo la foto sale libre; por debajo sigue su curva */}
            <div className="absolute inset-0" style={MASCARA_FOTO}>
              <motion.img
                src={perfil.fotoRecortada}
                alt={perfil.nombre}
                width="675"
                height="631"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease: SUAVE, delay: 0.45 }}
                className="absolute bottom-[2%] left-[4%] w-[92%] max-w-none"
              />
            </div>

            {/* Nota escrita a mano */}
            <motion.div
              initial={{ opacity: 0, rotate: -12 }}
              animate={{ opacity: 1, rotate: -8 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute top-[1%] right-[-2%] flex flex-col items-end font-mano text-2xl font-bold text-marca sm:text-3xl"
              aria-hidden="true"
            >
              {p.nota}
              <svg viewBox="0 0 70 50" className="mr-10 h-11 w-16">
                <motion.path
                  d="M62 4 C 58 26, 40 40, 10 42 M10 42 L 20 34 M10 42 L 19 49"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.8, duration: 0.9, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>

            {/* Tarjetas flotantes */}
            <Flotante delay={1.1} className="top-[56%] -left-[3%] sm:top-[34%] sm:-left-[12%]">
              <div className="rounded-2xl border border-white bg-white/90 p-3 pr-4 shadow-[0_18px_40px_-16px_rgb(11_27_63/0.35)] backdrop-blur">
                <p className="font-display text-2xl leading-none text-tinta">{p.tarjetaModelo.valor}</p>
                <MiniOla />
                <p className="text-[11px] font-semibold text-suave">{p.tarjetaModelo.texto}</p>
              </div>
            </Flotante>

            <Flotante delay={1.3} amplitud={8} className="right-[-3%] bottom-[18%] sm:right-[-10%]">
              <div className="flex items-center gap-3 rounded-2xl bg-tinta p-3 pr-4 text-white shadow-[0_18px_40px_-16px_rgb(11_27_63/0.6)]">
                <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-cielo">
                  <Trophy className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-lg leading-none tracking-wide">{p.tarjetaPremio.valor}</span>
                  <span className="text-[11px] font-medium text-sky-200">{p.tarjetaPremio.texto}</span>
                </span>
              </div>
            </Flotante>

            <Flotante delay={1.5} amplitud={6} className="bottom-[3%] left-[0%]">
              <div className="flex gap-1.5">
                {['Python', 'SQL', 'Power BI'].map((h) => (
                  <span key={h} className="rounded-full border border-white bg-white px-3 py-1.5 font-mono text-[11px] font-medium whitespace-nowrap text-marca shadow-md">
                    {h}
                  </span>
                ))}
              </div>
            </Flotante>
          </div>
        </motion.div>
      </div>

      {/* Indicador para bajar */}
      <motion.a
        href="#lo-que-hago"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-suave uppercase lg:flex"
      >
        {p.desplazar}
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="size-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  )
}
