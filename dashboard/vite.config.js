import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Map "@" to the "src" directory
    },
  },
  optimizeDeps: {
    include: ["@tanstack/react-table"], // Pre-bundle @tanstack/react-table
  },
});
