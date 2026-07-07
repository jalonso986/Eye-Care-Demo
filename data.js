/*
 * ⚠️ DEMO FIXTURE ONLY — NOT FOR PRODUCTION
 * This file contains FICTIONAL demo data (patient "Carla Aveiro
 * Pérez") used for a sales demo. Do NOT commit real patient data
 * (names, clinical details, prices tied to a real person) to this
 * file or any file in this repository.
 */

/* =====================================================================
   data.js — single source of truth for the Eye-Care Virtual Patient
   Card. index.html is a generic engine; everything patient- or
   clinic-specific lives HERE and only here.
   ===================================================================== */

const CLINIC = {
  name: 'Clínica Baviera',
  address: 'Paseo de la Castellana, 20 - Madrid',
  logo: 'assets/logo_baviera.jpg'
};

const PATIENT = {
  name: 'Carla Aveiro Pérez',
  firstName: 'Carla',
  initials: 'CA'          // no patient photo in this demo — initials avatar
};

const DOC = {
  title: 'Tu plan de tratamiento personalizado',
  subtitle: 'Cirugía de catarata'
};

const HERO = {
  background: 'assets/header_bg.jpg'
};

/* ── BLOQUE 1 — Qué hemos detectado ─────────────────────────────── */
const FINDINGS = {
  images: ['assets/eye_1.jpg', 'assets/eye_2.jpg', 'assets/eye_3.jpg'],
  text: 'Opacificación inicial del cristalino que provoca visión borrosa, deslumbramiento y dificultad para ver de noche. Es la causa de tus síntomas visuales actuales.',
  resultsTitle: 'Resultados principales',
  resultsColumns: ['Ojo derecho', 'Ojo izquierdo'],
  resultsRows: [
    {
      icon: 'glasses',
      label: 'Agudeza visual (con gafas)',
      od: { text: 'Visión reducida — detalles lejanos algo borrosos', detail: '0,5 · 20/40' },
      oi: { text: 'Visión algo mejor, pero también afectada',          detail: '0,6 · 20/30' }
    },
    {
      icon: 'droplet',
      label: 'Presión del ojo',
      od: { text: 'Normal', detail: '14 mmHg' },
      oi: { text: 'Normal', detail: '15 mmHg' }
    },
    {
      icon: 'lens',
      label: 'Estado del cristalino',
      od: { text: 'Catarata inicial (grado 2)', detail: '' },
      oi: { text: 'Catarata inicial (grado 2)', detail: '' }
    },
    {
      icon: 'eye',
      label: 'Resto del ojo',
      od: { text: 'Sin otras alteraciones', detail: '' },
      oi: { text: 'Sin otras alteraciones', detail: '' }
    }
  ]
};

/* ── BLOQUE 2 — Tratamiento propuesto ───────────────────────────── */
const PHASES = [
  {
    step: 1,
    title: 'Evaluación prequirúrgica',
    description: 'Revisión completa con biometría y pruebas para confirmar la lente intraocular más adecuada para ti.',
    chip: 'Próxima cita disponible'
  },
  {
    step: 2,
    title: 'Cirugía de catarata con lente intraocular',
    description: 'Procedimiento seguro, rápido (15-20 min) y ambulatorio. Sustituimos el cristalino opaco por una lente intraocular (ver opciones en el apartado de precios).',
    chip: 'Duración: 15-20 min'
  },
  {
    step: 3,
    title: 'Revisiones postoperatorias',
    description: 'Seguimiento para asegurar una recuperación óptima y ajustar el tratamiento si es necesario.',
    chip: '1 día, 1 semana, 1 mes'
  }
];

/* ── BLOQUE 3 — Qué pasa si se pospone ──────────────────────────── */
const RISKS = [
  { title: 'Progresión de la catarata',            text: 'La visión seguirá empeorando de forma gradual.' },
  { title: 'Mayor sensibilidad al deslumbramiento', text: 'Especialmente al conducir de noche o con luces intensas.' },
  { title: 'Pérdida de calidad de vida',            text: 'Dificultad para leer, reconocer rostros y realizar actividades diarias.' },
  { title: 'Posibles complicaciones',               text: 'Cataratas muy avanzadas pueden aumentar el riesgo quirúrgico.' }
];

