// // vite.config.js - ปรับแต่งสำหรับ deployment
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/my-portfolio-website",
//   build: {
//     outDir: "dist",
//     assetsDir: "assets",
//     sourcemap: false,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio-website", // <-- เพิ่มหรือแก้ไขบรรทัดนี้
});
