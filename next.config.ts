import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // اختیاری: اگر می‌خواهید موقتاً ESLint رو غیرفعال کنید
  },
  typescript: {
    ignoreBuildErrors: true, // اختیاری: اگر می‌خواهید موقتاً خطاهای TypeScript رو نادیده بگیرید
  },
};

export default nextConfig;
