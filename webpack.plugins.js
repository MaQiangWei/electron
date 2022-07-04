/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
const { resolve } = require("path");

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  //   new VueLoaderPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: resolve("./resources"),
        to: resolve("./.webpack/main/resources"),
      },
    ],
  }),
];
