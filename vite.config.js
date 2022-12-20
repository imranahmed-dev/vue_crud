import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       admin: resolve(__dirname, 'admin/index.html'),
  //     },
  //   },
  // },
})
