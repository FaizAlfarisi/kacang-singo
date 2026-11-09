import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { STORY_MOMENTS } from '@/data/products';

export default function MalangStorySection() {
  return (
    <section
      id="cerita"
      className="py-16 sm:py-22 bg-warm-sand/45 border-b-2 border-border-ink"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Story Card Wrapper with Peeking Mascot (Pilihan C1) */}
        <div className="relative rounded-[18px] bg-gradient-to-br from-sun-gold/55 via-warm-cream to-warm-sand p-6 sm:p-11 border-2 border-border-ink shadow-[6px_6px_0_#36251A]">
          {/* Peeking Mascot (Pilihan C1) - Positioned so torso base sits flush on top border while gloved hands grip over the border */}
          <div className="absolute right-6 sm:right-12 -top-[1px] -translate-y-[84.5%] z-20 pointer-events-none select-none">
            <div className="relative w-24 h-[85px] sm:w-[120px] sm:h-[106px]">
              <Image
                src="/images/brand/maskot_catalog_peeking.png"
                alt="Maskot Kacang Pedes Singo Mengintip"
                fill
                className="object-contain object-bottom"
                sizes="120px"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Origin Identity */}
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 rounded-md bg-white border-[1.5px] border-border-ink text-terracotta text-xs font-bold mb-3.5">
                {siteConfig.legal.originAssociation}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-espresso leading-tight">
                Rasa Kacang Bumbu Khas Malang yang Selalu Dirindukan
              </h2>
              <div className="mt-5 p-4 rounded-xl bg-white border-[1.5px] border-border-ink">
                <span className="block text-[11px] font-bold text-muted">
                  Diproduksi Oleh
                </span>
                <strong className="font-display text-sm sm:text-base font-extrabold text-espresso">
                  {siteConfig.legal.producerName} –{' '}
                  {siteConfig.legal.producerLocation}
                </strong>
              </div>
            </div>

            {/* Right Column: Narrative & Moments */}
            <div className="lg:col-span-7 space-y-4 text-espresso/90 text-sm sm:text-base leading-relaxed">
              <p>
                Di Malang dan sekitarnya, kacang tanah goreng yang dibalut bumbu
                cabai merah, gula karamel, dan asam jawa sudah lama jadi teman
                setia di meja ruang tamu maupun warung kopi.
              </p>
              <p>
                <strong>Kacang Pedes Singo</strong> dibuat oleh{' '}
                <strong>{siteConfig.legal.producerName}</strong> di{' '}
                {siteConfig.legal.producerLocation} untuk menjaga cita rasa
                tersebut tetap terjaga: kacangnya garing, bumbunya medok, dan
                pedasnya pas buat dinikmati kapan saja.
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {STORY_MOMENTS.map((moment) => (
                  <div
                    key={moment.title}
                    className="p-3.5 rounded-[10px] bg-white border-[1.5px] border-border-ink"
                  >
                    <h3 className="font-display text-xs sm:text-sm font-extrabold text-terracotta">
                      {moment.title}
                    </h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      {moment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
