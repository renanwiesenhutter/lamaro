import { Scissors } from "lucide-react";
import { Card } from "@/components/ui/card";

const IconFace = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-gold"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2.5C5.30654 2.5 7.64234 3.9904 8.8285 6.87442L8.93633 7.14888L9.05212 7.45764L5.86263 18.6208C5.71091 19.1519 6.0184 19.7054 6.54944 19.8571C6.66433 19.8899 6.78385 19.9018 6.90234 19.8925L7.02027 19.8761L9.09538 19.4611L10.3143 19.9487C10.7115 20.1076 11.1642 19.9355 11.3556 19.5528C11.5076 19.2487 11.4094 18.885 11.139 18.6957L11.0528 18.6444L10.5528 18.3944L11.4472 16.6056L11.9472 16.8556C13.2696 17.5168 13.8056 19.1248 13.1444 20.4472C12.5153 21.7055 11.0624 22.3004 9.7428 21.8679L9.57151 21.8056L8.904 21.538L7.41251 21.8373C7.02195 21.9154 6.62055 21.9148 6.23165 21.8365L6 21.7801C4.46379 21.3412 3.55116 19.7816 3.89606 18.2423L3.93959 18.0714L6.944 7.555L6.87652 7.39849C6.01728 5.51023 4.52707 4.57086 2.2645 4.50386L2 4.5V2.5ZM18.9116 7.95501L20.5884 9.04499C19.5472 10.6469 18.1609 11.5 16.5 11.5C14.9182 11.5 13.5854 10.7262 12.5626 9.26872L12.4116 9.04499L14.0884 7.95501C14.7806 9.0198 15.5609 9.5 16.5 9.5C17.3804 9.5 18.1213 9.07795 18.7807 8.14783L18.9116 7.95501ZM16.5 2.5C18.9331 2.5 20.9934 3.57273 22.614 5.65404L22.8064 5.90864L21.1936 7.09136C19.9091 5.33974 18.3695 4.5 16.5 4.5C14.7154 4.5 13.2316 5.26514 11.9832 6.85815L11.8064 7.09136L10.1936 5.90864C11.8424 3.66026 13.9695 2.5 16.5 2.5Z"
      fill="currentColor"
    />
  </svg>
);

const IconTweezers = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-gold"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5 2.5C22.8807 3.88071 22.8807 6.11928 21.5 7.5L7.5 21.5C6.11928 22.8807 3.88071 22.8807 2.5 21.5C1.11928 20.1193 1.11928 17.8807 2.5 16.5L16.5 2.5C17.8807 1.11928 20.1193 1.11928 21.5 2.5ZM19 11.3431L21.7486 15.4836C22.7756 17.0305 22.5699 19.0869 21.257 20.3999C20.0105 21.6464 17.9895 21.6464 16.743 20.3999C15.4301 19.0869 15.2244 17.0305 16.2513 15.4836L19 11.3431ZM12.9995 8.82746L3.91421 17.9142C3.31455 18.5139 3.31455 19.4861 3.91421 20.0858C4.48056 20.6521 5.37924 20.6836 5.98252 20.1802L6.08578 20.0858L12.9995 13.1715V8.82746ZM19 14.9593L17.9176 16.5898C17.4171 17.3436 17.5174 18.3458 18.1572 18.9856C18.6227 19.4511 19.3773 19.4511 19.8428 18.9856C20.445 18.3834 20.5692 17.4603 20.1645 16.7252L20.0824 16.5898L19 14.9593ZM18.0175 3.81982L17.9142 3.91421L14.9995 6.82746V11.1715L20.0858 6.08578C20.6854 5.48612 20.6854 4.51387 20.0858 3.91421C19.5194 3.34786 18.6208 3.3164 18.0175 3.81982Z"
      fill="currentColor"
    />
  </svg>
);

const services = [
  // ------------------ FRISEUR (TESOURA) ------------------
  {
    icon: Scissors,
    title: "Waschen, Schneiden & Föhnen",
    description: "Waschen, Schneiden und Föhnen",
    price: "18 €"
  },
  {
    icon: Scissors,
    title: "Trockenhaarschnitt",
    description: "Schnitt ohne Waschen",
    price: "16 €"
  },
  {
    icon: Scissors,
    title: "Messerhaarschnitt",
    description: "Präziser Schnitt mit dem Messer",
    price: "19 €"
  },
  {
    icon: Scissors,
    title: "Vollbart in Form schneiden & Nassrasur",
    description: "Vollbart in Form + klassische Nassrasur",
    price: "12 €"
  },
  {
    icon: Scissors,
    title: "Bartrasur",
    description: "Komplette Bartrasur",
    price: "10 €"
  },
  {
    icon: Scissors,
    title: "Bart schneiden (Nur mit Maschine)",
    description: "Bartpflege nur mit Maschine",
    price: "7 €"
  },

  // ------------------ GESICHT (PESSOINHA) ------------------
  {
    icon: IconFace,
    title: "Gesichtsbehandlung – Peeling",
    description: "Tiefenreinigendes Peeling für das Gesicht",
    price: "10 €"
  },
  {
    icon: IconFace,
    title: "Gesichtsbehandlung – Warmwachs",
    description: "Gesichtsenthaarung mit Warmwachs",
    price: "5 €"
  },
  {
    icon: IconFace,
    title: "Augenbrauen zupfen",
    description: "Präzises Formen der Augenbrauen",
    price: "7 €"
  },

  // ------------------ HAARENTFERNUNG (ESTRELA) ------------------
  {
    icon: IconTweezers,
    title: "Herren Waxing – Nase und Ohren",
    description: "Sanfte Haarentfernung an Nase und Ohren mit Warmwachs",
    price: "5 €"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
            Dienstleistungen
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            UNSERE
            <span className="block text-gold">DIENSTLEISTUNGEN</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wir bieten eine vollständige Auswahl an Dienstleistungen, um Ihr Aussehen zu pflegen
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
