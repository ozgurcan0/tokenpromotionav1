/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f5ff',
        secondary: '#7000ff',
        dark: '#060714',
        light: '#ffffff',
        'gray-custom': '#8a8f98',
      },
      backgroundColor: {
        'card': 'rgba(255, 255, 255, 0.05)',
      },
      textColor: {
        'primary': '#00f5ff',
        'secondary': '#7000ff',
        'light': '#ffffff',
        'gray-custom': '#8a8f98',
      },
      borderColor: {
        'primary': '#00f5ff',
        'secondary': '#7000ff',
      }
    },
  },
  plugins: [],
}
