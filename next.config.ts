import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const basePath = process.env.BASE_PATH || '';

const nextConfig: NextConfig = {
  // GitHub Pages 向け静的出力
  output: 'export',
  images: { unoptimized: true },
  // プロジェクトページの場合にベースパスを付与（例: /repo-name）
  // リポジトリの Pages がルートドメイン（<user>.github.io）なら BASE_PATH は空にしてください。
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // experimental: { typedRoutes: true },
};

export default withContentlayer(nextConfig);
