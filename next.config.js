// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "i.scdn.co",
//         port: "",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "i.scdn.co",
      "seed-mix-image.spotifycdn.com",
      "mosaic.scdn.co",
      "image-cdn-ak.spotifycdn.com",
      "seeded-session-images.scdn.co",
      "image-cdn-fa.spotifycdn.com",
      "thisis-images.spotifycdn.com",
      "blend-playlist-covers.spotifycdn.com",
    ],
  },
};

module.exports = nextConfig;
