import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  // const services = [
  //   {
  //     title: 'Terapia Individual',
  //     description: 'Sesiones personalizadas para abordar problemas específicos y promover el crecimiento personal.',
  //     icon: 'pi-user',
  //     color: 'blue'
  //   },
  //   {
  //     title: 'Terapia de Pareja',
  //     description: 'Ayudamos a las parejas a mejorar su comunicación y resolver conflictos.',
  //     icon: 'pi-heart',
  //     color: 'pink'
  //   },
  //   {
  //     title: 'Terapia Familiar',
  //     description: 'Trabajamos con familias para fortalecer vínculos y resolver dinámicas complejas.',
  //     icon: 'pi-users',
  //     color: 'green'
  //   },
  //   {
  //     title: 'Psicología Infantil',
  //     description: 'Especialistas en el desarrollo emocional y conductual de niños y adolescentes.',
  //     icon: 'pi-star',
  //     color: 'orange'
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Carmen Paz Chaparro</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-blue-700">Psicóloga Clínica</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Acompañando tu bienestar emocional con experiencia, calidez y compromiso.
          </p>
          <Button
            label="Agendar cita gratuita"
            icon="pi pi-calendar"
            className="p-button-lg bg-blue-600 hover:bg-blue-700 border-blue-600"
            size="large"
            onClick={() => navigate('/agendar-cita')}
          />
        </div>
      </section>

      {/* Resumen Sobre mí */}
      <section className="py-10 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="bg-white border-0 shadow-sm flex flex-col items-center text-center">
            <Avatar icon="pi pi-user" size="xlarge" className="mb-4" shape="circle" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sobre mí</h3>
            <p className="text-gray-700 text-base mb-4">
              Psicóloga clínica con amplia experiencia en consulta individual, familiar y en el ámbito escolar. Mi enfoque es cercano, empático y profesional, acompañando a personas en sus procesos de cambio y bienestar emocional.
            </p>
            <Button
              label="Ver más"
              icon="pi pi-arrow-right"
              className="p-button-text text-blue-700"
              onClick={() => navigate('/about-me')}
            />
          </Card>
        </div>
      </section>

      {/* Formación académica */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="bg-white border-0 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Formación académica</h3>
            <ul className="text-gray-700 text-base list-disc pl-6 space-y-2">
              <li>Licenciatura en Psicología, Universidad Andrés Bello, Viña del Mar.</li>
              <li>Magíster en Psicodiagnóstico e Intervenciones Terapéuticas, Universidad Andrés Bello, Viña del Mar.</li>
              <li>Diplomado en Peritaje Psicológico y Social en Contextos Judiciales, Universidad Andrés Bello.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Áreas de experiencia */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="bg-white border-0 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Áreas de experiencia</h3>
            <ul className="text-gray-700 text-base list-disc pl-6 space-y-2">
              <li>Consulta clínica individual y familiar</li>
              <li>Psicología escolar y convivencia</li>
              <li>Intervención en contextos judiciales</li>
              <li>Apoyo en cuidados paliativos</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Quieres dar el primer paso hacia tu bienestar emocional?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Agenda tu primera sesión gratuita y conversemos.
          </p>
          <Button
            label="Agendar cita gratuita"
            icon="pi pi-calendar-plus"
            className="p-button-lg bg-blue-600 hover:bg-blue-700 border-blue-600"
            size="large"
            onClick={() => navigate('/schedule-appointment')}
          />
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-20 bg-gray-50">
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
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-sm">
                <div className="mb-4">
                  <i className={`${service.icon} text-4xl text-gray-600`}></i>
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
      </section> */}

      {/* Why Choose Us Section */}
      {/* <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegirnos?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="pi pi-check-circle text-gray-600 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Profesionales Certificados</h3>
                    <p className="text-gray-600">Nuestro equipo cuenta con licencias profesionales y formación continua.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="pi pi-check-circle text-gray-600 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Enfoque Personalizado</h3>
                    <p className="text-gray-600">Cada tratamiento se adapta a las necesidades específicas del paciente.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="pi pi-check-circle text-gray-600 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Ambiente Seguro</h3>
                    <p className="text-gray-600">Proporcionamos un espacio confidencial y libre de juicios.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="pi pi-check-circle text-gray-600 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Resultados Comprobados</h3>
                    <p className="text-gray-600">Métodos basados en evidencia científica para obtener resultados efectivos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Agenda tu Primera Sesión</h3>
              <p className="text-gray-600 mb-6">
                Da el primer paso hacia tu bienestar emocional. 
                Nuestra primera sesión es completamente gratuita.
              </p>
              <Button 
                label="Solicitar Cita Gratuita" 
                icon="pi pi-calendar-plus" 
                className="w-full p-button-lg bg-blue-600 hover:bg-blue-700 border-blue-600"
                size="large"
                onClick={() => navigate('/agendar-cita')}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-gray-200 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-600">Pacientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-gray-600">Satisfacción del Paciente</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-600">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 