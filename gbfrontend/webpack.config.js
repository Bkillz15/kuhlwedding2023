const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./static/gbfrontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: [/node_modules/,/staticfiles/],
        use: [ 'babel-loader' ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/,/staticfiles/],
        use: ['style-loader', 'css-loader', 'postcss-loader',]
      },
    ],
  },
  // optimization: {
  //   minimize: true,
  // },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        // NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};