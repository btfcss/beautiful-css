import path from 'path';
const __dirname = import.meta.dirname;
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { glob } from "glob";

export default {

  // Minified version for CDN
  mode: "production",

  // Create entry with all CSS file in subfolders
  entry: glob.sync('./src/css/**/*.css').reduce(function (obj, el) {
    const folder = path.parse(el).dir.slice(8);
    obj[folder.replaceAll('/', '-')] = path.resolve(__dirname, el);
    return obj
  }, {}),



  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  // Minify CSS
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    })],
};