import React from 'react';
import { IngredientIconId, ResellerIconId, TasteIconId } from '@/types';

export function ChiliRibbonIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 3c2.5 2.5 4 6.5 2 11-2 4.5-7.5 7.5-13 7 1.5-3 2.5-6.5 1.5-10C6.5 7.5 11 3 17 3z" />
      <path d="M17 3c1.5-1 3.5-1 4.5 0" />
    </svg>
  );
}

export function BrushUnderlineSvg({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5C82 2.5 215 1.5 317 7.5"
        stroke="#B84227"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FlameSpecIcon({ className = 'w-5.5 h-5.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B84227"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2c1.5 3.5 4 6 4 10a6 6 0 1 1-12 0c0-3 1.5-5.5 3-7.5 1 2 2.5 3 2.5 3S11 4.5 12 2z" />
    </svg>
  );
}

export function LeafSpecIcon({ className = 'w-5.5 h-5.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1F5F3A"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function PriceSpecIcon({ className = 'w-5.5 h-5.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D67D28"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

export function TastePillarIcon({ iconId }: { iconId: TasteIconId }) {
  if (iconId === 'spicy') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17.5 3.5c2 2.5 3 6.5 1 11-2 4.5-7.5 7-13.5 6.5 2-3 3-6.5 2-10C6 7.5 11.5 3.5 17.5 3.5z" />
        <path d="M17.5 3.5L20 2" />
      </svg>
    );
  }
  if (iconId === 'sweet') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M9.5 14.5c1 1.5 3.5 1.5 4.5 0" />
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IngredientIcon({ iconId }: { iconId: IngredientIconId }) {
  switch (iconId) {
    case 'peanut':
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 32 32"
          fill="none"
          stroke="#2B1B12"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path
            d="M21 6c3.5 0 6 2.8 6 6.2 0 2.1-1.2 4-2.5 5.3-1.2 1.2-1.5 2.5-2.2 4.1-.9 2.2-3.1 4.4-6.3 4.4-3.8 0-7-3.1-7-7 0-3.2 2.2-5.4 4.4-6.3 1.6-.7 2.9-1 4.1-2.2C18.8 9.2 19.2 6 21 6z"
            fill="#E6B17E"
          />
          <path d="M14 18c1.5-1.5 3.5-3.5 5-5" />
        </svg>
      );
    case 'chili':
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 32 32"
          fill="none"
          stroke="#2B1B12"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path
            d="M22 6c3 3 4 8.5 1.5 14-2.5 5.5-9.5 8.5-17.5 7.5 2.5-3.5 4-8 2.5-12.5C7 10.5 14.5 6 22 6z"
            fill="#D94E34"
          />
          <path d="M22 6l3.5-2.5" />
        </svg>
      );
    case 'sugar':
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 32 32"
          fill="none"
          stroke="#2B1B12"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="16 4 27 10 27 22 16 28 5 22 5 10" fill="#F9E398" />
          <polyline points="5 10 16 16 27 10" />
          <line x1="16" y1="16" x2="16" y2="28" />
        </svg>
      );
    case 'tamarind':
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 32 32"
          fill="none"
          stroke="#2B1B12"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path
            d="M8 24c-2-4 0-10 5-14s11-5 14-2c2 3 0 9-5 13s-12 6-14 3z"
            fill="#B6763C"
          />
          <circle cx="13" cy="18" r="1.5" fill="#2B1B12" />
          <circle cx="19" cy="13" r="1.5" fill="#2B1B12" />
        </svg>
      );
    case 'salt':
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 32 32"
          fill="none"
          stroke="#2B1B12"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="8" width="14" height="18" rx="3" fill="#EDE4D7" />
          <path d="M12 5h8v3h-8z" fill="#B8A493" />
          <circle cx="14" cy="14" r="1" fill="#2B1B12" />
          <circle cx="18" cy="16" r="1" fill="#2B1B12" />
          <circle cx="15" cy="20" r="1" fill="#2B1B12" />
        </svg>
      );
  }
}

export function ResellerPointIcon({ iconId }: { iconId: ResellerIconId }) {
  const props = {
    className: 'w-5 h-5 text-terracotta shrink-0',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (iconId) {
    case 'price':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      );
    case 'box':
      return (
        <svg {...props}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'wholesale':
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'legal':
      return (
        <svg {...props}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
  }
}

export function WhatsAppChatIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function WhatsAppBrandIcon({ className = 'w-4.5 h-4.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
    </svg>
  );
}

export function ShopeeBagIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export function DeliveryTruckIcon({ className = 'w-5.5 h-5.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function ChevronRightIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
