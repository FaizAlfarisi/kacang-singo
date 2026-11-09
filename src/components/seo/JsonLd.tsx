import { siteConfig } from '@/config/site';
import { PRODUCT_VARIANTS } from '@/data/products';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.brandName,
    url: siteConfig.domainUrl,
    logo: `${siteConfig.domainUrl}/images/brand/logo_singo_clean.png`,
    description: siteConfig.subTagline,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+${siteConfig.contact.whatsappNumber}`,
      contactType: 'sales',
      areaServed: 'ID',
      availableLanguage: 'Indonesian',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Kacang Pedes Singo Khas Malang',
    image: `${siteConfig.domainUrl}/images/brand/maskot_kacang_api_clean.png`,
    description: siteConfig.subTagline,
    brand: {
      '@type': 'Brand',
      name: siteConfig.brandName,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: 10000,
      highPrice: 20000,
      offerCount: PRODUCT_VARIANTS.length,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
