// Carga GA4 solo cuando se llame explícitamente (p. ej. tras consentimiento).
(function () {
  function loadScriptOnce(src) {
    if (document.querySelector('script[src="' + src + '"]')) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
  }

  function ensureGtag() {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === 'function') return;
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
  }

  window.__loadGA4 = function (measurementId) {
    if (!measurementId || typeof measurementId !== 'string') return false;
    if (measurementId.indexOf('G-') !== 0) return false;
    if (window.__ga4Loaded) return true;

    window.__ga4Loaded = true;
    loadScriptOnce('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId));
    ensureGtag();
    window.gtag('config', measurementId, { anonymize_ip: true });
    return true;
  };
})();

