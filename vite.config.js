import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CvApp/',  // Add this line, matching your GitHub repo name
  server: {
    proxy: {
      "/api": "http://localhost:3002"
    }
  }
})
