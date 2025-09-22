import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        target: 'esnext',
        minify: 'esbuild',
        cssMinify: true,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              ui: ['framer-motion', 'lucide-react'],
              router: ['react-router-dom'],
              analytics: ['@vercel/analytics']
            }
          }
        },
        sourcemap: false,
        chunkSizeWarningLimit: 1000,
        reportCompressedSize: false,
        assetsInlineLimit: 4096
      },
      esbuild: {
        drop: mode === 'production' ? ['console', 'debugger'] : [],
        legalComments: 'none'
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react', '@vercel/analytics']
      }
    };
});
