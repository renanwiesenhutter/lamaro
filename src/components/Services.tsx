import { Scissors, Sparkles, Star, User, Flame, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Herrenhaarschnitt",
    description: "Corte masculino clássico",
    price: "12 €"
  },
  {
    icon: Scissors,
    title: "Waschen + Schneiden & Föhnen",
    description: "Lavagem, corte e secagem",
    price: "14 €"
  },
  {
    icon: Scissors,
    title: "Maschinenhaarschnitt",
    description: "Corte à máquina",
    price: "10 €"
  },
  {
    icon: Sparkles,
    title: "Kompletter Bart auf mit Maschine",
    description: "Barba completa com máquina",
    price: "7 €"
  },
  {
    icon: Sparkles,
    title: "Kompletter Bartrasur",
    description: "Barbear completo",
    price: "10 €"
  },
  {
    icon: Sparkles,
    title: "Bartrasur mit Form",
    description: "Barbear com modelagem",
    price: "12 €"
  },
  {
    icon: Eye,
    title: "Augenbrauen zupfen mit Faden",
    description: "Sobrancelhas com linha",
    price: "7 €"
  },
  {
    icon: User,
    title: "Gesicht zupfen mit Faden",
    description: "Rosto com linha",
    price: "5 €"
  },
  {
    icon: User,
    title: "Gesicht + Wangen",
    description: "Rosto e bochechas",
    price: "8 €"
  },
  {
    icon: Flame,
    title: "Nase & Ohren mit Warmwachs",
    description: "Nariz e orelhas com cera quente",
    price: "5 €"
  },
  {
    icon: Star,
    title: "Gesichtsmaske",
    description: "Máscara facial",
    price: "10 €"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            NOSSOS
            <span className="block text-gold">SERVIÇOS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços premium para cuidar do seu visual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-gold/50 transition-all duration-300 p-8 group hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border border-gold/30 rotate-45" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-heading font-bold text-gold">
                  {service.price}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
