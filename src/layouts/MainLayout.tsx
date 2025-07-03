import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`bg-gray-50 shadow-sm border-b border-gray-200 relative ${isMobileMenuOpen ? 'z-50' : 'z-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Consulta Psicológica
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-500 hover:text-teal-600'
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/sobre-mi" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/sobre-mi') 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-500 hover:text-teal-600'
                }`}
              >
                Sobre Mi
              </Link>
              <Link 
                to="/agendar-cita" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/agendar-cita') 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-500 hover:text-teal-600'
                }`}
              >
                Agendar
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <div className="fixed top-16 left-0 right-0 bg-gray-50 shadow-lg border-b border-gray-200 z-50 md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link 
                  to="/" 
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/') 
                      ? 'text-teal-600 bg-teal-50' 
                      : 'text-gray-500 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Inicio
                </Link>
                <Link 
                  to="/sobre-mi" 
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/sobre-mi') 
                      ? 'text-teal-600 bg-teal-50' 
                      : 'text-gray-500 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Sobre Mi
                </Link>
                <Link 
                  to="/agendar-cita" 
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/agendar-cita') 
                      ? 'text-teal-600 bg-teal-50' 
                      : 'text-gray-500 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Agendar
                </Link>
              </div>
            </div>
          </>
        )}
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