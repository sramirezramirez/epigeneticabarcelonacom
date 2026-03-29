(function () {
  var first = ['Rafa', 'Luisa', 'María', 'Carlos', 'Ana', 'Jordi', 'Elena', 'Miguel', 'Laura', 'Pablo', 'Cristina', 'David', 'Núria', 'Marc', 'Sara', 'Iván', 'Paula', 'Andrea', 'Fernando', 'Lucía'];
  var last = ['García', 'Martínez', 'López', 'Sánchez', 'Fernández', 'González', 'Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Muñoz', 'Romero', 'Navarro', 'Torres', 'Vázquez', 'Jiménez', 'Ramos', 'Gil', 'Serrano', 'Blanco'];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function fullName() {
    return pick(first) + ' ' + pick(last);
  }

  var templates = [
    function () {
      return fullName() + ' acaba de reservar Test + sesión 1:1';
    },
    function () {
      return fullName() + ' ha comprado el Recetario Antiinflamatorio (Reset 21 Días)';
    },
    function () {
      return fullName() + ' ha iniciado la Evaluación Epigenética (150€)';
    },
    function () {
      return fullName() + ' ha reservado el protocolo celular de 90 días';
    },
    function () {
      return fullName() + ' acaba de completar el pago del Test + Diagnóstico 1:1';
    }
  ];

  var el = document.createElement('div');
  el.className = 'activity-toast';
  el.setAttribute('aria-hidden', 'true');
  document.body.appendChild(el);

  /** Cada aviso permanece visible 5 s. */
  var visibleMs = 5000;
  /** Pausa entre avisos 1–2 y 2–3: 10–15 s al azar. */
  function randomGapMs() {
    return 10000 + Math.floor(Math.random() * 5000);
  }
  /** A partir del 3.er aviso (antes del 4.º, 5.º…): 12–18 s al azar. */
  function randomGapMsLong() {
    return 12000 + Math.floor(Math.random() * 6000);
  }
  var firstDelayMs = 6000 + Math.floor(Math.random() * 4000);
  var shownCount = 0;

  function randomTemplate() {
    return templates[Math.floor(Math.random() * templates.length)]();
  }

  function cycle() {
    el.textContent = randomTemplate();
    el.classList.add('is-visible');
    shownCount += 1;
    setTimeout(function () {
      el.classList.remove('is-visible');
      var gap = shownCount < 3 ? randomGapMs() : randomGapMsLong();
      setTimeout(cycle, gap);
    }, visibleMs);
  }

  setTimeout(cycle, firstDelayMs);
})();
