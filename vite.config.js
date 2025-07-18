import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    host: true,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['lucide']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['lucide', 'web-vitals']
  }
})