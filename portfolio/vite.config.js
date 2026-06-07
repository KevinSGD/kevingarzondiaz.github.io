import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',   // era './' — eso rompe assets en rutas anidadas
  plugins: [vue()],
})