import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './config/apollo';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import FormularioAgendamientoPage from './pages/FormularioAgendamientoPage';
import SobreMiPage from './pages/SobreMiPage';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agendar-cita" element={<FormularioAgendamientoPage />} />
            <Route path="/sobre-mi" element={<SobreMiPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
