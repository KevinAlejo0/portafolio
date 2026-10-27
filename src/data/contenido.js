// Todo el contenido del portafolio vive aquí.
// Para actualizar la web basta con editar este archivo: no hace falta tocar los componentes.
// Cada texto tiene su versión en español (es) y en inglés (en).

export const perfil = {
  nombre: 'Kevin Alejandro Mostacero Bazán',
  nombreCorto: 'Kevin Mostacero',
  foto: 'img/foto-perfil.webp',
  cv: 'cv/CV-Kevin-Mostacero.pdf',
  email: 'kevinalejandro.jqg@gmail.com',
  whatsapp: '51957049768',
  telefono: '+51 957 049 768',
  redes: {
    linkedin: 'https://www.linkedin.com/in/kevin-alejandro-mostacero-bazan-4b5141259/',
    github: 'https://github.com/KevinAlejo0',
    instagram: 'https://www.instagram.com/mbkev1/',
  },
  usuarios: { github: 'KevinAlejo0', instagram: '@mbkev1', linkedin: 'kevin-alejandro-mostacero-bazan' },
}

export const textos = {
  es: {
    nav: { inicio: 'Inicio', proyectos: 'Proyectos', contacto: 'Contacto', cv: 'Descargar CV' },

    hero: {
      estado: 'Disponible para prácticas en análisis de datos',
      saludo: 'Hola, soy Kevin',
      rol: 'Convierto datos desordenados en decisiones claras.',
      bio: 'Estudiante de décimo ciclo de Ingeniería Informática en la Universidad Nacional de Trujillo. Construyo pipelines ETL, dashboards en Power BI y modelos predictivos con Python, y fundé ZeroBaz, un emprendimiento de soluciones digitales.',
      ctaProyectos: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      ubicacion: 'Trujillo · Pacasmayo, Perú',
    },

    foto: { etiqueta: 'Análisis de datos · BI · ML' },

    educacion: {
      titulo: 'Formación',
      universidad: 'Universidad Nacional de Trujillo',
      carrera: 'Ingeniería Informática',
      periodo: 'Abr 2022 – actualidad',
      ciclo: 'Décimo ciclo',
      progreso: 'Ciclo 10 de 10',
    },

    idiomas: {
      titulo: 'Idiomas',
      lista: [
        { nombre: 'Español', nivel: 'Avanzado', valor: 100 },
        { nombre: 'Inglés', nivel: 'Intermedio', valor: 60 },
      ],
    },

    zerobaz: {
      etiqueta: 'Mi emprendimiento',
      cargo: 'Fundador · desde abril de 2026',
      descripcion: 'Fundé ZeroBaz para llevar soluciones digitales a la medida a negocios, emprendedores y estudiantes. Hoy somos un equipo de tres: sumé a dos amigos para atender más proyectos.',
      servicios: ['Sistemas para negocios', 'Páginas web', 'Dashboards y reportes', 'Soporte técnico', 'Asesoría en informes'],
      equipo: 'Equipo de 3',
      cliente: 'Cliente destacado: Bluequest Perú S.A.C. — sistema de pesaje de camiones',
    },

    metricas: {
      titulo: 'Mis datos en números',
      items: [
        { valor: '0.80', unidad: 'R²', texto: 'del modelo LSTM que predice el oleaje a 24 horas' },
        { valor: '33', unidad: 'años', texto: 'de datos horarios usados para entrenarlo' },
        { valor: '6', unidad: 'fichas', texto: 'de indicadores MINSA automatizadas en Power BI' },
        { valor: '1.º', unidad: 'lugar', texto: 'en EXPOTIVE 2025 con el proyecto Casa Domótica' },
      ],
    },

    experiencia: {
      titulo: 'Experiencia',
      verCv: 'Ver CV completo (PDF)',
      lista: [
        {
          cargo: 'Practicante de Análisis de Datos',
          lugar: 'Hospital Distrital de Pacasmayo · MINSA',
          periodo: 'Ago 2026 – actualidad',
          detalle: 'Área de Gestión de la Información: automatizo con Python, SQL Server y Power BI el cálculo de los indicadores de desempeño del hospital.',
        },
        {
          cargo: 'Fundador',
          lugar: 'ZeroBaz',
          periodo: 'Abr 2026 – actualidad',
          detalle: 'Desarrollo de sistemas, páginas web y dashboards para negocios locales, junto a un equipo de tres.',
        },
        {
          cargo: 'Asistente de Análisis de Datos',
          lugar: 'CARLX E.I.R.L.',
          periodo: 'Ago 2025 – Set 2026',
          detalle: 'Donde di mis primeros pasos en análisis de datos durante un año. También desarrollé el sitio web de la empresa.',
        },
        {
          cargo: 'Promotor de créditos y gestión de datos de clientes',
          lugar: 'Evolución Perú Outsourcing S.A.C.',
          periodo: 'Jun 2025 – Set 2025',
          detalle: 'Organización, filtrado y segmentación de la base de clientes para identificar prospectos.',
        },
      ],
    },

    habilidades: {
      titulo: 'Herramientas',
      grupos: [
        { nombre: 'Análisis de datos', items: ['Python', 'pandas', 'SQL', 'Power BI', 'ETL', 'Excel'] },
        { nombre: 'Machine learning', items: ['PyTorch (LSTM)', 'XGBoost', 'scikit-learn', 'CRISP-DM'] },
        { nombre: 'Bases de datos', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Modelado dimensional'] },
        { nombre: 'Desarrollo', items: ['React', 'JavaScript', 'FastAPI', 'Node.js', 'Docker', 'Git'] },
      ],
    },

    ahora: {
      titulo: 'Ahora mismo',
      lista: [
        { etiqueta: 'Terminando', texto: 'mi tesis de predicción de oleaje con redes LSTM' },
        { etiqueta: 'Construyendo', texto: 'ZeroBaz junto a mis dos socios' },
        { etiqueta: 'Apoyando', texto: 'como voluntario en el Voluntariado UNT' },
        { etiqueta: 'Buscando', texto: 'prácticas pre-profesionales en datos o BI' },
      ],
    },

    publicacion: {
      titulo: 'Publicación',
      nombre: 'Sistema de Smart Parking basado en IoT con comunicación MQTT y visualización en tiempo real',
      revista: 'Revista Científica Tecnológica · UNT · Vol. 1, Núm. 1 (2026)',
      rol: 'Coautor · responsable de la capa de datos',
    },

    galeria: {
      titulo: 'Mi día a día',
      subtitulo: 'Lo que hago cuando no estoy frente a los datos.',
      ampliar: 'Ampliar foto',
      cerrar: 'Cerrar',
      anterior: 'Foto anterior',
      siguiente: 'Foto siguiente',
    },

    contacto: {
      titulo: '¿Trabajamos juntos?',
      texto: 'Escríbeme para prácticas, proyectos de datos o una propuesta para tu negocio con ZeroBaz.',
      copiar: 'Copiar correo',
      copiado: '¡Copiado!',
      whatsapp: 'WhatsApp',
    },

    proyectos: {
      titulo: 'Proyectos',
      subtitulo: 'Primero los de datos, que es donde me quiero especializar. Filtra por categoría.',
      destacado: 'Destacado',
      todos: 'Todos',
      categorias: { datos: 'Datos y BI', ml: 'Machine learning', dev: 'Desarrollo', iot: 'IoT' },
    },

    pie: 'Hecho con React y Tailwind',
  },

  en: {
    nav: { inicio: 'Home', proyectos: 'Projects', contacto: 'Contact', cv: 'Download CV' },

    hero: {
      estado: 'Open to data analysis internships',
      saludo: "Hi, I'm Kevin",
      rol: 'I turn messy data into clear decisions.',
      bio: 'Final-year (10th semester) Computer Engineering student at Universidad Nacional de Trujillo. I build ETL pipelines, Power BI dashboards and predictive models with Python, and I founded ZeroBaz, a digital solutions startup.',
      ctaProyectos: 'See projects',
      ctaCv: 'Download CV',
      ubicacion: 'Trujillo · Pacasmayo, Peru',
    },

    foto: { etiqueta: 'Data analysis · BI · ML' },

    educacion: {
      titulo: 'Education',
      universidad: 'Universidad Nacional de Trujillo',
      carrera: 'Computer Engineering',
      periodo: 'Apr 2022 – present',
      ciclo: '10th semester',
      progreso: 'Semester 10 of 10',
    },

    idiomas: {
      titulo: 'Languages',
      lista: [
        { nombre: 'Spanish', nivel: 'Advanced', valor: 100 },
        { nombre: 'English', nivel: 'Intermediate', valor: 60 },
      ],
    },

    zerobaz: {
      etiqueta: 'My startup',
      cargo: 'Founder · since April 2026',
      descripcion: 'I founded ZeroBaz to bring tailor-made digital solutions to businesses, entrepreneurs and students. We are now a team of three: I brought in two friends to take on more projects.',
      servicios: ['Business systems', 'Websites', 'Dashboards & reports', 'Tech support', 'Report consulting'],
      equipo: 'Team of 3',
      cliente: 'Featured client: Bluequest Perú S.A.C. — truck weighing system',
    },

    metricas: {
      titulo: 'My data in numbers',
      items: [
        { valor: '0.80', unidad: 'R²', texto: 'of the LSTM model that forecasts waves 24 hours ahead' },
        { valor: '33', unidad: 'years', texto: 'of hourly data used to train it' },
        { valor: '6', unidad: 'indicators', texto: 'from MINSA health sheets automated in Power BI' },
        { valor: '1st', unidad: 'place', texto: 'at EXPOTIVE 2025 with the Smart Home project' },
      ],
    },

    experiencia: {
      titulo: 'Experience',
      verCv: 'View full CV (PDF, Spanish)',
      lista: [
        {
          cargo: 'Data Analyst Intern',
          lugar: 'Pacasmayo District Hospital · MINSA',
          periodo: 'Aug 2026 – present',
          detalle: 'Information Management area: I automate the hospital’s performance indicators with Python, SQL Server and Power BI.',
        },
        {
          cargo: 'Founder',
          lugar: 'ZeroBaz',
          periodo: 'Apr 2026 – present',
          detalle: 'Building systems, websites and dashboards for local businesses with a team of three.',
        },
        {
          cargo: 'Data Analysis Assistant',
          lugar: 'CARLX E.I.R.L.',
          periodo: 'Aug 2025 – Sep 2026',
          detalle: 'Where I took my first steps in data analysis over a full year. I also built the company’s website.',
        },
        {
          cargo: 'Credit promoter & customer data management',
          lugar: 'Evolución Perú Outsourcing S.A.C.',
          periodo: 'Jun 2025 – Sep 2025',
          detalle: 'Organized, filtered and segmented the customer database to identify prospects.',
        },
      ],
    },

    habilidades: {
      titulo: 'Toolbox',
      grupos: [
        { nombre: 'Data analysis', items: ['Python', 'pandas', 'SQL', 'Power BI', 'ETL', 'Excel'] },
        { nombre: 'Machine learning', items: ['PyTorch (LSTM)', 'XGBoost', 'scikit-learn', 'CRISP-DM'] },
        { nombre: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Dimensional modeling'] },
        { nombre: 'Development', items: ['React', 'JavaScript', 'FastAPI', 'Node.js', 'Docker', 'Git'] },
      ],
    },

    ahora: {
      titulo: 'Right now',
      lista: [
        { etiqueta: 'Finishing', texto: 'my thesis on wave forecasting with LSTM networks' },
        { etiqueta: 'Building', texto: 'ZeroBaz with my two partners' },
        { etiqueta: 'Giving back', texto: 'as a volunteer with the UNT Volunteer Program' },
        { etiqueta: 'Looking for', texto: 'an internship in data or BI' },
      ],
    },

    publicacion: {
      titulo: 'Publication',
      nombre: 'IoT-based Smart Parking system with MQTT communication and real-time visualization',
      revista: 'Revista Científica Tecnológica · UNT · Vol. 1, No. 1 (2026)',
      rol: 'Co-author · in charge of the data layer',
    },

    galeria: {
      titulo: 'A day in my life',
      subtitulo: 'What I do when I am not looking at data.',
      ampliar: 'Enlarge photo',
      cerrar: 'Close',
      anterior: 'Previous photo',
      siguiente: 'Next photo',
    },

    contacto: {
      titulo: 'Shall we work together?',
      texto: 'Reach out about internships, data projects, or a proposal for your business with ZeroBaz.',
      copiar: 'Copy email',
      copiado: 'Copied!',
      whatsapp: 'WhatsApp',
    },

    proyectos: {
      titulo: 'Projects',
      subtitulo: 'Data projects first — that is where I want to specialize. Filter by category.',
      destacado: 'Featured',
      todos: 'All',
      categorias: { datos: 'Data & BI', ml: 'Machine learning', dev: 'Development', iot: 'IoT' },
    },

    pie: 'Built with React and Tailwind',
  },
}

// Galería "Mi día a día": fotos de tu día a día o de tus ratos libres (están en public/img/galeria/).
// forma: 'grande' (2×2) o 'alta' (1×2 en escritorio); sin forma ocupa una celda.
// enfoque: qué parte de la foto se ve en el mosaico (posición horizontal y vertical).
// Con 7 fotos el mosaico queda completo así: 1 grande, 2 altas y 4 normales, en este orden.
// Si la lista queda vacía, la tarjeta no se muestra.
export const galeria = [
  { foto: 'img/galeria/01-voluntariado.webp', forma: 'grande', enfoque: '50% 62%', es: 'Voluntariado UNT', en: 'UNT volunteering' },
  { foto: 'img/galeria/02-accion-social.webp', forma: 'alta', enfoque: '50% 55%', es: 'Acción social', en: 'Community work' },
  { foto: 'img/galeria/03-ajedrez.webp', enfoque: '50% 60%', es: 'Jugando ajedrez', en: 'Playing chess' },
  { foto: 'img/galeria/04-atardecer.webp', forma: 'alta', enfoque: '50% 60%', es: 'Atardeceres', en: 'Sunsets' },
  { foto: 'img/galeria/05-dashboard.webp', enfoque: '30% 38%', es: 'Modo dashboard', en: 'Dashboard mode' },
  { foto: 'img/galeria/06-campus.webp', enfoque: '50% 35%', es: 'Mi campus', en: 'My campus' },
  { foto: 'img/galeria/07-desconectando.webp', enfoque: '50% 60%', es: 'Desconectando', en: 'Unplugging' },
]

// Proyectos: el orden de la lista es el orden en que aparecen.
// categorias: datos | ml | dev | iot   ·   icono: ver ICONOS_PROYECTO en Proyectos.jsx
export const proyectos = [
  {
    id: 'hospital',
    icono: 'hospital',
    destacado: true,
    categorias: ['datos'],
    stack: ['Python', 'pandas', 'SQL Server', 'T-SQL', 'Power BI', 'ETL'],
    es: {
      titulo: 'Dashboard de indicadores hospitalarios',
      contexto: 'Hospital Distrital de Pacasmayo · MINSA · 2026',
      resumen: 'Pipeline de datos completo que automatiza el cálculo de los indicadores de desempeño definidos en las Fichas Técnicas del MINSA, que antes se hacía a mano.',
      puntos: [
        'Limpieza en Python de los archivos de HIS-MINSA, REFCON, CNV y SEEM, con carga incremental a SQL Server (ETL con MERGE).',
        'Modelo de datos por capas que separa los datos personales del esquema que consulta Power BI.',
        'Dashboard en Power BI con semáforo de cumplimiento frente a umbral y logro esperado para 6 fichas técnicas.',
      ],
    },
    en: {
      titulo: 'Hospital indicators dashboard',
      contexto: 'Pacasmayo District Hospital · MINSA · 2026',
      resumen: 'End-to-end data pipeline that automates the performance indicators defined in MINSA technical sheets, previously calculated by hand.',
      puntos: [
        'Python cleaning of HIS-MINSA, REFCON, CNV and SEEM files, with incremental loads into SQL Server (ETL with MERGE).',
        'Layered data model that keeps personal data apart from the schema Power BI reads.',
        'Power BI dashboard with a traffic-light view of target vs. threshold for 6 indicator sheets.',
      ],
    },
  },
  {
    id: 'oleaje',
    icono: 'waves',
    destacado: true,
    categorias: ['ml', 'datos'],
    stack: ['Python', 'PyTorch', 'pandas', 'FastAPI', 'xarray', 'Chart.js'],
    es: {
      titulo: 'Predicción de oleaje en Pacasmayo',
      contexto: 'Proyecto de tesis · 2026',
      resumen: 'Sistema que monitorea y predice la altura de ola de las próximas 24 horas para prevenir riesgos costeros en el contexto del Fenómeno El Niño.',
      puntos: [
        'Red LSTM entrenada con 33 años de histórico horario (Copernicus Marine 1993–2026 y Open-Meteo).',
        'R² de 0.80 y RMSE de 0.11 m en el conjunto de prueba, prediciendo 24 h a partir de las últimas 72 h.',
        'Validado contra 20 avisos reales de oleaje de la DHN, con alertas automáticas por Telegram.',
      ],
    },
    en: {
      titulo: 'Wave forecasting for Pacasmayo',
      contexto: 'Thesis project · 2026',
      resumen: 'A system that monitors and forecasts wave height for the next 24 hours to help prevent coastal risks during El Niño events.',
      puntos: [
        'LSTM network trained on 33 years of hourly history (Copernicus Marine 1993–2026 and Open-Meteo).',
        'R² of 0.80 and RMSE of 0.11 m on the test set, forecasting 24 h from the previous 72 h.',
        'Validated against 20 real wave warnings from Peru’s Navy (DHN), with automatic Telegram alerts.',
      ],
    },
  },
  {
    id: 'ferreteria',
    icono: 'database',
    destacado: false,
    categorias: ['datos', 'ml'],
    stack: ['MySQL', 'ETL', 'Python', 'XGBoost', 'CRISP-DM'],
    es: {
      titulo: 'Migración de BD y modelo predictivo',
      contexto: 'Ferretería García · Curso Base de Datos Avanzada',
      resumen: 'Rediseño y migración de la base de datos de una ferretería, con reportes para la gestión de inventario y ventas.',
      puntos: [
        'Migración a MySQL mediante procesos ETL.',
        'Reportes y visualizaciones de inventario y ventas.',
        'Modelo predictivo con XGBoost siguiendo la metodología CRISP-DM.',
      ],
    },
    en: {
      titulo: 'Database migration & predictive model',
      contexto: 'Ferretería García · Advanced Databases course',
      resumen: 'Redesign and migration of a hardware store’s database, with reports for inventory and sales management.',
      puntos: [
        'Migration to MySQL through ETL processes.',
        'Inventory and sales reports and visualizations.',
        'Predictive model with XGBoost following CRISP-DM.',
      ],
    },
  },
  {
    id: 'parking',
    icono: 'parking',
    destacado: false,
    categorias: ['iot', 'datos'],
    stack: ['IoT', 'MQTT', 'Telegram', 'Bases de datos'],
    es: {
      titulo: 'Smart Parking con MQTT',
      contexto: 'Artículo científico publicado · 2026',
      resumen: 'Parqueo inteligente con sensores IoT, comunicación MQTT y visualización en tiempo real.',
      puntos: [
        'Responsable de la capa de datos: diseño y estructura del almacenamiento.',
        'Integración con Telegram para notificaciones en tiempo real.',
      ],
    },
    en: {
      titulo: 'Smart Parking with MQTT',
      contexto: 'Published research paper · 2026',
      resumen: 'Smart parking with IoT sensors, MQTT messaging and real-time visualization.',
      puntos: [
        'Owned the data layer: storage design and structure.',
        'Telegram integration for real-time notifications.',
      ],
    },
  },
  {
    id: 'arless',
    icono: 'shop',
    destacado: false,
    categorias: ['dev'],
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Culqi'],
    es: {
      titulo: 'Arless Joyería — tienda online',
      contexto: 'E-commerce · 2026',
      resumen: 'Tienda web con catálogo, carrito, pagos en línea y panel de administración.',
      puntos: [
        'Backend en Supabase (PostgreSQL) con Row Level Security para separar clientes y administradores.',
        'Total de cada orden calculado en el servidor para evitar manipulación de precios.',
        'Pagos con Culqi y recibos por correo con Resend.',
      ],
    },
    en: {
      titulo: 'Arless Joyería — online store',
      contexto: 'E-commerce · 2026',
      resumen: 'Web store with catalog, cart, online payments and an admin panel.',
      puntos: [
        'Supabase (PostgreSQL) backend with Row Level Security separating customers and admins.',
        'Order totals computed server-side to prevent price tampering.',
        'Culqi payments and email receipts via Resend.',
      ],
    },
  },
  {
    id: 'bluequest',
    icono: 'truck',
    destacado: false,
    categorias: ['dev'],
    stack: ['Electron', 'JavaScript', 'Excel'],
    es: {
      titulo: 'Bluequest Pesaje',
      contexto: 'ZeroBaz para Bluequest Perú S.A.C. · 2026',
      resumen: 'Aplicación de escritorio para registrar camiones, pesos, sub lotes y precintos en el despacho por báscula.',
      puntos: [
        'Funciona sin internet: los datos se guardan en el propio equipo.',
        'Exporta los registros a Excel y se entrega como programa portable para Windows.',
      ],
    },
    en: {
      titulo: 'Bluequest Weighing',
      contexto: 'ZeroBaz for Bluequest Perú S.A.C. · 2026',
      resumen: 'Desktop app to log trucks, weights, sub-lots and seals during scale dispatch.',
      puntos: [
        'Works fully offline: data stays on the device.',
        'Exports records to Excel and ships as a portable Windows app.',
      ],
    },
  },
  {
    id: 'carlx',
    icono: 'globe',
    destacado: false,
    categorias: ['dev'],
    stack: ['React', 'TypeScript', 'Tailwind', 'Prisma'],
    es: {
      titulo: 'CARLX E.I.R.L. — sitio web',
      contexto: 'Web corporativa · 2026',
      resumen: 'Sitio de una empresa de servicios industriales, con inicio de sesión y paneles para administrador y colaboradores.',
      puntos: ['Frontend en React + TypeScript y backend con Prisma.'],
    },
    en: {
      titulo: 'CARLX E.I.R.L. — website',
      contexto: 'Corporate website · 2026',
      resumen: 'Website for an industrial services company, with login and dashboards for admins and staff.',
      puntos: ['React + TypeScript frontend and a Prisma backend.'],
    },
  },
  {
    id: 'domotica',
    icono: 'home',
    destacado: false,
    categorias: ['iot'],
    stack: ['IoT', 'Circuitos', 'App de control'],
    es: {
      titulo: 'Casa Domótica',
      contexto: '1.er lugar · EXPOTIVE 2025 · UNT',
      resumen: 'Maqueta de casa inteligente controlada a distancia bajo arquitectura IoT.',
      puntos: ['Ensamblé la maqueta, conecté los circuitos y desarrollé la aplicación de control remoto.'],
    },
    en: {
      titulo: 'Smart Home',
      contexto: '1st place · EXPOTIVE 2025 · UNT',
      resumen: 'Remotely controlled smart-home model built on an IoT architecture.',
      puntos: ['Built the model, wired the circuits and developed the remote control app.'],
    },
  },
]
