import aboutImage from "@/assets/about-barbershop.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="text-gold font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              TRADIÇÃO E
              <span className="block text-gold">EXCELÊNCIA</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Somos uma barbearia premium dedicada a oferecer os melhores serviços 
              de corte, barba e estilo para o homem moderno. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Com profissionais altamente qualificados e um ambiente sofisticado, 
              proporcionamos uma experiência única que combina tradição com as 
              últimas tendências do mercado.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-gold mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-gold mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-gold mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
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
