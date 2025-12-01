import { Facebook, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded flex items-center justify-center">
            <span className="text-background font-heading font-bold text-xl">LM</span>
          </div>
          <span className="font-heading text-xl font-semibold tracking-wider">LA MARO</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-gold transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-gold transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
