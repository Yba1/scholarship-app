/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:slug(scholarships-for-.+|scholarships-in-.+)",
        destination: "/seo/:slug"
      }
    ];
  }
};

export default nextConfig;