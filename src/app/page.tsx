import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import TasteIngredientsSection from '@/components/sections/TasteIngredientsSection';
import ProductCatalogSection from '@/components/sections/ProductCatalogSection';
import MalangStorySection from '@/components/sections/MalangStorySection';
import ResellerSection from '@/components/sections/ResellerSection';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TasteIngredientsSection />
        <ProductCatalogSection />
        <MalangStorySection />
        <ResellerSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
