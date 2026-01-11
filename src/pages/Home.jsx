import config from '../config';
import './Home.css';

function Home() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{config.heroTitle}</h1>
          <p className="hero-subtitle">{config.heroSubtitle}</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="benefits-section">
        <div className="section-container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Epigenética</h2>
              <p className="benefits-intro">
                Bienvenido a <strong>Epigenética Barcelona</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
