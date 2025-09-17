import { useEffect, useRef, useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

const platforms = [
  {
    name: 'Windows',
    icon: Monitor,
    status: 'available',
    label: 'Now Available'
  },
  {
    name: 'Linux',
    icon: Monitor,
    status: 'available',
    label: 'Now Available'
  },
  {
    name: 'macOS',
    icon: Monitor,
    status: 'progress',
    label: 'In Progress'
  },
  {
    name: 'Android',
    icon: Smartphone,
    status: 'coming',
    label: 'Coming Soon'
  }
];

const AvailabilitySection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
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
    <section ref={sectionRef} className="py-24 px-6 bg-black/70">
      <div className="container mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Where you can find us.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A1 Suite is now available for Windows and Linux, with macOS support in progress and Android coming soon.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            const isAvailable = platform.status === 'available';
            const isProgress = platform.status === 'progress';
            
            return (
              <div
                key={platform.name}
                className={`transition-all duration-700 hover:scale-110 cursor-pointer ${
                  visible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  isAvailable 
                    ? 'bg-card border-primary shadow-glow' 
                    : 'bg-card/50 border-border/50'
                }`}>
                  <Icon 
                    className={`w-12 h-12 mx-auto mb-4 ${
                      isAvailable ? 'text-primary' : 'text-muted-foreground'
                    }`} 
                  />
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isAvailable ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {platform.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    isAvailable 
                      ? 'bg-primary text-primary-foreground' 
                      : isProgress
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {platform.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AvailabilitySection;