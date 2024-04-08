import terser from '@rollup/plugin-terser';
import { cleandir } from "rollup-plugin-cleandir";
//import copy from 'rollup-plugin-copy';
//import { createTransform } from 'rollup-copy-transform-css';
//import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'


// rollup.config.mjs
export default {
	// Input files
	input: ['src/index.js', 'src/folder/file.js', 'src/folder/style.css'],
	output: {
		// Output directory
		dir: "dist",		
		format: 'es',
		
		// Preserver folders structure
		preserveModules: true,
	},
	plugins: [
		cleandir(), // Clean output directory
		terser(), // For minification
		postcss({
			modules: false,
      extract: (a) => {
				console.log ('bla bla',a);
				return 'test.css';
			},
			preserveModules: true,
			minimize: true,
			inject: false,
    })
	]
};