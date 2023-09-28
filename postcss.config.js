module.exports = {
  syntax: 'postcss-scss',
  map: { inline: true },
  plugins: [
    require('postcss-import'),
    require('postcss-nested-props'),
    require('postcss-nested'),
    require('postcss-map-get'),
    require('postcss-simple-vars'),
    require('postcss-advanced-variables'),
    require('postcss-mixins'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
