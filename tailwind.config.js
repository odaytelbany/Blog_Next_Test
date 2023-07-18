/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/About/page.js",
    "./src/app/Blog/page.js",
    "./src/app/Contact/page.js",
    "./src/app/Dashboard/page.js",
    "./src/app/Portofolio/page.js",
    "./src/app/page.js",
    "./src/app/layout.js",
    "./src/components/Footer/Footer.jsx",
    "./src/components/Navbar/Navbar.jsx",
    // "./src/components/Button/Button.jsx",
  ],
  theme: {
    extend: {
      height: {
        '500': '500px',
        '400': '400px',
        '300': '300px',
        '200': '200px',
      }
    },
  },
  plugins: [],
}

