import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  // 必要ならオプションをここに
  // images: { remotePatterns: [] },
  // experimental: { typedRoutes: true },
};

export default withContentlayer(nextConfig);