import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Send API calls to the local backend, like Vercel does in production (see vercel.json)
    proxy: { '/api': 'http://localhost:5001' }
  },
  // Same output folder as Create React App, which backend/app.js serves for the Heroku setup
  build: { outDir: 'build' }
});
