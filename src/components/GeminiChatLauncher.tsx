'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const GeminiChat = dynamic(() => import('./GeminiChat'), {
  ssr: false,
});

export default function GeminiChatLauncher() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [initialOpen, setInitialOpen] = useState(false);

  if (hasInteracted) {
    return <GeminiChat initialOpen={initialOpen} />;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <button
        type="button"
        aria-label="Open BuddyAI chat"
        onMouseEnter={() => {
          void import('./GeminiChat');
        }}
        onFocus={() => {
          void import('./GeminiChat');
        }}
        onClick={() => {
          setInitialOpen(true);
          setHasInteracted(true);
        }}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-primary text-white shadow-[0_4px_24px_rgba(0,224,255,0.35)] flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 animate-ping" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 drop-shadow-lg"
        >
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      </button>
    </div>
  );
}
