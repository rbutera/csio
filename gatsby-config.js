// Plugins
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'International Offensive (CSIO): Translations Radio Mod for CSGO',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
  ],
};
