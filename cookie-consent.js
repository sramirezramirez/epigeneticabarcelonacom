// Banner sencillo de cookies: Aceptar/Rechazar analítica (GA4).
(function () {
  var KEY = 'epigenetica_cookie_consent_v1';

  function readState() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function writeState(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      // ignore
    }
  }

  function canLoadGA(state) {
    return !!(state && state.analytics === true);
  }

  function tryLoadGA() {
    var id = window.GA4_MEASUREMENT_ID;
    if (!id) return;
    if (typeof window.__loadGA4 === 'function') {
      window.__loadGA4(id);
    }
  }

  function injectStyles() {
    if (document.getElementById('cookie-consent-styles')) return;
    var css = [
      '#cookie-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;max-width:980px;margin:0 auto;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);border:1px solid rgba(0,0,0,.08);border-radius:14px;box-shadow:0 12px 30px rgba(0,0,0,.12);padding:14px 14px 12px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#2d3748}',
      '#cookie-consent-manage{position:fixed;left:16px;bottom:16px;z-index:99998;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border:1px solid rgba(0,0,0,.08);border-radius:999px;box-shadow:0 10px 26px rgba(0,0,0,.12);padding:10px 12px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#2d3748;display:flex;gap:10px;align-items:center}',
      '#cookie-consent-manage button{border:none;background:transparent;padding:0;margin:0;font-weight:800;font-size:13px;cursor:pointer;color:#6b46c1;text-decoration:underline}',
      '#cookie-consent-manage .cc-dot{width:8px;height:8px;border-radius:50%;background:#6b46c1;opacity:.9}',
      '#cookie-consent .cc-row{display:flex;gap:12px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap}',
      '#cookie-consent .cc-text{flex:1;min-width:240px}',
      '#cookie-consent .cc-title{font-weight:800;font-size:14px;margin:0 0 4px}',
      '#cookie-consent .cc-desc{font-size:13px;line-height:1.5;margin:0;color:rgba(45,55,72,.85)}',
      '#cookie-consent .cc-links{margin-top:6px;font-size:13px}',
      '#cookie-consent .cc-links a{color:#6b46c1;text-decoration:underline;font-weight:600}',
      '#cookie-consent .cc-actions{display:flex;gap:10px;align-items:center;justify-content:flex-end;flex-wrap:wrap}',
      '#cookie-consent button{border-radius:12px;padding:10px 14px;font-weight:800;border:1px solid rgba(0,0,0,.12);cursor:pointer;font-size:13px}',
      '#cookie-consent .cc-accept{background:#6b46c1;color:#fff;border-color:rgba(107,70,193,.5)}',
      '#cookie-consent .cc-reject{background:#fff;color:#2d3748}',
      '#cookie-consent .cc-manage{background:transparent;border:none;padding:10px 8px;color:rgba(45,55,72,.75);text-decoration:underline;font-weight:700}',
      '@media (min-width: 920px){#cookie-consent{left:24px;right:24px;bottom:24px;padding:16px 16px 14px}#cookie-consent-manage{left:24px;bottom:24px}}',
    ].join('');
    var style = document.createElement('style');
    style.id = 'cookie-consent-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function renderManageButton() {
    if (document.getElementById('cookie-consent-manage')) return;
    injectStyles();
    var el = document.createElement('div');
    el.id = 'cookie-consent-manage';
    el.innerHTML = '<span class="cc-dot" aria-hidden="true"></span><button type="button" aria-label="Cambiar cookies">Cookies</button>';
    el.addEventListener('click', function () {
      if (window.CookieConsent && typeof window.CookieConsent.open === 'function') {
        window.CookieConsent.open();
      }
    });
    document.body.appendChild(el);
  }

  function removeManageButton() {
    var el = document.getElementById('cookie-consent-manage');
    if (el) el.remove();
  }

  function removeBanner() {
    var el = document.getElementById('cookie-consent');
    if (el) el.remove();
  }

  function renderBanner() {
    if (document.getElementById('cookie-consent')) return;
    injectStyles();
    removeManageButton();

    var wrap = document.createElement('div');
    wrap.id = 'cookie-consent';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-live', 'polite');
    wrap.setAttribute('aria-label', 'Preferencias de cookies');

    wrap.innerHTML =
      '<div class="cc-row">' +
      '  <div class="cc-text">' +
      '    <p class="cc-title">Cookies</p>' +
      '    <p class="cc-desc">Usamos cookies necesarias para que el sitio funcione y, si lo aceptas, cookies de analítica (Google Analytics) para medir el uso y mejorar.</p>' +
      '    <div class="cc-links"><a href="/cookies/">Ver política de cookies</a> · <a href="/privacidad/">Privacidad</a></div>' +
      '  </div>' +
      '  <div class="cc-actions">' +
      '    <button type="button" class="cc-reject" data-cc="reject">Rechazar</button>' +
      '    <button type="button" class="cc-accept" data-cc="accept">Aceptar</button>' +
      '  </div>' +
      '</div>' +
      '<div style="margin-top:8px;display:flex;justify-content:flex-end;">' +
      '  <button type="button" class="cc-manage" data-cc="manage">Cambiar decisión</button>' +
      '</div>';

    document.body.appendChild(wrap);

    wrap.addEventListener('click', function (e) {
      var btn = e.target && e.target.getAttribute && e.target.getAttribute('data-cc');
      if (!btn) return;

      if (btn === 'accept') {
        writeState({ analytics: true, ts: new Date().toISOString() });
        removeBanner();
        renderManageButton();
        tryLoadGA();
      } else if (btn === 'reject') {
        writeState({ analytics: false, ts: new Date().toISOString() });
        removeBanner();
        renderManageButton();
      } else if (btn === 'manage') {
        // Reabrir el banner (si el usuario quiere cambiar) -> reset estado y mostrar
        localStorage.removeItem(KEY);
        removeBanner();
        renderBanner();
      }
    });
  }

  function init() {
    var state = readState();
    if (canLoadGA(state)) {
      tryLoadGA();
      renderManageButton();
    } else if (state && state.analytics === false) {
      renderManageButton();
    } else {
      renderBanner();
    }
  }

  window.CookieConsent = {
    open: function () {
      localStorage.removeItem(KEY);
      removeBanner();
      removeManageButton();
      renderBanner();
    },
    getState: readState,
    reset: function () {
      localStorage.removeItem(KEY);
      removeBanner();
      removeManageButton();
    },
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

