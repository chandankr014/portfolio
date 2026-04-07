import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using './' makes asset URLs relative so the build works whether
// it's hosted at username.github.io OR username.github.io/Portfolio/
export default defineConfig({
  plugins: [react()],
  base: './',
})
