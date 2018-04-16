module.exports = {
  plugins: [
    require('postcss-import'),
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
