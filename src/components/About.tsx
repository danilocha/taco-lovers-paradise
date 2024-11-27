export const About = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Nuestra Historia
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            En ¡Que Tacazo! preparamos los tacos más sabrosos y auténticos de la ciudad. 
            Con ingredientes frescos y recetas tradicionales, te ofrecemos una experiencia 
            única para disfrutar de la auténtica comida mexicana. ¡Ven a probar nuestros tacos!
          </p>
          <div className="flex justify-center space-x-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary">7+</h3>
              <p className="text-gray-600">Años de experiencia</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary">1000+</h3>
              <p className="text-gray-600">Clientes satisfechos</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary">20+</h3>
              <p className="text-gray-600">Variedades de tacos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};