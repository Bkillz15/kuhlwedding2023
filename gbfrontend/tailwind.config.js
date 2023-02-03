/** @type {import('tailwindcss').Config} */
module.exports = {
  
    content: ['./src/**/*.{html,js,jsx}',
    './templates/gbfrontend/index.html',
    './node_modules/tw-elements/dist/js/**/*.js',
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
        'hw': ['Rouge Script'],
        'body': ['"Open Sans"']
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
            'tree': "url('/static/images/golden-tree.png')"
        }
      },
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }
  