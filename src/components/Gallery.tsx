import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";

const galleryImages = [
  { src: gallery1, alt: "Corte masculino premium" },
  { src: gallery2, alt: "Barba bem aparada" },
  { src: gallery3, alt: "Interior da barbearia" },
  { src: gallery4, alt: "Profissional em ação" }
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
            Galeria
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            NOSSO
            <span className="block text-gold">TRABALHO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos e o ambiente sofisticado da nossa barbearia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg group cursor-pointer h-80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
