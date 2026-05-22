// Tracking simple: registra clics a Stripe (GA4) si hay consentimiento y gtag disponible.
(function () {
  function safeGtag() {
    return typeof window.gtag === 'function' ? window.gtag : null;
  }

  function track(name, params) {
    var g = safeGtag();
    if (!g) return;
    try {
      g('event', name, params || {});
    } catch (e) {
      // ignore
    }
  }

  function onClick(e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-track]') : null;
    if (!el) return;
    var key = el.getAttribute('data-track') || 'cta_click';
    track(key, {
      link_url: el.href || undefined,
      link_text: (el.textContent || '').trim().slice(0, 120) || undefined,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      document.addEventListener('click', onClick, { capture: true });
    });
  } else {
    document.addEventListener('click', onClick, { capture: true });
  }
})();

