import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base de publicação para GitHub Pages (username.github.io/portfolio)
  base: '/portfolio/',
})
