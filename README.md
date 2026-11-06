# Colima SAD – Landing

React 18 + Vite.

## Uso
```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # genera /dist
```

## Estructura
```
src/
  config/site.js          nombre y enlace de Facebook
  data/apps.js            tarjetas de apps
  data/mock.js            datos de ejemplo (rutas, baches, planes, post)
  styles/global.css       estilos y paleta (variables en :root)
  components/
    layout/               Header, Footer
    sections/             Hero, LatestPost, Apps, Cta
    apps/                 demos: RutasDemo, BachesDemo, PlanDemo
    ui/Reveal.jsx         animación de aparición al hacer scroll
  assets/perfil.png       foto de perfil
```

## Para conectar después
- Última publicación: reemplazar `POST` en `data/mock.js` por datos de la Graph API (desde un backend, nunca con el token en el front).
- Rutas, baches y planes: reemplazar `RUTAS`, `BACHES`, `PLANES` por tu API.
- Cuando una app crezca, muévela a su propia página (React Router).
