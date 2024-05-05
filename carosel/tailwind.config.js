/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
 
    theme: {
      extend: {
        height: {
          'custom': '200px', // Define your custom height value
          'custom-lg': '400px', // Another custom height value
        },
        width: {
          'custom': '200px', // Define your custom height value
          'custom-lg': '600px', // Another custom height value
        },
      },
  },
  plugins: [],
}

