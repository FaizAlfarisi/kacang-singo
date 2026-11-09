import { PRODUCT_VARIANTS } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { DeliveryTruckIcon } from '@/components/ui/BrandIcons';

export default function ProductCatalogSection() {
  return (
    <section
      id="katalog"
      className="py-16 sm:py-22 border-b-2 border-border-ink"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-espresso tracking-tight">
            Pilih Ukuran Kemasan Sesuai Kebutuhan
          </h2>
          <p className="mt-2.5 text-muted text-sm sm:text-base leading-relaxed">
            Mau buat stok camilan sendiri di rumah, suguhan tamu, oleh-oleh,
            atau dijual lagi di warung — semua tersedia dengan harga Rp 10.000
            sampai Rp 20.000.
          </p>
        </div>

        {/* 2x2 Product Grid (Clean without peeking mascot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {PRODUCT_VARIANTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Shipping Info Banner */}
        <div className="mt-9 rounded-xl bg-sun-gold/55 border-2 border-border-ink shadow-[4px_4px_0_#36251A] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-lg bg-white border-[1.5px] border-border-ink flex items-center justify-center text-espresso shrink-0">
              <DeliveryTruckIcon className="w-5.5 h-5.5" />
            </div>
            <div>
              <p className="font-display font-extrabold text-espresso text-sm sm:text-base">
                Melayani pengiriman ke Lawang, Malang Raya, Sidoarjo, hingga
                seluruh Indonesia
              </p>
              <p className="text-xs text-muted mt-0.5">
                Bisa pesan langsung lewat WhatsApp atau checkout praktis lewat
                Shopee.
              </p>
            </div>
          </div>
          <a
            href="#reseller"
            className="shrink-0 text-xs sm:text-sm font-extrabold text-terracotta hover:underline"
          >
            Mau beli partai grosir? Cek info Reseller →
          </a>
        </div>
      </div>
    </section>
  );
}
