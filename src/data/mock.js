// DATOS DE EJEMPLO: reemplazar por datos reales o por llamadas a una API.
export const RUTAS = {
  "Ruta 1": { paradas: ["Terminal", "Centro", "Hospital", "Universidad"], cada: "12 min" },
  "Ruta 5": { paradas: ["Villa de Álvarez", "Mercado", "Parque Hidalgo", "Jardín Núñez"], cada: "15 min" },
  "Ruta 8": { paradas: ["Comala", "Entronque", "Centro", "Central"], cada: "20 min" },
};

export const BACHES = [
  { x: 22, y: 30, n: "Av. Ejemplo y Calle 1" },
  { x: 55, y: 58, n: "Col. Centro" },
  { x: 76, y: 28, n: "Libramiento" },
  { x: 38, y: 72, n: "Col. Ejemplo" },
];

export const PLANES = [
  "Laguna de La María", "Pueblo blanco de Comala", "Centro histórico",
  "Playa Miramar", "Laguna de Cuyutlán", "Parque Piedra Lisa",
];

// Aquí irá la última publicación de Facebook (Graph API).
export const POST = {
  date: "Hace 2 horas",
  text: "Aquí irá el texto de la última publicación de la página. Se mostrará automáticamente al conectar la API de Facebook.",
  image: null,
  likes: 1280, comments: 94, shares: 310,
};
