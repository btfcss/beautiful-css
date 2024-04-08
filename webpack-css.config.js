import path from 'path';
const __dirname = import.meta.dirname;
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { glob } from "glob";


export default {

  // For NPM, do not minify CSS
  mode: "development",

  // Source map for debugging
  devtool: 'source-map',

  // Create entry with all CSS file in subfolders
  entry: glob.sync('./src/css/**/*.css').reduce(function(obj, el){
    const folder = path.parse(el).dir.slice(8);
    obj[folder.replaceAll('/', '-')] = path.resolve(__dirname, el);
    return obj
 },{}),


  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    //new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
    filename: "css/[name].css",
  })],
};