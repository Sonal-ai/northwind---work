import React from "react";
import type { SVGProps } from "react";

export function ConstructionArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={120}
      viewBox="0 0 48 120"
      {...props}
    >
      <defs>
        <clipPath id="bgblur_clip_path">
          <path d="M4 16C4 9.37259 9.37258 4 16 4H52V124H16C9.37258 124 4 118.627 4 112V16Z" />
        </clipPath>
        <mask id="mask0" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="6" y="42" width="36" height="36">
          <rect x="6" y="42" width="36" height="36" fill="#D9D9D9"/>
        </mask>
      </defs>
      <foreignObject x="-4" y="-4" width="56" height="128">
        <div 
          
          style={{
            backdropFilter: "blur(2px)",
            clipPath: "url(#bgblur_clip_path)",
            height: "100%",
            width: "100%"
          }}
        />
      </foreignObject>
      <g data-figma-bg-blur-radius="4">
        <path 
          d="M0 12C0 5.37259 5.37258 0 12 0H48V120H12C5.37258 120 0 114.627 0 108V12Z" 
          fill="#161203" 
          fillOpacity="0.8"
        />
        <g mask="url(#mask0)">
          <path 
            d="M29.9926 73.9604L31.5879 72.3651L19.2215 59.9987L31.5879 47.6324L29.9926 46.0371L16.031 59.9987L29.9926 73.9604Z" 
            fill="#FFF9E3"
          />
        </g>
      </g>
    </svg>
  );
}
