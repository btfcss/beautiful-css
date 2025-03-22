const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
      //error404: ['./js/main-error404.js'],
    },


    // The location of the build folder
    output: {
      path: path.resolve(__dirname, (env.mode == 'production') ? './dist-prod' : './dist-dev'),
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


    // CSS, images and HTML loaders
    module: {
      rules: [

        {
          test: /\.ejs$/,
          loader: 'ejs-loader',
          options: {
            variable: 'data',
            interpolate : '\\{\\{(.+?)\\}\\}',
            evaluate : '\\[\\[(.+?)\\]\\]'
          }
        },




        // CSS loader
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },

        // Images loader
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          /*
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
              }
            },
          ],
          */
        },
        /*
        // HTML loader
        {
          test: /src(\/|\\)js(\/|\\).+(\/|\\)[A-Za-z]+\.html$/i,
                  loader: "html-loader",
                  options: { sources: false },
                },
        */
      ],
    },

    // Plugins (copy, html css minifiers)
    plugins: [


      // 404.html
      /*
      new HtmlWebpackPlugin({
        title: 'Error 404',
        chunks: ['error404'],
        filename: `ejs/404.ejs`,
        minify: { collapseWhitespace: true, removeComments: true }, 
        template: './templates/error404.ejs',
        inject: 'body'
      }),
      */

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
      new MiniCssExtractPlugin(),
    ]
  }

  //console.log(config.entry);
  return config;
};