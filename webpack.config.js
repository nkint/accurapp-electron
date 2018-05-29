const {
  addPlugins,
  setOutput,
} = require('@webpack-blocks/webpack')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')

const fileNameTemplate = '[name].[hash:8].[ext]'
function fontLoader() {
  return (context, { addLoader }) => addLoader({
    test: /\.(otf)(\?.*)?$/,
    loader: 'file-loader',
    options: {
      name: fileNameTemplate,
    },
  })
}

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
  fontLoader(),
])
