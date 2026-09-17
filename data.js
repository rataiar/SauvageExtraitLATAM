/* ==========================================================================
   SAUVAGE EXTRAIT — LATIN AMERICA
   Data layer — figures and identities below reflect the source document plus
   explicit corrections and confirmations supplied directly by the PR &
   Communications team after the initial audit. Nothing here is invented.
   ========================================================================== */

const SITE = {
  brand: "DIOR BEAUTY",
  campaign: "SAUVAGE EXTRAIT",
  region: "LATIN AMERICA",
  location: "Santiago, Chile",
  tripDates: "September 2–4",
  eventDate: "September 3",
  year: "2026",

  // Combined Event + Educational Trip totals, shown on the landing page —
  // taken directly from the source document's own OVERALL PERFORMANCE block.
  overall: {
    kpis: [
      { value: "730", label: "VIT Generated" },
      { value: "295", label: "Pieces of Content" },
      { value: "120.1K", label: "Engagement" },
      { value: "3.59M", label: "Impressions" },
      { value: "1.15%", label: "Engagement Rate" },
    ],
  },
};

/* ---------------------------------------------------------------------- *
 * EVENT
 * ---------------------------------------------------------------------- */
const EVENT = {
  kpis: [
    { value: "479", label: "VIT Generated" },
    { value: "139", label: "Pieces of Content" },
    { value: "72K", label: "Engagement" },
    { value: "18", label: "Talents Present" },
    { value: "1.82M", label: "Impressions" },
    { value: "1.24%", label: "Engagement Rate" },
  ],
  summary:
    "The Sauvage Extrait launch convened eighteen talents from four Latin American markets — Chile, Argentina, Uruguay, and Mexico — inside a single evening. Their coverage produced 139 pieces of content and 479 VIT, translating an evening of presence into measurable digital reach. Engagement reached 72K interactions across the talent community, at a 1.24% engagement rate.",

  // "THE GUESTS" — every profile from the EVENT VIT PER PROFILE table.
  // Shown by Instagram handle only, by direct instruction from the PR team.
  guests: [
    { handle: "mr.rossperfumes", name: "Matias Ross", confirmedName: true, country: "Chile", vit: "255", posts: 6, url: "https://www.instagram.com/mr.rossperfumes" },
    { handle: "agus.correas", name: "Agustin Correas", confirmedName: true, country: "Argentina", vit: "79.8", posts: 17, url: "https://www.instagram.com/agus.correas" },
    { handle: "itschily", name: "Alexander Taramasco", confirmedName: true, country: "Uruguay", vit: "38", posts: 14, url: "https://www.instagram.com/itschily" },
    { handle: "ilangoldsztein_", name: "Ilan Goldsztein", confirmedName: true, country: "Chile", vit: "25.6", posts: 13, url: "https://www.instagram.com/ilangoldsztein_" },
    { handle: "danojzr", name: "Daniel Jimenez", confirmedName: true, country: "Mexico", vit: "23.7", posts: 4, url: "https://www.instagram.com/danojzr" },
    { handle: "viviannedietz", name: null, confirmedName: false, country: "Chile", vit: "14.1", posts: 3, url: "https://www.instagram.com/viviannedietz" },
    { handle: "tonnmartin", name: "Tonn Martin", confirmedName: true, country: "Argentina", vit: "12.3", posts: 11, url: "https://www.instagram.com/tonnmartin" },
    { handle: "matiperfumess", name: null, confirmedName: false, country: "Chile", vit: "6.4", posts: 6, url: "https://www.instagram.com/matiperfumess" },
    { handle: "danielmolero", name: "Daniel Molero", confirmedName: true, country: "Chile", vit: "6", posts: 13, url: "https://www.instagram.com/danielmolero" },
    { handle: "luckiscents", name: "Lucas Ramirez", confirmedName: true, country: "Chile", vit: "4.45", posts: 13, url: "https://www.instagram.com/luckiscents" },
    { handle: "mr.elixiroficial", name: "Benjamin Navarro", confirmedName: true, country: "Chile", vit: "3.68", posts: 7, url: "https://www.instagram.com/mr.elixiroficial" },
    { handle: "claricapelli", name: null, confirmedName: false, country: "Chile", vit: "2.84", posts: 4, url: "https://www.instagram.com/claricapelli" },
    { handle: "vale.perfumatica", name: "Vale Perfumatica", confirmedName: true, country: "Chile", vit: "2.15", posts: 9, url: "https://www.instagram.com/vale.perfumatica" },
    { handle: "karenblauu", name: null, confirmedName: false, country: "Chile", vit: "1.97", posts: 3, url: "https://www.instagram.com/karenblauu" },
    { handle: "mel.sbyrt", name: null, confirmedName: false, country: "Chile", vit: "1.42", posts: 6, url: "https://www.instagram.com/mel.sbyrt" },
    { handle: "____luk", name: null, confirmedName: false, country: "Chile", vit: "0.91", posts: 3, url: "https://www.instagram.com/____luk" },
    { handle: "sofiamekis", name: null, confirmedName: false, country: "Chile", vit: "0.64", posts: 4, url: "https://www.instagram.com/sofiamekis" },
    { handle: "alfredperfumes", name: null, confirmedName: false, country: "Chile", vit: "0.49", posts: 3, url: "https://www.instagram.com/alfredperfumes" },
  ],

  // Individual EVENT CONTENT credits, exactly as captioned in the source document —
  // every piece from the 02_EVENT/CONTENT folder, each with a preview image.
  content: [
    { url: "https://www.instagram.com/p/Dc2JSIXjC3W", name: "Matias Ross", country: "Chile", vit: "243", preview: "assets/event/coverage-preview/matias-ross.jpg" },
    { url: "https://www.instagram.com/p/DdCqzp5yI9J", name: "Ilan Goldsztein", country: "Chile", vit: "0.91", preview: "assets/event/coverage-preview/ilan.jpg" },
    { url: "https://www.instagram.com/p/DdAJok4AEYq", name: "Alexander Taramasco", country: "Uruguay", vit: "2.49", preview: "assets/event/coverage-preview/alexander-02.jpg" },
    { url: "https://www.instagram.com/p/Dc3-HY6FBjr", name: "Alexander Taramasco", country: "Uruguay", vit: "9.16", preview: "assets/event/coverage-preview/alexander-01.jpg" },
    { url: "https://www.instagram.com/p/Dc4zSw5FEcX?img_index=1", name: "Benjamin Navarro", country: "Chile", vit: "0.67", preview: "assets/event/coverage-preview/benjamin.jpg" },
    { url: "https://www.tiktok.com/@agus.correas/video/7681548582897454357", name: "Agustin Correas", country: "Argentina", vit: "14.1", preview: "assets/event/coverage-preview/agustin-141.jpg" },
    { url: "https://www.instagram.com/p/Dc4s29YFrRx", name: "Daniel Rodriguez", country: "Mexico", vit: "10.2", preview: "assets/event/coverage-preview/daniel-rodriguez.jpg" },
    { url: "https://www.tiktok.com/@lllllucas777/photo/7681826501020454165", name: "Lucas Ramirez", country: "Chile", vit: "1.03", preview: "assets/event/coverage-preview/lucas.jpg" },
    { url: "https://www.instagram.com/p/Dc4bNaQmNVC", name: "Daniel Molero", country: "Chile", vit: "1.38", preview: "assets/event/coverage-preview/daniel-molero.jpg" },
    { url: "https://www.instagram.com/p/Dc4MpVLmkvZ", name: "Vale Perfumatica", country: "Chile", vit: "0.92", preview: "assets/event/coverage-preview/vale.jpg" },
    { url: "https://www.tiktok.com/@agus.correas/video/7681701994049981716", name: "Agustin Correas", country: "Argentina", vit: "8.72", preview: "assets/event/coverage-preview/agustin-872.jpg" },
    { url: "https://www.instagram.com/p/DdPrSeoCaAT", name: "Karen Blau", country: "Chile", vit: "1.68", preview: "assets/event/coverage-preview/karen.jpg" },
    { url: "https://www.instagram.com/p/DdHzH8nmrxL", name: "Clara Capelli", country: "Chile", vit: "2.38", preview: "assets/event/coverage-preview/clara.jpg" },
    { url: "https://www.tiktok.com/@danielmollero/video/7682798063366262017", name: "Daniel Molero", country: "Chile", vit: "0.5", preview: "assets/event/coverage-preview/daniel-molero-2.jpg" },
    { url: "https://www.instagram.com/p/Dc4ApcDli2h?img_index=1", name: "Mati Perfumes", country: "Chile", vit: "1.29", preview: "assets/event/coverage-preview/mati.jpg" },
    { url: "https://www.instagram.com/p/DdO5kYqDsd0", name: "Mel Sbyrt", country: "Chile", vit: "0.8", preview: "assets/event/coverage-preview/mel.jpg" },
    { url: "https://www.instagram.com/p/DdR-3GeH1zZ?img_index=1", name: "Lucrecia Dalma", country: "Chile", vit: "0.77", preview: "assets/event/coverage-preview/lucrecia.jpg" },
  ],
};

