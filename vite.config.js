import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins:[react()],
	resolve: {
		alias: {
			'@': path.resolve(DIRNAME, 'src'),
		}
	}
})

