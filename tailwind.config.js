/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Poppins', 'Inter', 'Roboto', 'Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
         },
         colors: {
            gray: {
               50: '#F9FAFB',
               100: '#EFEFEF',
               300: '#F3F4F6',
               400: '#9CA3AF',
            },
         }
      },
   },
   plugins: [],
}; 