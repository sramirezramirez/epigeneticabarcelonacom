import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// For local dev: base = '/'
// For GitHub Pages subdirectory: base = '/repo-name/'
// For GitHub Pages root or custom domain: base = '/'
const basePath = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
  publicDir: 'public',
  build: {
    // Ensure CNAME is copied but exclude .example files
    copyPublicDir: true,
  },
});
