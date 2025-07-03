import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const HomePage: React.FC = () => {
  const services = [
    {
      title: 'Terapia Individual',
      description: 'Sesiones personalizadas para abordar problemas específicos y promover el crecimiento personal.',
      icon: 'pi-user',
      color: 'blue'
    },
    {
      title: 'Terapia de Pareja',
      description: 'Ayudamos a las parejas a mejorar su comunicación y resolver conflictos.',
      icon: 'pi-heart',
      color: 'pink'
    },
    {
      title: 'Terapia Familiar',
      description: 'Trabajamos con familias para fortalecer vínculos y resolver dinámicas complejas.',
      icon: 'pi-users',
      color: 'green'
    },
    {
      title: 'Psicología Infantil',
      description: 'Especialistas en el desarrollo emocional y conductual de niños y adolescentes.',
      icon: 'pi-star',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenido a Consulta Psicológica
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Tu bienestar mental es nuestra prioridad. Ofrecemos servicios profesionales 
              de psicología con un enfoque personalizado y compasivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                label="Agendar Cita" 
                icon="pi pi-calendar" 
                className="p-button-lg p-button-raised"
                size="large"
              />
              <Button 
                label="Conoce Nuestros Servicios" 
                icon="pi pi-arrow-right" 
                className="p-button-lg p-button-outlined p-button-secondary"
                size="large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios psicológicos para ayudarte 
              en tu camino hacia el bienestar emocional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <i className={`${service.icon} text-4xl text-${service.color}-500`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegirnos?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="pi pi-check-circle text-green-500 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Profesionales Certificados</h3>
                    <p className="text-gray-600">Nuestro equipo cuenta con licencias profesionales y formación continua.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="pi pi-check-circle text-green-500 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Enfoque Personalizado</h3>
                    <p className="text-gray-600">Cada tratamiento se adapta a las necesidades específicas del paciente.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="pi pi-check-circle text-green-500 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Ambiente Seguro</h3>
                    <p className="text-gray-600">Proporcionamos un espacio confidencial y libre de juicios.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="pi pi-check-circle text-green-500 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Resultados Comprobados</h3>
                    <p className="text-gray-600">Métodos basados en evidencia científica para obtener resultados efectivos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Agenda tu Primera Sesión</h3>
              <p className="text-gray-600 mb-6">
                Da el primer paso hacia tu bienestar emocional. 
                Nuestra primera sesión es completamente gratuita.
              </p>
              <Button 
                label="Solicitar Cita Gratuita" 
                icon="pi pi-calendar-plus" 
                className="w-full p-button-lg"
                size="large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Pacientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Satisfacción del Paciente</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 