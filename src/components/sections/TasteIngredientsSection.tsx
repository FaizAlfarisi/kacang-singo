import Image from 'next/image';
import { TASTE_PILLARS, NATURAL_INGREDIENTS } from '@/data/products';
import { IngredientIcon, TastePillarIcon } from '@/components/ui/BrandIcons';

export default function TasteIngredientsSection() {
  return (
    <section
      id="keunggulan"
      className="py-20 sm:py-28 lg:py-32 bg-warm-sand/65 border-b-2 border-border-ink"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-end mb-11 sm:mb-14">
          <div className="lg:col-span-7">
            <h2 className="font-display text-xl sm:text-4xl font-extrabold text-espresso tracking-tight">
              Kenapa Banyak yang Cocok Sama Kacang Pedes Singo?
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted text-xs sm:text-base leading-relaxed">
              Bumbunya nggak cuma pedas di luar, tapi meresap sampai ke kacang
              yang digoreng garing.
            </p>
          </div>
        </div>

        {/* 3 Taste Pillars Architectural Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-[1.5px] sm:border-2 border-border-ink rounded-[14px] bg-white shadow-[3px_3px_0_#36251A] sm:shadow-[5px_5px_0_#36251A] overflow-hidden divide-y-[1.5px] sm:divide-y-2 md:divide-y-0 md:divide-x-2 divide-border-ink">
          {TASTE_PILLARS.map((pillar) => (
            <div key={pillar.id} className="px-5 py-6 sm:p-7 lg:p-8">
              <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-[8px] sm:rounded-[10px] bg-sun-gold border-[1.5px] border-border-ink flex items-center justify-center text-terracotta scale-90 sm:scale-100 origin-left">
                  <TastePillarIcon iconId={pillar.iconId} />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-terracotta bg-warm-cream px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-border-warm">
                  {pillar.subtitle}
                </span>
              </div>
              <h3 className="font-display text-base sm:text-xl font-extrabold text-espresso">
                {pillar.title}
              </h3>
              <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* 5 Natural Kitchen Ingredients + Mascot Pilihan A2 */}
        <div className="mt-12 sm:mt-14 rounded-[14px] bg-warm-cream border-[1.5px] sm:border-2 border-border-ink shadow-[3px_3px_0_#36251A] sm:shadow-[5px_5px_0_#36251A] p-6 sm:p-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Mascot Chef's Kiss (Hidden on mobile < sm, visible on sm+) + Title */}
            <div className="lg:col-span-5 flex flex-row items-center gap-4 text-left">
              <div className="hidden sm:block relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
                <Image
                  src="/images/brand/maskot_taste_chefs_kiss.png"
                  alt="Maskot Kacang Pedes Singo Chef's Kiss Racikan Bumbu Dapur"
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-sun-gold border border-border-ink text-espresso text-[11px] sm:text-xs font-bold mb-1.5">
                  Komposisi Jujur
                </span>
                <h3 className="font-display text-base sm:text-xl font-extrabold text-espresso">
                  Diracik dari 5 Bahan Dapur Asli
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1.5 leading-relaxed">
                  Tanpa tambahan pengawet buatan — murni dari bahan dapur pilihan:
                </p>
              </div>
            </div>

            {/* Right: 5 Ingredients Custom SVG Grid (Compact chips on mobile with generous gap, full cards on sm+) */}
            <div className="lg:col-span-7 flex flex-wrap sm:grid sm:grid-cols-5 gap-2.5 sm:gap-3">
              {NATURAL_INGREDIENTS.map((item) => (
                <div
                  key={item.name}
                  className="flex-1 min-w-[calc(33.333%-7px)] sm:min-w-0 flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-0 text-left sm:text-center px-3 py-2.5 sm:p-3.5 rounded-lg sm:rounded-[10px] bg-white border-[1.5px] border-border-ink"
                >
                  <div className="sm:mb-2 scale-75 sm:scale-100 shrink-0">
                    <IngredientIcon iconId={item.iconId} />
                  </div>
                  <p className="font-display font-extrabold text-xs sm:text-[13px] text-espresso leading-tight">
                    {item.name}
                  </p>
                  <p className="hidden sm:block text-[11px] text-muted mt-0.5 leading-snug">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
