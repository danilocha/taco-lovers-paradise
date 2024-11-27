import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Encuéntranos
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Visítanos en nuestra ubicación o haz tu pedido para llevar
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">Dirección</h3>
              <p className="text-gray-600 mb-2">Av. México #123</p>
              <p className="text-gray-600 mb-4">Ciudad de México, CDMX</p>
              <Button variant="outline" className="w-full">
                Ver en mapa
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">Horario</h3>
              <p className="text-gray-600 mb-2">Lunes a Sábado: 11:00 - 22:00</p>
              <p className="text-gray-600 mb-4">Domingo: 12:00 - 20:00</p>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                Llamar ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};