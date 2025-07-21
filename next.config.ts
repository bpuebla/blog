import type { NextConfig } from "next";
import path from "path";


const nextConfig: NextConfig = {
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: '/_post-assets/:path*',
        destination: '/posts/_post-assets/:path*',
      },
    ];
  },

  webpack: (config, { isServer }) => {
    // optional: support importing .md files directly if you want that later
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    // optional: expose the posts directory to the build process
    config.resolve.alias['@posts'] = path.resolve(__dirname, 'posts');
    return config;
  },
};

export default nextConfig;
