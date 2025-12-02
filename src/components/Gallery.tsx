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
            Galerie
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            UNSER
            <span className="block text-gold">ARBEIT</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sehen Sie sich einige unserer Arbeiten und die elegante Atmosphäre unseres Barbershops an
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square max-w-[500px] mx-auto w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"/>
              <div className="absolute inset-0 border-2 border-gold/0 md:group-hover:border-gold/50 transition-colors duration-300 rounded-lg"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
