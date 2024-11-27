import { Button } from "./ui/button";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/573108637981", "_blank");
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-primary">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c312d14f-d2dc-4cde-a775-6719aa44a921.png')] bg-center bg-no-repeat opacity-10" />
      <div className="container mx-auto px-4 text-center relative animate-fade-up">
        <img
          src="/lovable-uploads/c312d14f-d2dc-4cde-a775-6719aa44a921.png"
          alt="Qué Tacazo Logo"
          className="w-64 md:w-96 mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          ¡Los mejores tacos de Ibagué!
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Sabor auténtico mexicano hasta la puerta de tu casa
        </p>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-white"
          onClick={handleWhatsAppClick}
        >
          Ordena Ahora
        </Button>
      </div>
    </div>
  );
};