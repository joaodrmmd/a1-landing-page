import { Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">a1.dev</span>
            </div>
            <p className="text-muted-foreground">
              Transforming systems, one optimization at a time.
            </p>
          </div>
          
          <div className="md:text-right">
            <div className="flex flex-wrap gap-6 mb-6 md:justify-end">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
            
            <div className="flex gap-4 md:justify-end">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/20 text-center text-muted-foreground">
          <p>&copy; 2024 a1.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;