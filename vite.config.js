import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'

/** @type {import('vite').UserConfig} */
export default {
    plugins: [
        vituum(),
        liquid({
            root: './src'
        })
    ]
}