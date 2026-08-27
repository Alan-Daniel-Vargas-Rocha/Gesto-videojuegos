import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Gestor-videojuegos/',
  plugins: [react()],
  resolve: { dedupe: ['react','react-dom'] }
})