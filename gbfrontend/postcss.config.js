
// const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('./tailwind.config.js'),
    require('autoprefixer')
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],  
}
