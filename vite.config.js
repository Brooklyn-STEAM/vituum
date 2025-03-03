import vituum from 'vituum'
import posthtml from '@vituum/vite-plugin-posthtml'

/** @type {import('vite').UserConfig} */
export default {
    plugins: [
        vituum(),
        posthtml({
            root: './src'
        })
    ]
}