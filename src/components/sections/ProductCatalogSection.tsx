'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { PRODUCT_VARIANTS } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DeliveryTruckIcon,
} from '@/components/ui/BrandIcons';

export default function ProductCatalogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalDots, setTotalDots] = useState(3);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const getStepWidth = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return 0;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const isDesktop = window.innerWidth >= 640;
    const gap = isDesktop ? 28 : 16; // gap-4 (16px) on mobile, sm:gap-7 (28px) on desktop
    return firstCard ? firstCard.offsetWidth + gap : el.clientWidth / 2;
  }, []);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < maxScroll - 8);

    // Desktop (>= 768px) shows 2 cards at once -> 3 positions (0: [1,2], 1: [2,3], 2: [3,4])
    // Mobile (< 768px) shows 1 card at once -> 4 positions (0, 1, 2, 3)
    const isDesktop = window.innerWidth >= 768;
    const dotsCount = isDesktop
      ? Math.max(1, PRODUCT_VARIANTS.length - 1)
      : PRODUCT_VARIANTS.length;
    setTotalDots(dotsCount);

    const stepWidth = getStepWidth();
    if (stepWidth > 0 && maxScroll > 0) {
      const idx = Math.round(scrollLeft / stepWidth);
      setActiveIndex(Math.min(dotsCount - 1, Math.max(0, idx)));
    } else {
      setActiveIndex(0);
    }
  }, [getStepWidth]);

  useEffect(() => {
    updateScrollState();
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const clampedIndex = Math.min(totalDots - 1, Math.max(0, index));
      const stepWidth = getStepWidth();
      el.scrollTo({
        left: clampedIndex * stepWidth,
        behavior: 'smooth',
      });
    },
    [getStepWidth, totalDots]
  );

  const handleStep = (direction: 'prev' | 'next') => {
    const nextIndex = direction === 'next' ? activeIndex + 1 : activeIndex - 1;
    scrollToIndex(nextIndex);
  };

  // Mouse drag handlers so desktop users can grab and slide directly in the middle of the cards
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollContainerRef.current;
    if (!el || e.button !== 0) return;

    setIsDragging(true);
    hasDraggedRef.current = false;
    dragStartXRef.current = e.pageX - el.offsetLeft;
    dragStartScrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    const x = e.pageX - el.offsetLeft;
    const walk = x - dragStartXRef.current;
    if (Math.abs(walk) > 6) {
      hasDraggedRef.current = true;
    }
    el.scrollLeft = dragStartScrollLeftRef.current - walk;
  };

  const finishDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const el = scrollContainerRef.current;
    if (!el) return;

    const stepWidth = getStepWidth();
    if (stepWidth > 0) {
      const nearestIndex = Math.round(el.scrollLeft / stepWidth);
      scrollToIndex(nearestIndex);
    }
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  };

  return (
    <section
      id="katalog"
      className="py-20 sm:py-28 lg:py-32 border-b-2 border-border-ink"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-11 sm:mb-14">
          <h2 className="font-display text-xl sm:text-4xl font-extrabold text-espresso tracking-tight">
            Pilih Ukuran Kemasan Sesuai Kebutuhan
          </h2>
          <p className="mt-3 text-muted text-xs sm:text-base leading-relaxed">
            Mau buat stok camilan sendiri di rumah, suguhan tamu, oleh-oleh,
            atau dijual lagi di warung — semua tersedia dengan harga Rp 10.000
            sampai Rp 20.000.
          </p>
        </div>

        {/* Carousel Stage with Vertically Centered Side Arrows & Drag-Enabled Track */}
        <div className="relative">
          {/* Left Arrow Button (Vertically Centered) */}
          <button
            type="button"
            onClick={() => handleStep('prev')}
            disabled={!canScrollLeft}
            aria-label="Geser ke produk sebelumnya"
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-sun-gold disabled:opacity-0 disabled:pointer-events-none text-espresso border-2 border-border-ink shadow-[3px_3px_0_#36251A] hover:scale-105 transition-all items-center justify-center cursor-pointer"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* Right Arrow Button (Vertically Centered) */}
          <button
            type="button"
            onClick={() => handleStep('next')}
            disabled={!canScrollRight}
            aria-label="Geser ke produk selanjutnya"
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-terracotta hover:bg-terracotta-hover disabled:opacity-0 disabled:pointer-events-none text-white border-2 border-border-ink shadow-[3px_3px_0_#36251A] hover:scale-105 transition-all items-center justify-center cursor-pointer"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Horizontal Drag & Swipe Track */}
          <div className="-mx-2 px-2">
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={finishDrag}
              onMouseLeave={finishDrag}
              onClickCapture={handleClickCapture}
              className={`flex gap-4 sm:gap-7 overflow-x-auto pb-4 pt-1 pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                isDragging
                  ? 'snap-none scroll-auto cursor-grabbing select-none'
                  : 'snap-x snap-mandatory scroll-smooth cursor-grab'
              }`}
            >
              {PRODUCT_VARIANTS.map((product) => (
                <div
                  key={product.id}
                  className="w-full md:w-[calc(50%-14px)] shrink-0 snap-start flex"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Pagination Dots */}
        <div
          className="mt-8 sm:mt-9 flex items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Indikator geser produk"
        >
          {Array.from({ length: totalDots }).map((_, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Tampilan produk ${idx + 1}`}
                onClick={() => scrollToIndex(idx)}
                className={`h-2.5 sm:h-3 rounded-full border-[1.5px] border-border-ink transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-7 sm:w-8 bg-terracotta shadow-[2px_2px_0_#36251A]'
                    : 'w-2.5 sm:w-3 bg-warm-sand hover:bg-sun-gold'
                }`}
              />
            );
          })}
        </div>

        {/* Shipping Info Banner */}
        <div className="mt-11 sm:mt-14 rounded-xl bg-sun-gold/55 border-[1.5px] sm:border-2 border-border-ink shadow-[3px_3px_0_#36251A] sm:shadow-[4px_4px_0_#36251A] p-4.5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-3.5 text-left">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-white border-[1.5px] border-border-ink flex items-center justify-center text-espresso shrink-0">
              <DeliveryTruckIcon className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
            </div>
            <div>
              <p className="font-display font-extrabold text-espresso text-xs sm:text-base">
                Melayani pengiriman ke Malang hingga seluruh Indonesia
              </p>
              <p className="hidden sm:block text-xs sm:text-sm text-muted mt-0.5">
                Bisa pesan langsung lewat WhatsApp atau checkout praktis lewat
                Shopee.
              </p>
            </div>
          </div>
          <a
            href="#reseller"
            className="shrink-0 text-[11px] sm:text-sm font-extrabold text-terracotta hover:underline self-end sm:self-center"
          >
            Mau beli partai grosir? Cek info Reseller →
          </a>
        </div>
      </div>
    </section>
  );
}
