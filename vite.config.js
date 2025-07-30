import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'

export default defineConfig({
	plugins: [
		laravel({
			input: ['vendor/aadl/safety/resources/js/app.js'],
			buildDirectory: 'vendor/aadl/safety/public/build',
			refresh: true,
		}),
		vue({
			template: {
				transformAssetUrls: {
					base: null,
					includeAbsolute: false,
				},

			},
		}),
	],
	resolve: {
		alias: {
			'vue': './node_modules/vue/dist/vue.esm-bundler.js'
		}
	},
	mode: 'development',
	optimizeDeps: {
		include: ['vue'],
	},


});
