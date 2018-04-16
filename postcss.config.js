module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-font-magician')({
      variants: {
        'Lato': {
          '300': [],
          '400': []
        }
      }
    }),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: true
        },
        customProperties: false,
        calc: false
      }
    })
  ]
}
