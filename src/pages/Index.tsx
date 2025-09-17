import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AvailabilitySection from '@/components/AvailabilitySection';
import ClosingSection from '@/components/ClosingSection';
import Footer from '@/components/Footer';
import galaxyBg from '@/assets/galaxy-background.jpg';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${galaxyBg})` }}
      />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <AvailabilitySection />
        <ClosingSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
