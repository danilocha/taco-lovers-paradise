import { Card } from "./ui/card";

const MENU_ITEMS: any[] = [];

export const FeaturedMenu = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Nuestras Especialidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <Card key={item.name} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-secondary font-bold">{item.price}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};