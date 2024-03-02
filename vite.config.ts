import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Snap Dashboard",
        short_name: "Snap Dashboard",
        theme_color: "#201d1d",
        background_color: "#201d1d",
        display: "standalone",
        description: "Calculator app",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@entities",
        replacement: path.resolve(__dirname, "src/entities"),
      },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ],
  },
});

