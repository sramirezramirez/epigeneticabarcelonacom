import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import config from './config';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Legal from './pages/Legal';
import './App.css';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <Header siteName={config.name} />
      <main className="main-content" style={{ padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aviso-legal" element={<Legal page="aviso-legal" />} />
          <Route path="/privacidad" element={<Legal page="privacidad" />} />
          <Route path="/cookies" element={<Legal page="cookies" />} />
          <Route path="/terminos" element={<Legal page="terminos" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
