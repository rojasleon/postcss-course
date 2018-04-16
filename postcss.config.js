module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint')
      ]
    }),
    require('postcss-cssnext')({
      features: {
        autoprefixer: false,
        customProperties: false,
        calc: false
      },
      warnForDuplicates: false
    }),
    require('css-mqpacker'),
    require('cssnano')({
      autoprefixer: false,
    })
  ]
}
