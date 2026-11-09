import Image from 'next/image';
import { RESELLER_BENEFITS } from '@/data/products';
import { getResellerWhatsAppUrl } from '@/lib/utils';
import { ResellerPointIcon, WhatsAppChatIcon } from '@/components/ui/BrandIcons';

export default function ResellerSection() {
  const resellerWaUrl = getResellerWhatsAppUrl();

  return (
    <section id="reseller" className="py-20 sm:py-28 lg:py-32 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[16px] sm:rounded-[18px] bg-white border-[1.5px] sm:border-2 border-border-ink shadow-[4px_4px_0_#36251A] sm:shadow-[6px_6px_0_#36251A] p-6 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Left Column: B2B Value Proposition & 4 Benefits (8 cols on lg, full width on mobile) */}
            <div className="lg:col-span-8">
              <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-sun-gold border-[1.5px] border-border-ink text-espresso text-[11px] sm:text-xs font-bold mb-3.5 sm:mb-4">
                Peluang Usaha Camilan
              </span>
              <h2 className="font-display text-xl sm:text-4xl font-extrabold text-espresso tracking-tight">
                Mau Ikut Jualan Kacang Pedes Singo?
              </h2>
              <p className="mt-3 text-muted text-xs sm:text-base leading-relaxed max-w-2xl">
                Cocok buat tambahan barang dagangan di warung kelontong, kantin,
                toko oleh-oleh, atau dijual lagi ke teman kantor dan tetangga.
              </p>

              {/* 4 Benefit Cards with Custom Line Icons */}
              <div className="mt-8 sm:mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {RESELLER_BENEFITS.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="p-4.5 sm:p-5 rounded-xl bg-warm-cream border-[1.5px] border-border-ink"
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <ResellerPointIcon iconId={benefit.iconId} />
                      <h3 className="font-display font-extrabold text-xs sm:text-base text-espresso">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm text-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Reseller WhatsApp CTA */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href={resellerWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-3.5 rounded-[10px] bg-brand-green hover:bg-brand-green-hover text-white font-bold text-xs sm:text-base border-[1.5px] sm:border-2 border-border-ink shadow-[3px_3px_0_#36251A] sm:shadow-[4px_4px_0_#36251A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#36251A] transition-all"
                >
                  <WhatsAppChatIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  <span>Tanya Harga Grosir di WhatsApp</span>
                </a>
                <span className="text-[11px] sm:text-sm text-muted font-medium text-center sm:text-left">
                  Admin kami siap bantu info ongkir & paket perdana.
                </span>
              </div>
            </div>

            {/* Right Column: Mascot Pilihan B2 (Hidden on mobile/tablet, visible on lg+) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-center">
              <div className="w-full rounded-[14px] bg-gradient-to-b from-sun-gold to-warm-sand border-2 border-border-ink p-7 text-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto">
                  <Image
                    src="/images/brand/maskot_reseller_wink.png"
                    alt="Maskot Kacang Pedes Singo Mitra Reseller"
                    fill
                    className="object-contain drop-shadow-[0_10px_14px_rgba(43,27,18,0.16)]"
                    sizes="208px"
                  />
                </div>
                <p className="mt-3 font-display font-extrabold text-sm sm:text-base text-espresso">
                  Siap Kirim Partai Kecil & Grosir
                </p>
                <p className="text-xs text-muted mt-1">
                  Pengiriman rutin dari Malang hingga seluruh Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
