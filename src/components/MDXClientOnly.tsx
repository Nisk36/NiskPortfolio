'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MDXRender = dynamic(() => import('./MDXRender'));

export default function MDXClientOnly({ code }: { code: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <MDXRender code={code} />;
}