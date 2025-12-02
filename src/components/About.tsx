import aboutImage from "@/assets/about-barbershop.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="text-gold font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
              Über Uns
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              TRADITION UND
              <span className="block text-gold">EXZELLENZ</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Wir sind ein moderner Barbershop, der sich darauf konzentriert, Männern höchste Qualität in Stil, Präzision und Pflege zu bieten. Unser Anspruch ist es, 
              jeden Haarschnitt und jede Bartbehandlung zu einem besonderen Erlebnis zu machen – individuell, 
              sorgfältig ausgeführt und mit echter Liebe zum Detail. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mit hochqualifizierten Fachleuten und einem anspruchsvollen Ambiente bieten wir ein einzigartiges Erlebnis,
              das Tradition mit den neuesten Markttrends vereint.
            </p>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={aboutImage} 
                alt="Profissional barbeiro em ação" 
                className="w-full h-[600px] object-cover hover-scale"
              />
              <div className="absolute inset-0 border-2 border-gold/20 rounded-lg pointer-events-none" />
            </div>
            
            {/* Decorative hexagons */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/30 rotate-45" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/20 rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
