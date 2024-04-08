import path from 'path';
const __dirname = import.meta.dirname;
import { glob } from "glob";


export default {
  // For NPM, do not minify JS
  mode: 'development',

  // Source map for debugging
  devtool: 'source-map',

  // Create entry with all js file in subfolders
  entry: glob.sync('./src/js/**/*.js').reduce(function (obj, el) {
    obj[path.parse(el).name] = path.resolve(__dirname, el);
    return obj
  }, {}),

  // Create the JS file in the dist folder
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js'), 
  },

};