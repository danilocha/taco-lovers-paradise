import { Button } from "./ui/button";

export const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/573108637981", "_blank");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Haz tu pedido a domicilio y disfruta de nuestros deliciosos tacos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">Ubicación</h3>
              <p className="text-gray-600 mb-2">Ibagué, Tolima</p>
              <p className="text-gray-600 mb-4">Colombia</p>
              <p className="text-gray-600 mb-4">Servicio a domicilio</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">Horario</h3>
              <p className="text-gray-600 mb-2">Lunes a Sábado: 11:00 - 22:00</p>
              <p className="text-gray-600 mb-4">Domingo: 12:00 - 20:00</p>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90"
                onClick={handleWhatsAppClick}
              >
                Pedir por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};