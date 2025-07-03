import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Consulta Psicológica
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Inicio
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Servicios
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Sobre Nosotros
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Consulta Psicológica</h3>
              <p className="text-gray-300">
                Brindamos servicios de psicología profesional con un enfoque personalizado y compasivo.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-300">Email: info@consultapsicologica.com</p>
              <p className="text-gray-300">Teléfono: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horarios</h3>
              <p className="text-gray-300">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Sábados: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">
              © 2024 Consulta Psicológica. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 