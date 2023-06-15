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
  },
};

module.exports = nextConfig;
