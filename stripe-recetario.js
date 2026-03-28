/* Enlace de pago del recetario (10 €).
   PDF en tu dominio: coloca el archivo en public/recetario-reset-21-dias.pdf (nombre fijo).
   Tras el pago: Stripe Dashboard → Payment Links → tu enlace → After payment →
   URL de redirección: https://TU_DOMINIO.com/gracias-recetario.html */
(function () {
  var RECETARIO_10_URL = 'https://buy.stripe.com/cNibJ370fdBwcoFbLM4Ja03';
  document.querySelectorAll('a[data-stripe="recetario-10"]').forEach(function (el) {
    if (RECETARIO_10_URL && RECETARIO_10_URL.indexOf('buy.stripe.com') !== -1) {
      el.href = RECETARIO_10_URL;
    }
  });
})();
