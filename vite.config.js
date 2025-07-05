import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPurge from 'vite-plugin-purgecss'
const ReactCompilerConfig = { /* ... */ };

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ],
        },
      }),
    htmlPurge({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
  ],
  base: '/shri2025-task/',
  build: {
    outDir: 'docs', // вместо dist
  },
})
