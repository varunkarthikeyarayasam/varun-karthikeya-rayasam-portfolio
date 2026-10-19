import { useId } from 'react';

/** Shared, lightweight painted X motif used as a quiet background accent. */
export function BrushCross({ className = '' }: { className?: string }) {
  const instanceId = useId().replace(/:/g, '');
  const filterId = `brush-grain-${instanceId}`;
  const peachId = `brush-peach-${instanceId}`;
  const lavenderId = `brush-lavender-${instanceId}`;
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 420 300"
      className={`brush-cross pointer-events-none select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={peachId} x1="0" y1="1" x2="1" y2="0">
          <stop stopColor="#C9765F" />
          <stop offset=".52" stopColor="#D98F78" />
          <stop offset="1" stopColor="#D98F78" />
        </linearGradient>
        <linearGradient id={lavenderId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#B7A5E8" />
          <stop offset=".6" stopColor="#B7A5E8" />
          <stop offset="1" stopColor="#8972C6" />
        </linearGradient>
        <filter id={filterId} x="-10%" y="-15%" width="120%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035 0.12" numOctaves="2" seed="8" result="grain" />
          <feDisplacementMap in="SourceGraphic" in2="grain" scale="8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter={`url(#${filterId})`} opacity=".82">
        <path d="M15 235C74 191 125 154 184 119c65-39 132-77 215-108 7-3 14 3 11 10-35 70-97 113-164 153-74 44-144 81-219 99-12 3-20-11-12-19Z" fill={`url(#${peachId})`} />
        <path d="M21 31c62 29 121 69 182 111 61 43 122 91 191 143 8 6 2 18-8 16-80-16-146-55-209-98C111 157 57 114 9 48c-6-8 2-21 12-17Z" fill={`url(#${lavenderId})`} />
      </g>
      <path d="M36 243c92-62 171-112 267-167" fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="3" strokeLinecap="round" />
      <path d="M46 44c87 55 169 117 252 181" fill="none" stroke="#fff" strokeOpacity=".2" strokeWidth="2" strokeLinecap="round" />
      <circle cx="383" cy="43" r="3" fill="#C9765F" />
      <circle cx="31" cy="276" r="2.5" fill="#8972C6" />
      <circle cx="394" cy="261" r="2" fill="#D98F78" />
    </svg>
  );
}
