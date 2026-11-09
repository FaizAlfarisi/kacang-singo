import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import { siteConfig } from '@/config/site';
import JsonLd from '@/components/seo/JsonLd';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domainUrl),
  title: {
    default: 'Kacang Pedes Singo | Camilan Kacang Pedas Manis Khas Malang',
    template: '%s | Kacang Pedes Singo',
  },
  description:
    'Kacang Pedes Singo khas Malang. Kacang tanah goreng renyah dengan bumbu cabai merah, gula, dan asam jawa yang medok tanpa pengawet. Harga mulai Rp 10.000, melayani eceran & grosir reseller.',
  keywords: [
    'Kacang Pedes Singo',
    'Kacang Pedas Khas Malang',
    'Oleh-oleh Khas Malang',
    'Camilan Kacang Pedas Manis',
    'Kacang Pedas Daun Jeruk Malang',
    'Grosir Camilan Malang',
    'Reseller Camilan Jawa Timur',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteConfig.domainUrl,
    siteName: siteConfig.brandName,
    title: 'Kacang Pedes Singo — Renyah Kacangnya, Pedasnya Bikin Kangen!',
    description: siteConfig.subTagline,
    images: [
      {
        url: '/images/brand/maskot_kacang_api_clean.png',
        width: 1024,
        height: 1024,
        alt: 'Kacang Pedes Singo Khas Malang',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${bricolage.variable} ${jakarta.variable}`}>
      <body className="antialiased selection:bg-terracotta selection:text-white">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
