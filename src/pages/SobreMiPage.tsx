import React from 'react';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const SobreMiPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <Button
          label="Volver al inicio"
          icon="pi pi-arrow-left"
          className="p-button-text mb-6"
          onClick={() => navigate('/')}
        />
        <Card className="bg-white border-0 shadow-sm p-6 flex flex-col items-center text-center">
          <Avatar icon="pi pi-user" size="xlarge" className="mb-4" shape="circle" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Carmen Paz Chaparro</h1>
          <h2 className="text-lg font-medium text-blue-700 mb-4">Psicóloga Clínica</h2>
          <p className="text-gray-700 text-lg mb-4">
            ¡Hola! Soy Carmen Paz Chaparro, psicóloga con años de experiencia en consulta clínica y en el trabajo con niños, adolescentes, adultos y familias. Mi vocación es acompañar a las personas en sus procesos de cambio y bienestar emocional, desde una mirada empática, cercana y profesional.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            He trabajado en diversos contextos, como psicóloga de convivencia escolar en colegios, en PRM (Programas de Mejor Niñez), y actualmente en el área de cuidados paliativos de la Corporación Municipal de Quilpué.
          </p>
          <div className="w-full text-left mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Formación académica</h3>
            <ul className="text-gray-700 text-base list-disc pl-6 mb-4">
              <li>Licenciatura en Psicología, Universidad Andrés Bello, Viña del Mar.</li>
              <li>Magíster en Psicodiagnóstico e Intervenciones Terapéuticas, Universidad Andrés Bello, Viña del Mar.</li>
              <li>Diplomado en Peritaje Psicológico y Social en Contextos Judiciales, Universidad Andrés Bello.</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Áreas de experiencia</h3>
            <ul className="text-gray-700 text-base list-disc pl-6">
              <li>Consulta clínica individual y familiar</li>
              <li>Psicología escolar y convivencia</li>
              <li>Intervención en contextos judiciales</li>
              <li>Apoyo en cuidados paliativos</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SobreMiPage; 