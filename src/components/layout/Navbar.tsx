'use client';

import { useState } from 'react';
import Image from 'next/image';
import { NAV_ITEMS } from '@/data/products';
import { ShopeeBagIcon } from '@/components/ui/BrandIcons';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-warm-cream/95 backdrop-blur-md border-b-2 border-border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-8 w-26 sm:h-11 sm:w-36">
            <Image
              src="/images/brand/logo_singo_clean.png"
              alt="Logo Kacang Pedes Singo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 104px, 144px"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Menu Utama">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-espresso/85 hover:text-terracotta transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#katalog"
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-bold text-sm px-4 py-2.5 rounded-lg border-[1.5px] border-border-ink shadow-[3px_3px_0_#36251A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#36251A] transition-all"
          >
            <ShopeeBagIcon className="w-4 h-4" />
            <span>Pesan Sekarang</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-1.5 rounded-lg text-espresso hover:bg-warm-sand border-[1.5px] border-border-ink"
          aria-expanded={isMobileMenuOpen}
          aria-label="Buka menu navigasi"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-warm-cream border-b-2 border-border-ink px-4 pt-2 pb-4 space-y-1.5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-bold text-espresso hover:bg-warm-sand"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#katalog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-terracotta text-white font-bold text-xs py-2.5 rounded-lg border-[1.5px] border-border-ink shadow-[2px_2px_0_#36251A]"
          >
            <ShopeeBagIcon className="w-3.5 h-3.5" />
            <span>Pesan Sekarang</span>
          </a>
        </div>
      )}
    </header>
  );
}
