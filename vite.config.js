import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ← DEBE COINCIDIR EXACTAMENTE CON EL NOMBRE DE TU REPO
})