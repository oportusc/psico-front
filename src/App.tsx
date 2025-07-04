import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './config/apollo';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AppointmentFormPage from './pages/AppointmentFormPage';
import AboutMePage from './pages/AboutMePage';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schedule-appointment" element={<AppointmentFormPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
