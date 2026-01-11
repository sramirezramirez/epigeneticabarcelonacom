import { useParams, useNavigate, Link } from 'react-router-dom';
import './ArticleDetail.css';

const articlesContent = {
  'como-evitar-perros-orinen-casa': {
    title: 'Cómo evitar que los perros orinen en la casa',
    content: `
      <p>Para evitar que los perros orinen en casa puedes usar vinagre, jugo de limón, indicarle dónde hacerlo, ponerle límites sin violencia y sacarlo más a pasear cuando lo necesite. Si ha llegado un nuevo perro a tu casa, lo primero que debes tener en cuenta es que nadie nace enseñado, así que no te desesperes si las primeras semanas el animal no puede controlar las ganas de hacer pis y termina haciéndolo en casa.</p>
      
      <p>Ármate de paciencia y comienza a educar a tu perro para que no orine en casa y sepa que el lugar idóneo para hacerlo es la calle. Hay una serie de trucos y métodos de adiestramiento que te ayudarán a poder evitar que los perros orinen en la casa.</p>

      <h2>Vinagre</h2>
      <p>Los perros, muchas veces, orinan para marcar territorio y puede ser que no hagan todo el pis que tienen acumulado, sino que tan solo echen unas gotas para dar a entender que esa es su zona. Sobre todo esto suele ocurrir cuando en la misma casa conviven con otras mascotas u otros perros.</p>
      
      <p>En este caso, lo más adecuado para quitarle esa manía de marcar su espacio es crear repelentes para perros, es decir, elaborar una serie de productos caseros cuyo aroma repelerá al animal y dejará de marcar la zona. Uno de los más efectivos es preparar uno con vinagre, ya que neutraliza el olor de la orina y, por lo tanto, el animal no encontrará su olor y no sabrá exactamente dónde hacía pis. Además, el olor ácido del vinagre disgustará al animal y no se acercará más a la zona que desprende ese aroma.</p>

      <h2>Limón</h2>
      <p>Hay más remedios caseros que conseguirán ahuyentar al perro y evitar que haga pis en una zona concreta de la casa. Por ejemplo, el olor del limón tampoco les gusta por lo que puedes mezclar el zumo de un limón con dos tazas de agua.</p>
      
      <p>Llena una botella con un pulverizador y rocía el espacio en el que tu perro suele hacer pis. Si lo prefieres, también puedes espolvorear directamente un poco de pimienta de cayena en la zona. De esta forma, el perro sentirá el picor de este ingrediente y le molestará, por lo que no volverá a dejar rastro.</p>

      <h2>Indicarle dónde hacerlo</h2>
      <p>Una buena manera de indicar a tu perro dónde tiene que hacer pipí es usando una <strong>solución práctica y reutilizable</strong> que le marque claramente el lugar adecuado. Para cachorros o perros que aún no pueden salir a la calle, puedes usar un <strong>empapador reutilizable</strong> que le enseñe dónde debe hacer sus necesidades. Cuando llegues al sitio, tan solo tendrás que arrimarle el olor al hocico para que entienda que aquí sí que puede marcar territorio. Poco a poco, el animal irá entendiendo que esa es la zona adecuada para hacer pis y dejará de hacerlo en casa.</p>
      
      <p>Los <strong>empapadores reutilizables</strong> son especialmente útiles durante el proceso de educación, ya que proporcionan una superficie absorbente y fácil de limpiar, ayudando a tu perro a asociar un lugar específico con hacer sus necesidades.</p>

      <h2>Ponle límites sin violencia</h2>
      <p>Sin embargo, nadie nace enseñado y es probable que al principio, por mucho que quieras evitar que un perro orine en casa, se le escape en algún momento o no tenga aún bien marcada la orden. Por este motivo, es importante que sepas que para educar a un perro no tienes que usar nunca la violencia (pues podría salir un perro violento y agresivo), sino que debes mantenerte firme y autoritario pero sin usar la fuerza.</p>
      
      <p>Cuando veas que tu perro hace pis en casa, basta con que le digas un "No" fuerte y que él se dé cuenta de que te has enfadado. Por eso, es esencial que después de regañarle no le hagas carantoñas ni le prestes atención pues, de lo contrario, el animal no entenderá nunca lo que quieres decirle.</p>
      
      <p>Cuando el animal haga pis fuera tienes que mostrarle que era eso lo que le pedías. Para hacerlo, tan solo basta con que le des algún premio para que comprenda que esa actitud tiene un efecto positivo en ti.</p>

      <h2>Sácalo más a pasear</h2>
      <p>Cuando el perro es cachorro tendrás que prestar especial atención a la hora de enseñarle a no hacer pis en casa. Lo primero que debes tener en cuenta es que el animal tiene una vejiga más pequeña y, por lo tanto, necesitará que le saques más veces a la calle que un perro adulto.</p>
      
      <p>Sobre todo debes tener clara la regla de los "15 minutos", ¿qué quiere decir? Pues que el cachorro, después del cuarto de hora de haber comido, bebido, dormido o haber hecho ejercicio, tendrá ganas de evacuar. Así pues, sácalo antes de que no pueda reprimir las ganas, y así conseguirás que entienda que es afuera donde tiene que hacer sus necesidades.</p>
      
      <p>Durante las primeras semanas de tener al cachorro en casa probablemente no puedas sacarlo a la calle porque aún no tendrá todas las vacunas. En este caso, para evitar que haga pis por toda la casa, lo mejor es que uses un <strong>empapador reutilizable</strong> que le enseñe dónde debe hacer sus necesidades. Esta solución práctica te permitirá mantener la casa limpia mientras educas a tu cachorro, y una vez que pueda salir a la calle, el proceso de transición será mucho más sencillo.</p>
      
      <div className="article-cta">
        <p><strong>💡 Consejo:</strong> Si estás educando a un cachorro o tienes un perro que necesita hacer sus necesidades en casa, considera usar <strong>empapadores reutilizables</strong> que facilitan la limpieza y ayudan en el proceso de educación. Son una solución ecológica y práctica que puedes lavar fácilmente después de cada uso.</p>
      </div>
    `,
  },
  'adiestramiento-perro-orinar-casa': {
    title: 'Consejos de adiestramiento: evitar que tu perro orine dentro de la casa',
    content: `
      <p>¿Tienes un perro y te sientes desbordado porque ya no sabes qué hacer para que no se orine dentro de la casa? ¡Ante todo que no cunda el pánico! Sabemos que es un problema que afecta a muchos animal lovers por lo que hoy vamos a intentar darte alguna solución para que esto no vuelva a suceder y tu perro no vuelva a orinar dentro de la casa, pero primero deberíamos comprender por qué lo hacen, ¿no te parece?.</p>

      <h2>¿Sabes por qué los perros se hacen pipí dentro de casa?</h2>
      <p>Si se trata de un cachorro, ten paciencia porque significa que todavía no sabe controlarse y, aprender a hacerlo fuera, lleva su tiempo. La cosa es diferente cuando hablamos de un perro adulto que sigue orinándose dentro de casa. Esto puede pasar por varios motivos, observa a tu peludo para determinar cuál puede ser el suyo:</p>
      
      <ul>
        <li><strong>Cambio de entorno:</strong> esta alteración le puede provocar un nerviosismo extra unido a que sienta la necesidad de marcar el nuevo terreno y de ahí la incontinencia.</li>
        <li><strong>Paseos insuficientes:</strong> en este caso el perro no es culpable, todos los dueños deben ser conscientes que los perros necesitan hacer sus necesidades al menos 3 veces al día.</li>
        <li><strong>Irregularidad en la hora de los paseos:</strong> igual que en el caso anterior, no es culpa del perro, es lógico que los cambios de horario y no mantener una rutina a la hora de las salidas los trastoque bastante.</li>
        <li><strong>Llamada de atención:</strong> a veces lo hacen como reclamo cuando pasan muchas horas en casa o nadie les hace caso.</li>
        <li><strong>Problemas de próstata:</strong> si se trata de un problema de salud el animal por muy bien educado que esté no podrá controlar la orina.</li>
        <li><strong>Marcaje del territorio:</strong> esta conducta la tienen sobre todo los machos que quieren hacer suyo cada rincón de la casa.</li>
      </ul>
      
      <p>Aunque pueden existir más, estas son las principales causas por las que los perros se hacen pipí dentro de la casa, ¿has identificado alguna? Veamos ahora cómo podemos evitarlo.</p>

      <h2>¿Cómo evitar que mi perro orine dentro de la casa?</h2>
      <p>Antes de explicarte qué puedes hacer para evitar este problema, es importante que lo afrontes con toda la paciencia y energía positiva del mundo porque es algo que podrás solucionar con un poco de disciplina por ambas partes. Lo mejor es que enseñes a tu perro desde cachorro. Es totalmente normal en esta fase que a veces no lo aprendan hasta los 8 meses de edad (por eso te decíamos lo de la paciencia).</p>
      
      <p>Ahora pasamos a las acciones que debes llevar a cabo para enseñar a tu perro a no hacer pipí dentro de la casa:</p>

      <h3>3 salidas diarias a las mismas horas</h3>
      <p>Es fundamental que entiendas que tu perro necesita ir al baño tantas veces como tú y ya que él no puede ir solo, tienes que llevarlo tú. Lo mejor es establecer un horario diario en turnos de mañana, tarde y noche.</p>

      <h3>Tiempo de juego y cariño</h3>
      <p>Si tu perro necesita más atenciones deberías hacerle caso, no te costará nada y además hará que tú también te evadas del estrés del trabajo, por lo que este tiempo será beneficioso para ambas partes.</p>

      <h3>Atención veterinaria</h3>
      <p>Si la incontinencia se debe a un problema de salud tendrás que acudir cuanto antes al veterinario y dejarlo en manos de profesionales, ellos sabrán cómo afrontarlo y te darán las pautas a seguir.</p>

      <h3>Adaptación</h3>
      <p>Si tu perro es adoptado no sabemos qué vida le habrían dado sus antiguos dueños, por lo que la paciencia, el cariño y la disciplina son los ingredientes fundamentales para estos peludos. Seguro que necesitas un poco más de tiempo pero valdrá la pena el esfuerzo.</p>

      <h3>Esterilización</h3>
      <p>En el caso de los perros muy territoriales esta puede ser la solución. En estos casos lo mejor es hablar con tu veterinario.</p>

      <h3>Soluciones prácticas para el hogar</h3>
      <p>Durante el proceso de educación, especialmente con cachorros o perros que aún no pueden salir a la calle, una <strong>solución muy práctica</strong> es usar <strong>empapadores reutilizables</strong>. Estos productos te permiten:</p>
      
      <ul>
        <li>Mantener la casa limpia mientras educas a tu perro</li>
        <li>Enseñarle dónde debe hacer sus necesidades de forma clara</li>
        <li>Facilitar la limpieza después de cada uso</li>
        <li>Ser una solución ecológica y reutilizable</li>
      </ul>
      
      <p>Los <strong>empapadores reutilizables</strong> son especialmente útiles para cachorros que aún no tienen todas las vacunas y no pueden salir a la calle, o para perros mayores con problemas de incontinencia. Son fáciles de limpiar (solo necesitas enjuagarlos con agua y lejía) y te ayudarán a mantener tu hogar limpio durante el proceso de educación.</p>
      
      <p>Y para que tu perro aprenda cuando lo está haciendo bien, dale caricias y felicítalo cuando lo haga en el sitio correcto. Para reforzarlo más aún, dale un premio que pueda saborear.</p>
      
      <div className="article-cta">
        <p><strong>💡 Recomendación:</strong> Si estás pasando por el proceso de educación de tu cachorro o tienes un perro con necesidades especiales, los <strong>empapadores reutilizables</strong> pueden ser tu mejor aliado. Son prácticos, ecológicos y te facilitarán mucho la tarea de mantener la casa limpia mientras tu perro aprende.</p>
      </div>
    `,
  },
};

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articlesContent[id];

  if (!article) {
    return (
      <div className="article-detail-page">
        <div className="article-detail-container">
          <p>Artículo no encontrado</p>
          <Link to="/articulos">Volver a artículos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <div className="article-detail-container">
        <button className="article-back-btn" onClick={() => navigate('/articulos')}>
          ← Volver a artículos
        </button>
        <h1>{article.title}</h1>
        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        <div className="article-footer">
          <Link to="/articulos" className="article-back-link">← Ver más artículos</Link>
          <Link to="/" className="article-home-link">Ir a la tienda →</Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
