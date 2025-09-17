import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-black/40">
      <div className="container mx-auto text-center space-y-8">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Logo className="w-8 h-8 text-primary" />
            <span className="text-xl font-semibold text-primary">a1.dev</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            System Optimization &<br />
            Personalization: A New Era.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            A1 Suite: Take your operating system to the next level with easy-to-use tools, 
            high performance, and total personalization. Now available for Windows and Linux.
          </p>
          
          <Button variant="hero" size="lg" className="group relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Now
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;