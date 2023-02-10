/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  
    content: ['./src/**/*.{html,js,jsx}',
    // './templates/gbfrontend/index.html',
  ],
    theme: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '5.23rem',
        '7xl': '7.69rem',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['Marcellus','ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'hw': ['Dancing Script'],
        'count': ['Nixie One'],
        'body': ['Open Sans'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        backgroundImage: {
            'sunset': "url('/static/images/sunset.jpg')",
            'tree': "url('/static/images/golden-tree.png')",
            'tree-light': "url('/static/images/golden-tree-light.png')",
            'kb-home': "url('/static/images/kb-closelier.jpg')",
        },
        colors: {
          nixie: '#ffe57e'
        },
        textShadow: {
          sm: '0 1px 2px var(--tw-shadow-color)',
          DEFAULT: '0 2px 4px var(--tw-shadow-color)',
          lg: '0 8px 16px var(--tw-shadow-color)',
          glow1: '0 0 2px #fa9c20, 0 0 5px #fa9c20, 0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color)',
          glow2: '0 0 3px #fa9c20, 0 0 6px #fa9c20, 0 0 10px var(--tw-shadow-color), 0 0 15px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color), 0 0 30px var(--tw-shadow-color)',
          glow3: '0 0 10px #fa9c20, 0 0 20px #fa9c20, 0 0 30px var(--tw-shadow-color), 0 0 40px var(--tw-shadow-color), 0 0 50px var(--tw-shadow-color), 0 0 60px var(--tw-shadow-color)',
          glow4: '0 0 10px #fa9c20, 0 0 20px #fa9c20, 0 0 30px var(--tw-shadow-color), 0 0 40px var(--tw-shadow-color), 0 0 50px var(--tw-shadow-color), 0 0 60px var(--tw-shadow-color), 0 0 70px var(--tw-shadow-color), 0 0 80px var(--tw-shadow-color)',
        },
      },
    },
    plugins: [
      plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
        )
      }),
    ],
  }
  
  // './node_modules/tw-elements/dist/js/**/*.js',