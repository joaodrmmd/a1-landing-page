import { useEffect, useRef, useState } from 'react';
import { Zap, Palette, Smile } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Incredible Performance',
    description: 'Experience lightning-fast system optimization that makes your computer run smoother and faster than ever before.'
  },
  {
    icon: Palette,
    title: 'Total Personalization',
    description: 'Customize every aspect of your system with intuitive tools that let you create the perfect computing environment.'
  },
  {
    icon: Smile,
    title: 'Ease of Use',
    description: 'Simple, elegant interface designed for everyone. No technical expertise required to unlock your system\'s full potential.'
  }
];

const FeaturesSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animations
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-black/60">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your System.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            With A1 Suite, you have everything you need for a faster, cleaner, and more tailored system.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`bg-card backdrop-blur-md border border-border/50 rounded-2xl p-8 text-center transition-all duration-700 hover:shadow-card hover:scale-105 ${
                  visibleCards[index] 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;