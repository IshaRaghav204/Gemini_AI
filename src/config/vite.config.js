import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react() , svgr()],
  esbuild: {
    loader: 'jsx', // Enable JSX syntax
    include: /src\/.*\.js$/, // Include all .js files in src/
    exclude: /node_modules/, // Exclude node_modules
  },
});



