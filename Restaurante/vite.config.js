import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite acesso externo
    port: 5173, // pode mudar a porta se quiser
    allowedHosts: ['sonly-foreseeable-cathy.ngrok-free.dev'], // 👈 adiciona o domínio do ngrok
  },
})

