import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["route.tsx", "route.ts", "route.jsx", "route.js"],
};

export default nextConfig;
