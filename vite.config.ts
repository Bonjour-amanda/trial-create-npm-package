import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const __dirname = path.resolve();
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/lib/index.tsx',
      name: 'My Component',
      fileName: (format) => `my-component.${format}.tsx`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()]
})
