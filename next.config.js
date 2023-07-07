/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "cinerate-movie-review-service.s3.ap-southeast-1.amazonaws.com",
        pathname: "/public/**/*",
      },
    ],
    domains: ["static.wikia.nocookie.net"],
  },
};

module.exports = nextConfig;
