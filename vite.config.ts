import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
const pagesBase = process.env.GITHUB_PAGES === "true" ? "/nachtverzeichnis/" : "/";

export default defineConfig({
  plugins: [react()],
  base: pagesBase,
})
