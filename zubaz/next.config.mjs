/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    // Ignore ESLint errors during the build process
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