/* ── BLOQUE 4 — Resultado esperado ──────────────────────────────── */
const EXPECTED_RESULT = {
  subtitle: 'Así es como podrías ver después de la cirugía',
  image: 'assets/resultado.png',   // single image; "before" side gets a CSS blur filter
  labelBefore: 'Visión con catarata',
  labelAfter: 'Visión después de la cirugía',
  benefits: [
    { icon: 'sharp', title: 'Mayor nitidez',          text: 'Verás con claridad objetos lejanos y cercanos.' },
    { icon: 'sun',   title: 'Menos deslumbramiento',  text: 'Mejor visión nocturna y en condiciones de mucha luz.' },
    { icon: 'heart', title: 'Mejor calidad de vida',  text: 'Más independencia para tus actividades diarias.' }
  ],
  disclaimer: '✨ Imagen ilustrativa generada digitalmente. El resultado visual puede variar según cada paciente. Tu oftalmólogo/a te explicará qué esperar en tu caso.'
};

/* ── BLOQUE 5 — Precio y financiación ───────────────────────────── */
const LENSES = {
  subtitle: 'Opciones de lentes intraoculares',
  note: 'Precios orientativos. Tu especialista te recomendará la opción más adecuada.',
  /* Row labels (first, sticky column of the comparison table) */
  rowLabels: [
    'Visión lejana',
    'Visión intermedia',
    'Visión cercana',
    'Corrige astigmatismo',
    'Dependencia gafas',
    'Cobertura SNS',
    'Seguro privado',
    'Precio (por ojo)'
  ],
  /* One column per lens. `values` follows rowLabels order.
     Numeric value = star rating (out of 5); string = literal cell. */
  columns: [
    {
      name: 'Monofocal',
      tag: 'esférica',
      accent: '#1B2A5E',
      values: [4, 1, 1, 'No', 'Alta', 'Sí (lente básica)', 'Parcial', 'Desde 900 €'],
      details: 'Lente de una sola distancia focal, normalmente ajustada para ver bien de lejos. Necesitarás gafas para leer y para distancias intermedias. Es la opción cubierta por la sanidad pública.'
    },
    {
      name: 'Monofocal tórica',
      tag: 'corrige astigmatismo',
      accent: '#0E8F87',
      values: [4, 1, 1, 'Sí', 'Media', 'No', 'Parcial', 'Desde 1.400 €'],
      details: 'Igual que la monofocal, pero corrige también el astigmatismo corneal. Buena visión lejana sin gafas si tienes astigmatismo; seguirás necesitando gafas de cerca.'
    },
    {
      name: 'EDOF',
      tag: 'visión extendida',
      accent: '#D97706',
      values: [5, 4, 3, 'No', 'Baja', 'No', 'Parcial', 'Desde 2.200 €'],
      details: 'Lente de foco extendido: muy buena visión lejana e intermedia (ordenador, salpicadero del coche) con menos halos nocturnos que las multifocales. Para letra muy pequeña puede hacer falta una gafa de apoyo.'
    },
    {
      name: 'Multifocal trifocal',
      tag: 'lejos · media · cerca',
      accent: '#7C3AED',
      values: [5, 4, 5, 'Sí', 'Muy baja', 'No', 'Parcial', 'Desde 2.800 €'],
      details: 'Cubre las tres distancias (lejos, intermedia y cerca) y puede corregir astigmatismo. Máxima independencia de las gafas; algunas personas notan halos alrededor de las luces por la noche, que suelen disminuir con el tiempo.'
    }
  ]
};

const FINANCING = {
  band: 'Financiación disponible hasta 24 meses sin intereses. Nuestro equipo te ayudará a elegir la mejor opción para ti.',
  ctaLabel: 'Quiero más información 💬',
  ctaHref: 'https://wa.me/4917650583095',
  closing: '¿Dudas? Habla con tu oftalmólogo/a en tu próxima visita o escríbenos.'
};

/* ── FOOTER ─────────────────────────────────────────────────────── */
const FOOTER = {
  note: 'Este documento es informativo y no sustituye la consulta médica.'
};
