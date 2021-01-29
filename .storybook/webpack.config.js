/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
const webpackCommonConfig = require("../webpack.config");
module.exports = async ({ config, mode }) => {
  // Make whatever fine-grained changes you need

  const isProd = config.mode === "production";
  const tailwindConfig = require("../tailwind.config.js")(isProd);
  require('../webpack.config')(config, tailwindConfig, true);
  return config;
};
