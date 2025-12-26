'use client';
import { useMDXComponent } from 'next-contentlayer/hooks';

const MDXRender = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return <Component />;
};

export default MDXRender;
