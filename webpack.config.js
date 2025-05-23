const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {

  // Display compilation mode
  console.log('mode = ', env.mode);

  // Prepare the config variable
  config = {

    // Set compilation mode
    mode: env.mode ?? 'production',

    // Optional and for development only. This provides the ability to
    // map the built code back to the original source format when debugging.
    devtool: (env.mode == 'production') ? false : "eval-source-map",

    // Watch in development mode only
    watch: (env.mode == 'production') ? false : true,

    // Default entry point is main
    entry: {
      home: ['./js/home.js'],
      classic: ['./css/classic/classic.css']
      //error404: ['./js/main-error404.js'],
    },


    // The location of the build folder
    output: {
      path: path.resolve(__dirname, (env.mode == 'production') ? './dist' : './dist-dev'),
      filename: 'js/[name].[contenthash].js',
      publicPath: '/',
      clean: true,
    },


    // Aliasses
    resolve: {
      alias: {
        Js: path.resolve(__dirname, "js/"),
      }
    },


    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ],
    },


    // CSS, images and HTML loaders
    module: {
      rules: [

        {
          test: /\.css$/i,

          //use: ["style-loader", "css-loader"],
          
          /*
          use: [
            { loader: "style-loader", options: { injectType: 'lazyStyleTag' } },
            { loader: "css-loader", options: { url: false } }
          ],
          */
          
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader"
            },            
          ],
          
        },
        /*
                // CSS loader
                {
                  test: /\.css$/i,
                  use: ["style-loader", "css-loader"],
                },
        */
        {
          test: /\.ejs$/,
          loader: 'compile-ejs-loader',
          options: {
            'htmlmin': true,
            'htmlminOptions': {
              removeComments: true
            }
          }
        }
      ],


    },

    // Plugins (copy, html css minifiers)
    plugins: [

      new CopyPlugin({
        patterns: [
          { from: "images", to: "images" },
        ],
      }),

      // index.html
      new HtmlWebpackPlugin({
        title: 'beautiful CSS Home Page',
        chunks: ['home'],
        filename: 'index.html',
        minify: { collapseWhitespace: true, removeComments: true },
        template: '!!ejs-webpack-loader!./templates/home/index.ejs',
        inject: 'body'
      }),

      // Minify CSS
      new MiniCssExtractPlugin({
        filename: "./css/[name].css",
      }),
    ]
  }

  //console.log(config.entry);
  return config;
};