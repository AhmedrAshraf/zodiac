import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Same port and output folder as Create React App, which the backend's CORS
  // whitelist (localhost:3000) and static serving (../frontend/build) rely on
  server: { port: 3000 },
  build: { outDir: 'build' }
});
