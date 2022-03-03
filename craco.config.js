const config = require('./src/styles/theme/themeOverrides.js');
const theme = require('./src/styles/theme/coderHeroesTheme.js');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            globalVars: theme,
            modifyVars: config,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
