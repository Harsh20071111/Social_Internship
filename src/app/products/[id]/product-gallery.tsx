"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0] || "/uploads/impeller.svg");
  const [zoomStyle, setZoomStyle] = useState({ display: "none", backgroundPosition: "0% 0%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Calculate cursor percentage inside the bounding box
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({
      display: "block",
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none", backgroundPosition: "0% 0%" });
  };

  return (
    <div className="space-y-4">
      {/* Main Image with Zoom Follower */}
      <div
        className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 aspect-square w-full flex items-center justify-center p-6 cursor-zoom-in group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={activeImage}
          alt={name}
          fill
          className="object-contain p-6 transition-all duration-200"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* Dynamic Zoom Overlay using CSS background-image */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-no-repeat bg-zinc-900"
          style={{
            ...zoomStyle,
            backgroundImage: `url(${activeImage})`,
            backgroundSize: "220%",
          }}
        />
      </div>

      {/* Thumbnail Bar */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, idx) => (
<button
               key={idx}
               onClick={() => setActiveImage(img)}
               className={`relative aspect-square w-16 rounded-lg bg-zinc-900 border overflow-hidden p-1 transition-all ${
                 activeImage === img
                   ? "border-zinc-950 dark:border-zinc-100 ring-2 ring-zinc-900/10 dark:ring-white/10"
                   : "border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100"
               }`}
             >
               <Image 
                 src={img} 
                 alt={`${name} thumbnail ${idx + 1}`} 
                 fill 
                 className="object-contain p-1"
                 sizes="64px" 
                 loading="lazy"
               />
             </button>
          ))}
        </div>
      )}
    </div>
  );
}
