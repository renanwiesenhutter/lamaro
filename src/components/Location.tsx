import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
            Localização
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            VENHA NOS
            <span className="block text-gold">VISITAR</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in-up">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua da Elegância, 123<br />
                  Centro - São Paulo, SP<br />
                  CEP 01234-567
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Horário</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9h - 20h<br />
                  Sábado: 9h - 18h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Contato</h3>
                <p className="text-muted-foreground">
                  (11) 98765-4321<br />
                  contato@barbeariapremiuim.com.br
                </p>
              </div>
            </div>

            <Button variant="gold" size="lg" className="w-full md:w-auto">
              AGENDAR AGORA
            </Button>
          </div>

          <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975631091914!2d-46.65441708502205!3d-23.56148098468213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sSão%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Localização da Barbearia Premium"
            />
            <div className="absolute inset-0 border-2 border-gold/20 rounded-lg pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
