import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ siteName = 'E-Shop' }) {
  const location = useLocation();

  const handleInicioClick = (e) => {
    // If we're already on the home page, scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Otherwise, let the Link handle navigation (it will scroll to top on route change)
  };

  const handleLogoClick = (e) => {
    // If we're already on the home page, scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Otherwise, let the Link handle navigation
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <h1>{siteName}</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link" onClick={handleInicioClick}>Inicio</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
