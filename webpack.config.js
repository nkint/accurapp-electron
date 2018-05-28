const {
  addPlugins,
  setOutput,
} = require('@webpack-blocks/webpack')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')

const { buildWebpackConfig } = require('webpack-preset-accurapp')
module.exports = buildWebpackConfig([
  addPlugins([
    new InterpolateHtmlPlugin({
      'NODE_ENV': process.env.NODE_ENV,
      'PUBLIC_URL': process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}` : '',
    }),
  ]),
  setOutput({
    publicPath: process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/` : '/',
  }),
])