/* ---------------------------------------------------------------------- *
 * EDUCATIONAL TRIP
 * ---------------------------------------------------------------------- */
const TRIP = {
  kpis: [
    { value: "251", label: "VIT Generated" },
    { value: "156", label: "Pieces of Content" },
    { value: "48.1K", label: "Engagement" },
    { value: "8", label: "Fragrance Reviewers" },
    { value: "1.77M", label: "Impressions" },
    { value: "1.05%", label: "Engagement Rate" },
  ],
  summary:
    "Eight Fragrance Reviewers from Chile, Argentina, Uruguay, and Mexico were immersed for three days in the world of Sauvage Extrait — from a guided masterclass on the fragrance's construction to the launch event itself. That expertise translated into 156 pieces of content and 251 VIT, reaching 1.77M impressions at a 1.05% engagement rate.",

  // THE FRAGRANCE REVIEWERS — exactly the 8 profiles from the TRIP VIT PER
  // PROFILE table. Equal editorial treatment; not sorted by performance.
  reviewers: [
    {
      handle: "mr.rossperfumes",
      name: "Matias Ross",
      confirmedName: true,
      country: "Chile",
      vit: "14.1",
      posts: 6,
      url: "https://www.instagram.com/mr.rossperfumes",
      portrait: "assets/trip/portraits/mr-rossperfumes.jpg",
      content: [
        { url: "https://www.instagram.com/p/Dc2JSIXjC3W", label: "Content 01", vit: "243", activation: "Event" },
      ],
    },
    {
      handle: "agus.correas",
      name: "Agustin Correas",
      confirmedName: true,
      country: "Argentina",
      vit: "94.7",
      posts: 24,
      url: "https://www.instagram.com/agus.correas",
      portrait: "assets/trip/portraits/agus-correas.jpg",
      content: [
        { url: "https://www.instagram.com/p/Dc6JVOBuU_3", label: "Content 01", vit: "9.31", activation: "Trip" },
        { url: "https://www.tiktok.com/@agus.correas/video/7681548582897454357", label: "Content 02", vit: "14.1", activation: "Event" },
        { url: "https://www.tiktok.com/@agus.correas/video/7681701994049981716", label: "Content 03", vit: "8.72", activation: "Event" },
      ],
    },
    {
      handle: "itschily",
      name: "Alexander Taramasco",
      confirmedName: true,
      country: "Uruguay",
      vit: "53.7",
      posts: 27,
      url: "https://www.instagram.com/itschily",
      portrait: "assets/trip/portraits/itschily.jpg",
      content: [
        { url: "https://www.tiktok.com/@itschily/video/7682131102063971592", label: "Content 01", vit: "1.12", activation: "Trip" },
        { url: "https://www.instagram.com/p/Dc0wTq3Rthk", label: "Content 02", vit: "7.28", activation: "Trip" },
        { url: "https://www.instagram.com/p/DdAJok4AEYq", label: "Content 03", vit: "2.49", activation: "Event" },
      ],
    },
    {
      handle: "ilangoldsztein_",
      name: "Ilan Goldsztein",
      confirmedName: true,
      country: "Chile",
      vit: "40.7",
      posts: 19,
      url: "https://www.instagram.com/ilangoldsztein_",
      portrait: "assets/trip/portraits/ilangoldsztein.jpg",
      content: [
        { url: "https://www.instagram.com/p/Dc3igRFRcuN", label: "Content 01", vit: "10.8", activation: "Trip" },
        { url: "https://www.tiktok.com/@ilangm/video/7682124010565422343", label: "Content 02", vit: "1.9", activation: "Trip" },
        { url: "https://www.instagram.com/p/DdCqzp5yI9J", label: "Content 03", vit: "0.91", activation: "Event" },
      ],
    },
    {
      handle: "danojzr",
      name: "Daniel Jimenez",
      confirmedName: true,
      country: "Mexico",
      vit: "23.2",
      posts: 16,
      url: "https://www.instagram.com/danojzr",
      portrait: "assets/trip/portraits/danojzr.jpg",
      content: [
        { url: "https://www.instagram.com/p/DdAKhsQFrpW?img_index=1", label: "Content 01", vit: "11.7", activation: "Trip" },
      ],
    },
    {
      handle: "tonnmartin",
      name: "Tonn Martin",
      confirmedName: true,
      country: "Argentina",
      vit: "13.7",
      posts: 16,
      url: "https://www.instagram.com/tonnmartin",
      portrait: "assets/trip/portraits/tonnmartin.jpg",
      content: [
        { url: "https://www.instagram.com/p/Dc4hmGGiXgJ?img_index=1", label: "Content 01", vit: "2.69", activation: "Trip" },
        { url: "https://www.tiktok.com/@tonnmartin/video/7681346868193807636", label: "Content 02", vit: "0.55", activation: "Trip" },
      ],
    },
    {
      handle: "luckiscents",
      name: "Lucas Ramirez",
      confirmedName: true,
      country: "Chile",
      vit: "6.12",
      posts: 28,
      url: "https://www.instagram.com/luckiscents",
      portrait: "assets/trip/portraits/luckiscents.jpg",
      content: [
        { url: "https://www.tiktok.com/@lllllucas777/video/7682101414721588500", label: "Content 01", vit: "0.87", activation: "Trip" },
        { url: "https://www.instagram.com/p/Dc6-AeUSgRr", label: "Content 02", vit: "0.58", activation: "Trip" },
        { url: "https://www.instagram.com/p/Dczh_rytC2n", label: "Content 03", vit: "0.48", activation: "Trip" },
      ],
    },
    {
      handle: "mr.elixiroficial",
      name: "Benjamin Navarro",
      confirmedName: true,
      country: "Chile",
      vit: "4.71",
      posts: 20,
      url: "https://www.instagram.com/mr.elixiroficial",
      portrait: "assets/trip/portraits/mrelixiroficial.jpg",
      content: [
        { url: "https://www.instagram.com/p/Dc4zSw5FEcX?img_index=1", label: "Content 01", vit: "0.67", activation: "Event" },
        { url: "https://www.tiktok.com/@mr.elixiroficial/video/7682074819411643668", label: "Content 02", vit: "2.66", activation: "Trip" },
      ],
    },
  ],

  // THE JOURNEY — dates, venues, and descriptions as provided directly by
  // the PR & Communications team (not present in the source document).
  journey: [
    {
      day: "DAY 01",
      date: "September 2",
      title: "Arrival & Welcome Dinner",
      location: "Bidasoa Hotel · Carnal, Santiago de Chile",
      description:
        "International guests arrived in Santiago and settled in at the Bidasoa Hotel, with a free afternoon to rest after their journey. The day closed with an informal dinner at Carnal at 9:00 PM — the first opportunity for the group to meet, beginning the trip on a note of welcome ahead of the days to come.",
      media: [
        { type: "image", src: "assets/trip/journey/hotel-01.jpg", w: 1024, h: 768 },
        { type: "image", src: "assets/trip/journey/hotel-02.jpg", w: 768, h: 576 },
      ],
    },
    {
      day: "DAY 02",
      date: "September 3",
      title: "Masterclass, Lunch & the Sauvage Extrait Event",
      location: "Santiago de Chile",
      activities: [
        {
          time: "Morning",
          title: "Fragrance Masterclass",
          location: "Bidasoa Hotel, Santiago de Chile",
          description:
            "Following breakfast at the hotel, guests gathered at 10:00 AM for an exclusive masterclass guided by Pablo Schenfeld, Regional Fragrance Ambassador, dedicated to the essence of the Sauvage line and the universe behind Sauvage Extrait.",
          media: [
            { type: "video", src: "assets/trip/journey/masterclass-01.mp4", poster: "assets/trip/journey/masterclass-01-poster.jpg" },
            { type: "video", src: "assets/trip/journey/masterclass-02.mp4", poster: "assets/trip/journey/masterclass-02-poster.jpg" },
          ],
        },
        {
          time: "Midday",
          title: "Lunch at Mestizo",
          location: "Mestizo, Parque Bicentenario, Santiago de Chile",
          description:
            "At 1:00 PM the group moved to Mestizo restaurant in Bicentennial Park for lunch, followed by a free afternoon before the evening's main event.",
          media: [],
        },
        {
          time: "Evening",
          title: "Sauvage Extrait Event",
          location: "Santiago de Chile",
          description:
            "At 7:00 PM, the group joined the Sauvage Extrait launch event — the maximum and most noble expression of the fragrance, experienced in full after two days of relationship-building and fragrance education.",
          media: [],
          linksToEvent: true,
        },
      ],
    },
  ],
};
