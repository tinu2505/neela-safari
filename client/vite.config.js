import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    server: {
    allowedHosts:
       ['neelasafari.com', 'www.neelasafari.com', '.neelasafari.com']
    },

  plugins: [react()],
})
