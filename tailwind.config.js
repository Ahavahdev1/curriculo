/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Habilita dark mode baseado em classe no HTML
    content: [
      "./dist/**/*.{html,js}" // Diz ao Tailwind onde procurar classes
    ],
    theme: {
      extend: {
        // Exemplo: Adicionando a fonte 'Inter' se você a incluiu no HTML
        fontFamily: {
           sans: ['Inter', 'sans-serif'],
        },
        // Você pode estender cores, espaçamentos, etc., aqui
        // colors: {
        //   'brand-blue': '#007bff',
        // }
      },
    },
    plugins: [],
  }