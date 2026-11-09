import { getGeneralWhatsAppUrl } from '@/lib/utils';
import { WhatsAppBrandIcon } from '@/components/ui/BrandIcons';

export default function FloatingWhatsApp() {
  const waUrl = getGeneralWhatsAppUrl();

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tanya atau Pesan lewat WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm px-4 py-2.5 rounded-[10px] border-2 border-border-ink shadow-[4px_4px_0_#36251A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#36251A] transition-all"
    >
      <WhatsAppBrandIcon className="w-4.5 h-4.5" />
      <span>Chat WhatsApp</span>
    </a>
  );
}
