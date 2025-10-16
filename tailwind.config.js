/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-primary': '#0000FF',      // Blue
        'light-secondary': '#0047AB',    // Cobalt Blue
        'light-bg': '#FFFFFF',           // White
        
        // Dark mode colors
        'dark-primary': '#8A2BE2',       // Violet
        'dark-secondary': '#800080',     // Purple
        'dark-accent': '#FF69B4',        // Pink
        'dark-bg': '#000000',            // Black
      }
    }
  }
}
