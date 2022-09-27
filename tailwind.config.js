/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
            '16': 'repeat(16, minmax(0, 1fr))',
        },
        gridColumn: {
            'span-13': 'span 13 / span 13',
            'span-14': 'span 14 / span 14',
            'span-15': 'span 15 / span 15',
            'span-16': 'span 16 / span 16',
        },
        gridColumnStart: {
            '13': '13',
            '14': '14',
            '15': '15',
            '16': '16',
            '17': '17',
        },
        gridColumnEnd: {
            '13': '13',
            '14': '14',
            '15': '15',
            '16': '16',
            '17': '17',
        }
    },
  },
  plugins: [],
}
