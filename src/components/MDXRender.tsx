'use client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Callout from "./Callout";

const MDXRender = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return <Component components={{ Callout }} />;
};

export default MDXRender;
