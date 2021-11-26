const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['poc-ui-repo','styled-components']);

module.exports = withPlugins([withTM], {
  // ...
});