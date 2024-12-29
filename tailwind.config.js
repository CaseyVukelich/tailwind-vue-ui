/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'monochrome': {
          10: '#AEB1B8',
          20: '#8D9097',
          30: '#6C6F76',
          40: '#4B4E55',
          50: '#2A2D34'
        },
        'cream': {
          10: '#FFFCEB',
          20: '#F4EEE0',
          30: '#E9E0D4',
          40: '#D2CAC5',
          50: '#C5BEBE'
        }
      },
      fontFamily: {
        'fira-sans': ['"Fira Sans"', 'sans-serif']
      },
      fontSize: {
        mdd: ['20px', '22px'],
      },
      padding: {
        '9rem': '9rem'
      }
    },
  },
  plugins: [],
}

