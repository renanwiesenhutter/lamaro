import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.webp";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-dvh w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Interior premium de barbearia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
        <h1 className="font-heading text-5xl md:text-8xl font-bold mb-6 tracking-tight">
          BART, HAAR
          <span className="block text-gold">& SCHNURRBART</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
          Tradition, Eleganz und Stil an einem einzigen Ort. 
          Hochwertige Dienstleistungen für den modernen Mann.
        </p>
        
        <a 
          href="https://www.treatwell.de/ort/la-maro" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            variant="hero" 
            size="xl"
            className="group"
          >
            JETZT TERMIN VEREINBAREN
          </Button>
        </a>

        {/* Decorative Element */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
