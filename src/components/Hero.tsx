import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
        <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          BARBA, CABELO
          <span className="block text-gold">& BIGODE</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
          Tradição, elegância e estilo em um só lugar. 
          Serviços premium para o homem moderno.
        </p>
        
        <Button 
          variant="hero" 
          size="xl"
          onClick={() => scrollToSection('servicos')}
          className="group"
        >
          AGENDAR AGORA
        </Button>

        {/* Decorative Element */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
