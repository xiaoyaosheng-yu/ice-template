const path = require('path');

module.exports = {
  publicPath: './',
  lintOnSave: false,
  filenameHashing: false,
  css: {
    extract: true,
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    // port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
};
