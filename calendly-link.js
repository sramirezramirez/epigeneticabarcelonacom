/* Pega aquí el enlace público de tu evento de Calendly (o similar). Ej.: https://calendly.com/tu-usuario/consulta-60 */
(function () {
  var CALENDLY_BOOKING_URL = 'https://calendly.com/sandritatoo00/nueva-reunion';

  function apply() {
    document.querySelectorAll('a[data-calendly-booking]').forEach(function (a) {
      if (CALENDLY_BOOKING_URL && CALENDLY_BOOKING_URL.indexOf('http') === 0) {
        a.href = CALENDLY_BOOKING_URL;
        a.removeAttribute('aria-disabled');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
