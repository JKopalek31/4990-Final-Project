import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/<4990-Project>/",          // same as GitHub Pages sub-path
  plugins: [react()],
})
