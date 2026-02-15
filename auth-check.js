/**
 * Protección por contraseña (solo cliente).
 * Si no hay sesión válida, redirige a la página de login.
 * Para desactivar: no incluyas este script en las páginas.
 */
(function () {
  var AUTH_KEY = 'epigenetica_auth';
  var LOGIN = '/login.html';

  if (sessionStorage.getItem(AUTH_KEY) !== '1') {
    var next = encodeURIComponent(window.location.href);
    window.location.replace(LOGIN + (next ? '?next=' + next : ''));
  }
})();
