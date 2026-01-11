import { Link } from 'react-router-dom';
import './Articles.css';

const articles = [
  {
    id: 'como-evitar-perros-orinen-casa',
    title: 'Cómo evitar que los perros orinen en la casa',
    excerpt: 'Guía completa con métodos efectivos para educar a tu perro y evitar que haga sus necesidades dentro de casa. Incluye consejos prácticos y soluciones reutilizables.',
    readTime: '5 min',
  },
  {
    id: 'adiestramiento-perro-orinar-casa',
    title: 'Consejos de adiestramiento: evitar que tu perro orine dentro de la casa',
    excerpt: 'Descubre las causas por las que tu perro orina en casa y las mejores técnicas de adiestramiento para solucionarlo de forma definitiva.',
    readTime: '6 min',
  },
];

function Articles() {
  return (
    <div className="articles-page">
      <div className="articles-container">
        <h1>Artículos</h1>
        <p className="articles-intro">
          Guías y consejos prácticos para el cuidado y educación de tu perro. 
          Aprende técnicas efectivas para resolver problemas comunes y mejorar 
          la convivencia con tu mascota.
        </p>
        
        <div className="articles-grid">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              to={`/articulos/${article.id}`}
              className="article-card"
            >
              <h2>{article.title}</h2>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <span className="article-read-time">{article.readTime} lectura</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
