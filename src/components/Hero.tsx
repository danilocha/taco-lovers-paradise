import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-primary">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/1dafafee-27a1-4dc9-8a0c-5ae71f586f6e.png')] bg-center bg-no-repeat opacity-10" />
      <div className="container mx-auto px-4 text-center relative animate-fade-up">
        <img
          src="/lovable-uploads/1dafafee-27a1-4dc9-8a0c-5ae71f586f6e.png"
          alt="Qué Tacazo Logo"
          className="w-64 md:w-96 mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          ¡Los mejores tacos de la ciudad!
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Sabor auténtico mexicano en cada bocado
        </p>
        <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
          Ordena Ahora
        </Button>
      </div>
    </div>
  );
};