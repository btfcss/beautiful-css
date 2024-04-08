import path from 'path';
const __dirname = import.meta.dirname;
import { glob } from "glob";


export default {
  // Minified version for CDN
  mode: 'production',

    // Create entry with all js file in subfolders
  entry: glob.sync('./src/js/**/*.js').reduce(function (obj, el) {
    obj[path.parse(el).name] = path.resolve(__dirname, el);
    return obj
  }, {}),

  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};