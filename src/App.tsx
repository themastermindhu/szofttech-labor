import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import ExercisesPage from './pages/ExercisesPage';
import ToolsPage from './pages/ToolsPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import ApplyPage from './pages/ApplyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'learn':
        return <LearnPage />;
      case 'exercises':
        return <ExercisesPage />;
      case 'tools':
        return <ToolsPage />;
      case 'community':
        return <CommunityPage />;
      case 'contact':
        return <ContactPage />;
      case 'apply':
        return <ApplyPage />;
      case 'login':
        return <ApplyPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
