import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path';

export default defineConfig({
    base: '/portfolio_website/',
    plugins: [react(), viteTsconfigPaths()],
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000  
        port: 3000, 
    },
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
            404: resolve(__dirname, "public/404.html"),
          },
        },
    }
})