export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        miro: ["'Montserrat'", "sans-serif"],
      },
      colors: {
        'miro-blue': '#0057B8',     // Azul primario (inspirado en Miró)
        'miro-red': '#E60026',      // Rojo brillante
        'miro-yellow': '#FFD700',   // Amarillo solar
        'miro-black': '#1A1A1A',    // Negro intenso (más artístico que negro puro)
      },
    },
  },
  plugins: [],
}
