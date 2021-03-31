import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    preserverSymlinks: true, 
    input: [ 'cookies-notice.js' ], 
    output: {
        file: 'dist/cookies-notice.js', 
        format: 'es', 
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel(),
        terser()
    ]
};