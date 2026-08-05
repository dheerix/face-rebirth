import type {ReactNode} from 'react';
import {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export type BrandLogoProps = {
  variant?: 'primary' | 'horizontal' | 'emblem';
  className?: string;
  priority?: boolean;
};

const logoFiles = {
  primary: 'img/brand/face-rebirth-logo-primary.png',
  horizontal: 'img/brand/face-rebirth-logo-horizontal.png',
  emblem: 'img/brand/face-rebirth-logo-emblem.png',
} as const;

export default function BrandLogo({
  variant = 'primary',
  className,
  priority = false,
}: BrandLogoProps): ReactNode {
  const primarySrc = useBaseUrl(logoFiles.primary);
  const requestedSrc = useBaseUrl(logoFiles[variant]);
  const [src, setSrc] = useState(requestedSrc);

  return (
    <img
      className={className}
      src={src}
      alt="Face Rebirth — Rediscover the Face You Love"
      width={1254}
      height={1254}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setSrc(primarySrc)}
    />
  );
}
