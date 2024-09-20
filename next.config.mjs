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
  // async generateStaticParams() {
  //   return {
  //     "/": { page: "/" },
  //     "/committee": { page: "/committee" },
  //     "/404": { page: "/not-found" },
  //     "/500": { page: "/error" },
  //     "/_error": { page: "/error" },
  //     "/_not-found": { page: "/not-found" },
  //   };
  // },
};

export default nextConfig;
