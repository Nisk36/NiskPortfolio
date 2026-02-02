import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const dynamic = 'force-static';

export async function GET() {
  const title = 'NiskDev';
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        {title}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
