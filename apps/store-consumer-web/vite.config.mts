/// <reference types='vitest' />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const consumerBffUrl =
  process.env.STORE_CONSUMER_BFF_URL ?? 'http://localhost:3000';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/store-consumer-web',
  server: {
    port: 5500,
    host: 'localhost',
    proxy: {
      '/api': {
        target: consumerBffUrl,
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 5500,
    host: 'localhost',
  },
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    name: '@rocky-sales/store-consumer-web',
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test.setup.ts'],
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
