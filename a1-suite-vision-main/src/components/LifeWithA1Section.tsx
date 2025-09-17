import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

const LifeWithA1Section = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-24 px-6 bg-black/60">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Life with A1 Suite: No More Hassle.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the transformation from a slow, cluttered system to peak performance and elegance.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Before Section */}
            <div className={`bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl p-8 text-center transition-all duration-1000 ${
              isPlaying ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/20 rounded-2xl mb-4">
                  <span className="text-3xl">😤</span>
                </div>
                <h3 className="text-2xl font-semibold text-destructive mb-4">Before A1 Suite</h3>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                  <span>Slow boot times and laggy performance</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                  <span>Cluttered desktop and confusing settings</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                  <span>Constant system maintenance hassles</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                  <span>Generic interface that doesn't fit your style</span>
                </div>
              </div>
            </div>

            {/* After Section */}
            <div className={`bg-card/30 backdrop-blur-md border border-primary/50 rounded-2xl p-8 text-center transition-all duration-1000 ${
              isPlaying ? 'opacity-100 scale-105 shadow-glow' : 'opacity-70 scale-95'
            }`}>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">After A1 Suite</h3>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>Lightning-fast performance and instant responsiveness</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>Clean, organized, and beautifully customized desktop</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>Automated optimization running in the background</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>Personalized interface that reflects your personality</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Control */}
          <div className="text-center mt-12">
            <Button 
              onClick={toggleAnimation}
              variant="hero" 
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {isPlaying ? 'Pause Demo' : 'See the Transformation'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeWithA1Section;