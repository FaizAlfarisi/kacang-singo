import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { getGeneralWhatsAppUrl } from '@/lib/utils';
import {
  BrushUnderlineSvg,
  ChiliRibbonIcon,
  FlameSpecIcon,
  LeafSpecIcon,
  PriceSpecIcon,
  ShopeeBagIcon,
  WhatsAppChatIcon,
} from '@/components/ui/BrandIcons';

export default function HeroSection() {
  const waUrl = getGeneralWhatsAppUrl();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b-2 border-border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand Value Proposition (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-sun-gold border-[1.5px] border-border-ink shadow-[2px_2px_0_#36251A] text-espresso text-xs sm:text-sm font-bold mb-6">
              <ChiliRibbonIcon className="w-4 h-4 text-terracotta" />
              <span>{siteConfig.legal.originAssociation}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-espresso tracking-tight leading-[1.08]">
              Renyah Kacangnya,{' '}
              <span className="text-terracotta relative inline-block">
                Pedasnya Bikin Kangen!
                <BrushUnderlineSvg className="absolute -bottom-1.5 left-0 w-full h-2.5" />
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              {siteConfig.subTagline}
            </p>

            {/* Architectural Spec Strip (No emojis, custom line SVGs) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 border-2 border-border-ink rounded-xl bg-white shadow-[4px_4px_0_#36251A] overflow-hidden divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-border-ink">
              <div className="p-4 flex items-center gap-3">
                <FlameSpecIcon className="w-5.5 h-5.5 shrink-0" />
                <div>
                  <strong className="block text-[13px] font-extrabold text-espresso leading-tight">
                    Pedas Manis Medok
                  </strong>
                  <span className="text-xs text-muted">
                    Bumbu karamel cabai asli
                  </span>
                </div>
              </div>

              <div className="p-4 flex items-center gap-3">
                <LeafSpecIcon className="w-5.5 h-5.5 shrink-0" />
                <div>
                  <strong className="block text-[13px] font-extrabold text-espresso leading-tight">
                    Tanpa Pengawet
                  </strong>
                  <span className="text-xs text-muted">
                    5 bahan dapur pilihan
                  </span>
                </div>
              </div>

              <div className="p-4 flex items-center gap-3">
                <PriceSpecIcon className="w-5.5 h-5.5 shrink-0" />
                <div>
                  <strong className="block text-[13px] font-extrabold text-espresso leading-tight">
                    Mulai Rp 10.000
                  </strong>
                  <span className="text-xs text-muted">
                    4 pilihan ukuran kemasan
                  </span>
                </div>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#katalog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-terracotta hover:bg-terracotta-hover text-white font-bold text-base border-2 border-border-ink shadow-[4px_4px_0_#36251A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#36251A] transition-all"
              >
                <ShopeeBagIcon className="w-4.5 h-4.5" />
                <span>Lihat Varian & Harga</span>
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-white hover:bg-warm-sand text-espresso font-bold text-base border-2 border-border-ink shadow-[4px_4px_0_#36251A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#36251A] transition-all"
              >
                <WhatsAppChatIcon className="w-4.5 h-4.5 text-brand-green" />
                <span>Pesan lewat WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Malang Packaging Poster Stage (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-sun-gold to-warm-sand border-2 border-border-ink rounded-[18px] p-6 sm:p-7 shadow-[6px_6px_0_#36251A]">
              <div className="relative border-[1.5px] border-dashed border-espresso/30 rounded-xl p-5 sm:p-6 flex flex-col items-center text-center">
                {/* Original Unmodified Brand Logo */}
                <div className="relative w-44 sm:w-52 h-18 sm:h-20">
                  <Image
                    src="/images/brand/logo_singo_clean.png"
                    alt="Logo Kacang Pedes Singo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 176px, 208px"
                    priority
                  />
                </div>

                {/* Main Fire Peanut Mascot */}
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 my-1">
                  <Image
                    src="/images/brand/maskot_kacang_api_clean.png"
                    alt="Maskot Kacang Pedes Singo Khas Malang"
                    fill
                    className="object-contain drop-shadow-[0_10px_14px_rgba(43,27,18,0.18)]"
                    sizes="(max-width: 640px) 208px, 256px"
                    priority
                  />
                </div>

                {/* Bottom Packaging Stamp */}
                <div className="mt-3 w-full bg-white border-[1.5px] border-border-ink rounded-[10px] p-3.5 flex items-center justify-between gap-2 text-left">
                  <div>
                    <span className="block text-[11px] font-bold text-muted">
                      Komposisi Bumbu Dapur
                    </span>
                    <strong className="text-xs sm:text-[13px] font-extrabold text-espresso">
                      Kacang • Cabai • Gula • Asam • Garam
                    </strong>
                  </div>
                  <span className="bg-terracotta text-white font-display font-extrabold text-xs sm:text-sm px-2.5 py-1 rounded-md border-[1.5px] border-border-ink shrink-0">
                    Rp 10rb – 20rb
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
