import Image from 'next/image';
import { TASTE_PILLARS, NATURAL_INGREDIENTS } from '@/data/products';
import { IngredientIcon, TastePillarIcon } from '@/components/ui/BrandIcons';

export default function TasteIngredientsSection() {
  return (
    <section
      id="keunggulan"
      className="py-16 sm:py-22 bg-warm-sand/65 border-b-2 border-border-ink"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-espresso tracking-tight">
              Kenapa Banyak yang Cocok Sama Kacang Pedes Singo?
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Bumbunya nggak cuma pedas di luar, tapi meresap sampai ke kacang
              yang digoreng garing.
            </p>
          </div>
        </div>

        {/* 3 Taste Pillars Architectural Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-border-ink rounded-[14px] bg-white shadow-[5px_5px_0_#36251A] overflow-hidden divide-y-2 md:divide-y-0 md:divide-x-2 divide-border-ink">
          {TASTE_PILLARS.map((pillar) => (
            <div key={pillar.id} className="p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-[10px] bg-sun-gold border-[1.5px] border-border-ink flex items-center justify-center text-terracotta">
                  <TastePillarIcon iconId={pillar.iconId} />
                </div>
                <span className="text-xs font-bold text-terracotta bg-warm-cream px-2.5 py-1 rounded-md border border-border-warm">
                  {pillar.subtitle}
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-espresso">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* 5 Natural Kitchen Ingredients + Mascot Pilihan A2 */}
        <div className="mt-7 rounded-[14px] bg-warm-cream border-2 border-border-ink shadow-[5px_5px_0_#36251A] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Mascot Chef's Kiss (Pilihan A2) + Title */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
                <Image
                  src="/images/brand/maskot_taste_chefs_kiss.png"
                  alt="Maskot Kacang Pedes Singo Chef's Kiss Racikan Bumbu Dapur"
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-sun-gold border border-border-ink text-espresso text-xs font-bold mb-1.5">
                  Komposisi Jujur
                </span>
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-espresso">
                  Diracik dari 5 Bahan Dapur Asli
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                  Tanpa tambahan pengawet buatan — rasa pedas, manis, dan
                  gurihnya murni dari bahan dapur pilihan:
                </p>
              </div>
            </div>

            {/* Right: 5 Ingredients Custom SVG Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {NATURAL_INGREDIENTS.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center text-center p-3 rounded-[10px] bg-white border-[1.5px] border-border-ink"
                >
                  <div className="mb-1.5">
                    <IngredientIcon iconId={item.iconId} />
                  </div>
                  <p className="font-display font-extrabold text-xs sm:text-[13px] text-espresso">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-muted mt-0.5 leading-snug">
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
