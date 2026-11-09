import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { NAV_ITEMS } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-espresso text-warm-cream pt-14 pb-12 sm:pt-16 sm:pb-12 border-t-3 border-terracotta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 sm:gap-10 pb-10 sm:pb-12 border-b border-white/12">
          {/* Column 1: Brand Identity */}
          <div>
            <div className="relative h-9 w-28 sm:h-12 sm:w-36 mb-3.5 sm:mb-4">
              <Image
                src="/images/brand/logo_singo_clean.png"
                alt="Logo Kacang Pedes Singo"
                fill
                className="object-contain object-left"
                sizes="144px"
              />
            </div>
            <p className="text-xs sm:text-sm text-warm-cream/75 leading-relaxed max-w-sm">
              {siteConfig.subTagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-extrabold text-xs sm:text-sm text-sun-gold mb-3.5 sm:mb-4">
              Navigasi Halaman
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-warm-cream/80 hover:text-sun-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Marketplace */}
          <div>
            <h3 className="font-display font-extrabold text-xs sm:text-sm text-sun-gold mb-3.5 sm:mb-4">
              Pemesanan & Pengiriman
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-warm-cream/80">
              <li>WhatsApp: {siteConfig.contact.whatsappDisplay}</li>
              <li>Area Layanan: {siteConfig.contact.serviceArea}</li>
              <li className="pt-1.5">
                <a
                  href={siteConfig.contact.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sun-gold font-bold hover:underline"
                >
                  Kunjungi Toko Shopee Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Producer Information */}
        <div className="pt-7 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-warm-cream/65 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. Diproduksi oleh{' '}
            {siteConfig.legal.producerName} – {siteConfig.legal.producerLocation}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/6 border border-white/14 font-semibold text-warm-cream/85">
              P-IRT No. {siteConfig.legal.pirtNumber}
            </span>
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/6 border border-white/14 font-semibold text-warm-cream/85">
              Halal Indonesia: {siteConfig.legal.halalNumber}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
