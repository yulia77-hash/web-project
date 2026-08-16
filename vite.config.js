import { defineConfig } from "vite"
import { resolve } from "node:path"

// Minimal Vite config: keep index.html as the main page and
// include the existing static pages in the build output.
export default defineConfig({
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        offer: resolve(__dirname, "offer.html"),
        privacy: resolve(__dirname, "privacy.html"),
        cookies: resolve(__dirname, "cookies.html"),
        consent: resolve(__dirname, "consent.html"),
        notFound: resolve(__dirname, "404.html"),
      },
    },
  },
})
