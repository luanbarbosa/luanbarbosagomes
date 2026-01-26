document.addEventListener('DOMContentLoaded', function () {
  var defaultLang = 'en';
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + ';' + expires + ';path=/;SameSite=Lax';
  }
  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  // Determine language: cookie -> localStorage -> URL param -> browser -> default
  var urlLang = (function () { try { return new URLSearchParams(location.search).get('lang'); } catch (e) { return null; } })();
  var lsLang = (function () { try { return localStorage.getItem('lang'); } catch (e) { return null; } })();
  var navLang = (navigator && navigator.language && navigator.language.indexOf('pt') === 0) ? 'pt' : null;
  var lang = getCookie('lang') || lsLang || urlLang || navLang || defaultLang;

  // If cookie is missing but we have a fallback, persist it
  if (!getCookie('lang') && lang) setCookie('lang', lang, 365);

  var select = document.getElementById('lang-select');
  if (select) {
    // try to set the value; if option not present, don't fail
    try { select.value = lang; } catch (e) {}
    select.addEventListener('change', function () {
      var newLang = select.value;
      try { localStorage.setItem('lang', newLang); } catch (e) {}
      setCookie('lang', newLang, 365);
      // ensure the cookie has been set before reload in most browsers
      setTimeout(function () { location.reload(); }, 50);
    });
  }

  // use relative path so this works when the site is served from a subpath
  fetch('./assets/lang/' + lang + '.json')
    .then(function (res) { return res.json(); })
    .then(function (translations) {
      document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(function (el) {
        var key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
        if (!key) return;
        var text = translations[key];
        if (typeof text === 'undefined') return;
        // if element requests HTML, set innerHTML; otherwise set textContent
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = text;
        } else if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
          el.value = text;
        } else {
          el.textContent = text;
        }
      });
      if (translations.title) document.title = translations.title;
      // ensure selector reflects current language after translations applied
      if (select) {
        try { select.value = lang; } catch (e) {}
      }
    })
    .catch(function (err) { console.warn('Failed to load translations', err); });
});
