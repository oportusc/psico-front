import React from 'react';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const AboutMePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <Button
          label="Back to Home"
          icon="pi pi-arrow-left"
          className="p-button-text mb-6"
          onClick={() => navigate('/')}
        />
        <Card className="bg-white border-0 shadow-sm p-6 flex flex-col items-center text-center">
          <Avatar icon="pi pi-user" size="xlarge" className="mb-4" shape="circle" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Carmen Paz Chaparro</h1>
          <h2 className="text-lg font-medium text-blue-700 mb-4">Clinical Psychologist</h2>
          <p className="text-gray-700 text-lg mb-4">
            Hello! I'm Carmen Paz Chaparro, a psychologist with years of experience in clinical practice and working with children, adolescents, adults, and families. My vocation is to accompany people in their processes of change and emotional well-being, from an empathetic, close, and professional perspective.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            I have worked in various contexts, as a school coexistence psychologist in schools, in PRM (Child Welfare Programs), and currently in the palliative care area of the Municipal Corporation of Quilpué.
          </p>
          <div className="w-full text-left mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Academic Background</h3>
            <ul className="text-gray-700 text-base list-disc pl-6 mb-4">
              <li>Bachelor's Degree in Psychology, Universidad Andrés Bello, Viña del Mar.</li>
              <li>Master's in Psychodiagnosis and Therapeutic Interventions, Universidad Andrés Bello, Viña del Mar.</li>
              <li>Diploma in Psychological and Social Expertise in Judicial Contexts, Universidad Andrés Bello.</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Areas of Experience</h3>
            <ul className="text-gray-700 text-base list-disc pl-6">
              <li>Individual and family clinical practice</li>
              <li>School psychology and coexistence</li>
              <li>Intervention in judicial contexts</li>
              <li>Support in palliative care</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutMePage; 