/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/compsoc/uojcoders/v3",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
