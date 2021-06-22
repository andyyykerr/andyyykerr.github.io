const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js'
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  },
  module: {
    rules: [
      { test: /\.tsx$/, use: ['ts-loader'] },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "public" }],
    // }),
  ]
}
