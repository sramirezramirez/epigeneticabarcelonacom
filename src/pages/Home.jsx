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
              <h2>¿Qué es la Epigenética?</h2>
              <p className="benefits-intro">
                La <strong>epigenética</strong> es el estudio de los cambios en la expresión de los genes que no involucran alteraciones en la secuencia del ADN. Estos cambios pueden ser influenciados por factores ambientales, estilo de vida, nutrición y experiencias, y pueden ser heredados o modificados a lo largo de la vida.
              </p>
              <p>
                A diferencia de la genética tradicional, que se enfoca en el código genético en sí, la epigenética explora cómo los genes se activan o desactivan, permitiendo comprender mejor cómo nuestras decisiones y entorno pueden afectar nuestra salud y bienestar a nivel molecular.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
