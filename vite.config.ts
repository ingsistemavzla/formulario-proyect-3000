import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// En Vercel (VERCEL=1) la app vive en la raíz del dominio. En GitHub Pages suele usarse un subpath.
const base = process.env.VERCEL ? '/' : '/cotizaciones-idsv/'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3030,
    open: true,
  },
})

