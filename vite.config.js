import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or '@vitejs/plugin-react' depending on your installation

export default defineConfig({
  plugins: [react()],
  base: '/City_Corporation_Swimming_Pool/', // Add your exact repository name here wrapped in slashes
})