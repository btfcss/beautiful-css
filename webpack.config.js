import path from 'path';
const __dirname = import.meta.dirname;

export default {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'), 
    clean: true,
  },
};