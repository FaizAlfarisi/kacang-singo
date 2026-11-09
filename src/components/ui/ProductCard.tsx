import Image from 'next/image';
import { ProductVariant } from '@/types';
import { siteConfig } from '@/config/site';
import { formatRupiah, getProductWhatsAppUrl } from '@/lib/utils';
import { ShopeeBagIcon, WhatsAppChatIcon } from '@/components/ui/BrandIcons';

interface ProductCardProps {
  product: ProductVariant;
}

export default function ProductCard({ product }: ProductCardProps) {
  const waLink = getProductWhatsAppUrl(product);

  return (
    <article
      className={`group relative w-full flex flex-col rounded-[14px] bg-white border-[1.5px] sm:border-2 transition-all duration-200 overflow-hidden ${
        product.isFeatured
          ? 'border-terracotta shadow-[4px_4px_0_#B84227] sm:shadow-[6px_6px_0_#B84227]'
          : 'border-border-ink shadow-[3px_3px_0_#36251A] sm:shadow-[5px_5px_0_#36251A]'
      }`}
    >
      {/* Top Badge */}
      <div className="px-4 pt-4 sm:px-5 sm:pt-4 flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-extrabold border-[1.5px] border-border-ink ${
            product.isFeatured
              ? 'bg-terracotta text-white'
              : 'bg-sun-gold text-espresso'
          }`}
        >
          {product.badge}
        </span>
        <span className="hidden sm:inline text-xs font-bold text-muted">
          {product.segmentTag}
        </span>
      </div>

      {/* Product Image Stage (More compact aspect ratio on mobile) */}
      <div className="relative mx-4 mt-3.5 sm:mx-5 sm:mt-3.5 aspect-[16/10] sm:aspect-4/3 rounded-[10px] bg-warm-sand/60 overflow-hidden border-[1.5px] border-border-ink select-none">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          draggable={false}
          className="object-contain p-3 sm:p-3.5 transition-transform duration-300 group-hover:scale-103 pointer-events-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
        />
      </div>

      {/* Product Body Details */}
      <div className="p-4.5 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display text-base sm:text-lg font-extrabold text-espresso">
              {product.name}
            </h3>
            <p className="font-display text-lg sm:text-xl font-extrabold text-terracotta shrink-0">
              {formatRupiah(product.priceIDR)}
            </p>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed line-clamp-2 sm:line-clamp-none">
            {product.description}
          </p>

          {/* Physical Spec Table */}
          <dl className="mt-4 grid grid-cols-2 gap-2.5 p-2.5 rounded-lg bg-warm-cream border border-border-warm sm:border-[1.5px] text-[11px] sm:text-xs">
            <div>
              <dt className="text-muted font-medium">Isi Kemasan</dt>
              <dd className="font-bold text-espresso mt-0.5">{product.packCount}</dd>
            </div>
            <div>
              <dt className="text-muted font-medium">Berat Bersih</dt>
              <dd className="font-bold text-espresso mt-0.5">
                ± {product.netWeightGrams} gram
              </dd>
            </div>
          </dl>
        </div>

        {/* Dual Action CTA Buttons (Side-by-side 2 cols even on mobile) */}
        <div className="mt-4.5 pt-4 border-t border-border-warm grid grid-cols-2 gap-2.5">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2.5 sm:px-3.5 sm:py-2.5 rounded-lg bg-brand-green hover:bg-brand-green-hover text-white font-bold text-[11px] sm:text-xs border-[1.5px] border-border-ink shadow-[2px_2px_0_#36251A] transition-colors"
          >
            <WhatsAppChatIcon className="w-3.5 h-3.5 shrink-0" />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Pesan lewat WhatsApp</span>
          </a>

          <a
            href={siteConfig.contact.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2.5 sm:px-3.5 sm:py-2.5 rounded-lg bg-amber hover:bg-amber-hover text-white font-bold text-[11px] sm:text-xs border-[1.5px] border-border-ink shadow-[2px_2px_0_#36251A] transition-colors"
          >
            <ShopeeBagIcon className="w-3.5 h-3.5 shrink-0" />
            <span className="sm:hidden">Shopee</span>
            <span className="hidden sm:inline">Beli di Shopee</span>
          </a>
        </div>
      </div>
    </article>
  );
}
