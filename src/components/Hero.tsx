import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.webp";

const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // scroll smooth para botões
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // EFEITO SUAVE VIA requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Ultra slow + super smooth
          const scale = Math.max(0.6, 1 - scrollY * 0.00005);
          const darken = Math.min(scrollY / 2500, 0.9);

          if (imgRef.current) {
            imgRef.current.style.transform = `scale(${scale})`;
          }

          if (overlayRef.current) {
            overlayRef.current.style.backgroundColor = `rgba(0,0,0,${darken})`;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-dvh w-full flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        
        {/* Imagem com zoom-out suave */}
        <img
          ref={imgRef}
          src={heroImage}
          alt="Interior premium de barbearia"
          className="w-full h-full object-cover will-change-transform"
          style={{ transform: "scale(1)" }}
        />

        {/* Overlay escurecendo suave */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(0,0,0,0)" }}
        />

        {/* Seus gradientes originais */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
        <h1 className="font-heading text-5xl md:text-8xl font-bold mb-6 tracking-tight">
          BART, HAAR
          <span className="block text-gold text-[45px] md:text-8xl">& SCHNURRBART</span>
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
      </div>
    </section>
  );
};

export default Hero;