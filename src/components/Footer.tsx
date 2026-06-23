"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-[#0b0f24] py-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="w-full flex flex-col items-center justify-center">
        {/* Responsive card wrapper with proper sizing */}
        <div className="relative w-full max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden" style={{ aspectRatio: '1024 / 614' }}>
          <Image
            src="/bhakti-card-v2.jpg"
            alt="Bhakti Industries Business Card"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 text-center font-medium">
          &copy; 2025 Bhakti Industries. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
