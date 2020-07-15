const path = require('path');
const { override, addDecoratorsLegacy, addBundleVisualizer, addWebpackAlias, addLessLoader } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  }),
  addLessLoader()
);
