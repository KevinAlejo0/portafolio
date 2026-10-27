# Portafolio web — Kevin Mostacero

Portafolio personal en estilo *bento grid* (React + Vite + Tailwind), bilingüe español/inglés y orientado al análisis de datos.

## Cómo verlo en tu computadora

```bash
npm install
npm run dev
```

Abre la dirección que aparece en la terminal (por ejemplo `http://localhost:5173`).

## Cómo editar el contenido

Todo el texto está en **`src/data/contenido.js`**: perfil, redes, experiencia, idiomas, herramientas, "Mi día a día" y la lista de proyectos. Cada texto tiene versión `es` y `en`.

- **Agregar un proyecto:** copia uno de los objetos de la lista `proyectos` y cambia sus datos. El orden de la lista es el orden en la página.
- **Cambiar la foto:** reemplaza `public/img/foto-perfil.webp` (proporción 4:5).
- **Actualizar el CV:** reemplaza `public/cv/CV-Kevin-Mostacero.pdf`.

## Publicarlo gratis

1. Sube la carpeta a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com), importa el repositorio y pulsa *Deploy* (detecta Vite solo).
3. Te da un enlace del tipo `kevin-mostacero.vercel.app`, que puedes poner en tu CV y LinkedIn.

`npm run build` genera la versión final en `dist/`, que también sirve para GitHub Pages o Netlify.
