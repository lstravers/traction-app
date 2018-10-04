<<<<<<< HEAD

=======
>>>>>>> 8ca32cfa08a5c3b6f1f26acb0ea3ead604f40cbd
const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

// resolve-url-loader must be used before sass-loader
environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader'
});

// Add an ProvidePlugin
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery'
  })
);

const config = environment.toWebpackConfig();

module.exports = environment;
