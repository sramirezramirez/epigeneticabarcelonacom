import { useNavigate, useLocation } from 'react-router-dom';
import './Legal.css';

const legalContent = {
  'aviso-legal': {
    title: 'Aviso Legal',
    content: `
      <h2>1. Datos Identificativos</h2>
      <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
      <p><strong>Denominación social:</strong> Profesional Consulting</p>
      <p><strong>NIF:</strong> ES44124351R</p>
      <p><strong>Actividad:</strong> Epigenética</p>

      <h2>2. Objeto</h2>
      <p>El presente aviso legal regula el uso del sitio web <strong>Epigenética Barcelona</strong> (en adelante, el sitio web), del que es titular Epigenética Barcelona.</p>
      <p>La navegación por el sitio web de Epigenética Barcelona atribuye la condición de usuario del mismo e implica la aceptación plena de todas las cláusulas incluidas en este Aviso Legal.</p>

      <h2>3. Condiciones de Uso</h2>
      <p>Las condiciones de acceso y uso del presente sitio web se rigen por la legalidad vigente y por el principio de buena fe comprometiéndose el usuario a realizar un buen uso de la web.</p>
      <p>Queda prohibido el uso de la web con fines ilícitos o lesivos, o que, de cualquier forma, puedan causar perjuicio o impedir el normal funcionamiento del sitio web.</p>

      <h2>4. Propiedad Intelectual e Industrial</h2>
      <p>Epigenética Barcelona es titular de todos los derechos sobre el software del portal digital así como de los derechos de propiedad industrial e intelectual referidos a los contenidos que se incluyan, a excepción de los derechos sobre productos y servicios de carácter público que no son propiedad de esta empresa.</p>

      <h2>5. Responsabilidades</h2>
      <p>Epigenética Barcelona no se hace responsable de la información y contenidos almacenados en foros, chats, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web.</p>
      <p>Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSI-CE, Epigenética Barcelona se compromete a retirar o en su caso bloquear aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, derechos de terceros o la moral y el orden público.</p>
    `
  },
  'privacidad': {
    title: 'Política de Privacidad',
    content: `
      <h2>1. Responsable del Tratamiento</h2>
      <p><strong>Responsable:</strong> Epigenética Barcelona</p>
      <p>En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales (RGPD), le informamos sobre el tratamiento de sus datos personales.</p>

      <h2>2. Finalidad del Tratamiento</h2>
      <p>Los datos personales que nos proporcione serán utilizados para:</p>
      <ul>
        <li>Responder a sus consultas</li>
        <li>Cumplir con las obligaciones legales aplicables</li>
      </ul>

      <h2>3. Legitimación</h2>
      <p>La base legal para el tratamiento de sus datos es el consentimiento del interesado y el cumplimiento de obligaciones legales.</p>

      <h2>4. Conservación de Datos</h2>
      <p>Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos y, en cualquier caso, durante los plazos establecidos por la legislación aplicable.</p>

      <h2>5. Derechos del Usuario</h2>
      <p>Usted tiene derecho a:</p>
      <ul>
        <li>Acceder a sus datos personales</li>
        <li>Rectificar datos inexactos</li>
        <li>Solicitar la supresión de sus datos</li>
        <li>Oponerse al tratamiento</li>
        <li>Solicitar la limitación del tratamiento</li>
        <li>Portabilidad de datos</li>
      </ul>

      <h2>6. Seguridad</h2>
      <p>Epigenética Barcelona adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>
    `
  },
  'cookies': {
    title: 'Política de Cookies',
    content: `
      <h2>1. ¿Qué son las Cookies?</h2>
      <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Estas cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo.</p>

      <h2>2. Uso de Cookies en este Sitio Web</h2>
      <p><strong>Epigenética Barcelona NO utiliza cookies en este sitio web.</strong></p>
      <p>Este sitio web no instala cookies en su dispositivo, no recopila información mediante cookies ni utiliza tecnologías de seguimiento similares.</p>

      <h2>3. Cookies de Terceros</h2>
      <p>Actualmente, este sitio web no utiliza cookies de terceros. En el caso de que en el futuro se incorporen servicios que requieran el uso de cookies, esta política será actualizada para informarle adecuadamente.</p>

      <h2>4. Gestión de Cookies</h2>
      <p>Dado que este sitio web no utiliza cookies, no es necesario configurar ninguna preferencia relacionada con las mismas.</p>
      <p>Si en el futuro se implementan cookies, podrá gestionar sus preferencias a través de la configuración de su navegador.</p>

      <h2>5. Más Información</h2>
      <p>Para obtener más información sobre las cookies y cómo gestionarlas, puede visitar:</p>
      <ul>
        <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a></li>
        <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">www.youronlinechoices.com</a></li>
      </ul>
    `
  },
  'terminos': {
    title: 'Términos y Condiciones',
    content: `
      <h2>1. Aceptación de los Términos</h2>
      <p>Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.</p>

      <h2>2. Uso del Sitio Web</h2>
      <p>El contenido de este sitio web es solo para fines informativos. Nos reservamos el derecho de modificar el contenido en cualquier momento.</p>

      <h2>3. Limitación de Responsabilidad</h2>
      <p>Epigenética Barcelona no se hace responsable de daños indirectos, incidentales o consecuentes que puedan resultar del uso de este sitio web.</p>

      <h2>4. Modificaciones</h2>
      <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.</p>

      <h2>5. Ley Aplicable</h2>
      <p>Estos términos y condiciones se rigen por la legislación española. Cualquier disputa será resuelta por los tribunales competentes de España.</p>
    `
  }
};

function Legal({ page: pageProp }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get page from prop or from URL path
  const page = pageProp || location.pathname.replace('/', '');
  const content = legalContent[page];

  if (!content) {
    return (
      <div className="legal-page">
        <div className="legal-container">
          <p>Página no encontrada</p>
          <button onClick={() => navigate('/')}>Volver al inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="legal-back-btn" onClick={() => navigate('/')}>
          ← Volver al inicio
        </button>
        <h1>{content.title}</h1>
        <div 
          className="legal-content"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </div>
    </div>
  );
}

export default Legal;
