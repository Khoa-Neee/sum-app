import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚙️ Cấu hình cho Vite + GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/sum-app/", // 👈 thay bằng tên repo GitHub của bạn
});
