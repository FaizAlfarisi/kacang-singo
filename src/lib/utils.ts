import { siteConfig } from '@/config/site';
import { ProductVariant } from '@/types';

export function buildWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedMessage}`;
}

export function getProductWhatsAppUrl(product: ProductVariant): string {
  return buildWhatsAppUrl(product.waMessageTemplate);
}

export function getResellerWhatsAppUrl(): string {
  return buildWhatsAppUrl(siteConfig.waTemplates.resellerInquiry);
}

export function getGeneralWhatsAppUrl(): string {
  return buildWhatsAppUrl(siteConfig.waTemplates.generalInquiry);
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
