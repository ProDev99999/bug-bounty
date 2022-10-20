import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from 'path';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ mode }) => {
	return defineConfig({
		build: {
			outDir: './build'
		},
		resolve: {
			alias: {
				'@src': path.resolve(__dirname, 'src'),
				'@assets': path.resolve(__dirname, 'src/assets'),
				'@components': path.resolve(__dirname, 'src/components'),
				'@pages': path.resolve(__dirname, 'src/pages'),
				'@store': path.resolve(__dirname, 'src/store'),
				'@utils': path.resolve(__dirname, 'src/utils'),
			}
		},
		plugins: [react()],
		define: {
			"process.env.NODE_ENV": `"${mode}"`,
		}
	})
}