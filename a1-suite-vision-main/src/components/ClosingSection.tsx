import { Button } from '@/components/ui/button';
import { Download, FileText, Check } from 'lucide-react';

const ClosingSection = () => {
  return (
    <section className="w-full bg-black/80 py-24 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get A1 Suite Today
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Transform your system experience with our performance-focused multi-tool. Join developers who value efficiency, customization, and seamless configuration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              variant="default"
              size="lg"
              className="group relative overflow-hidden px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow text-black hover:shadow-glow transition-all duration-300"
            >
              <Download className="w-6 h-6 mr-3" />
              Download A1 Suite
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
            >
              <FileText className="w-6 h-6 mr-3" />
              View Documentation
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-primary">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="text-lg">Multi-OS Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="text-lg">Performance Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="text-lg">Easy Configuration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;