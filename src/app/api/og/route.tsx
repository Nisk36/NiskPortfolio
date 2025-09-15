import { ImageResponse } from 'next/og';
export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') ?? 'My Portfolio';

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