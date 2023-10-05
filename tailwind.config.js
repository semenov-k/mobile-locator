/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    spacing: {
      0: '0px',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
    },
    fontSize: {
      xs: '16px',
      s: '20px',
      m: '24px',
      l: '36px',
      xxl: '64px',
      xxxl: '86px'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#002D72',
        secondary: '#0066FF',
        accent: '#FFFFFF',
        error: '#E92828',
      }
    },
  },
  plugins: [],
}

