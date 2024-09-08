/** @type {import('next').NextConfig} */
const nextConfig = {
  // basepath: "compsoc/uojcoders/v3",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
