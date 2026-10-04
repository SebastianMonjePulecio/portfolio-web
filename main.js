/**
 * Portafolio · comportamiento de la página
 * - Cambio de idioma ES / EN sin duplicar el HTML.
 * - Año del pie de página.
 */
(function () {
  "use strict";

  const STORAGE_KEY = "portfolio-lang";
  const SUPPORTED = ["es", "en"];
  const EN = window.TRANSLATIONS_EN || {};

  const textNodes = document.querySelectorAll("[data-i18n]");
  const attrNodes = document.querySelectorAll("[data-i18n-attr]");
  const buttons = document.querySelectorAll(".lang-switch [data-lang]");
  const metaDescription = document.querySelector('meta[name="description"]');

  // Guardamos el español original (lo que está escrito en index.html).
  const ES = {
    pageTitle: document.title,
    pageDescription: metaDescription ? metaDescription.content : "",
  };
  textNodes.forEach((el) => {
    ES[el.dataset.i18n] = el.textContent.trim().replace(/\s+/g, " ");
  });
  attrNodes.forEach((el) => {
    parseAttrSpec(el).forEach(({ attr, key }) => {
      ES[key] = el.getAttribute(attr);
    });
  });

  const dictionaries = { es: ES, en: EN };

  function parseAttrSpec(el) {
    // Formato: "aria-label:clave" (se pueden separar varios con ;)
    return el.dataset.i18nAttr.split(";").map((pair) => {
      const [attr, key] = pair.split(":");
      return { attr: attr.trim(), key: key.trim() };
    });
  }

  function applyLanguage(lang) {
    const dict = dictionaries[lang] || ES;
    const t = (key) => dict[key] ?? ES[key];

    textNodes.forEach((el) => {
      const value = t(el.dataset.i18n);
      if (value) el.textContent = value;
    });
    attrNodes.forEach((el) => {
      parseAttrSpec(el).forEach(({ attr, key }) => {
        const value = t(key);
        if (value) el.setAttribute(attr, value);
      });
    });

    document.documentElement.lang = lang;
    document.title = t("pageTitle");
    if (metaDescription) metaDescription.content = t("pageDescription");

    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
  }

  function savedLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null; // modo privado o almacenamiento bloqueado
    }
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* no es crítico */
    }
  }

  function initialLanguage() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (SUPPORTED.includes(fromUrl)) return fromUrl;
    const stored = savedLanguage();
    if (SUPPORTED.includes(stored)) return stored;
    return "es";
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      applyLanguage(lang);
      saveLanguage(lang);
    });
  });

  const lang = initialLanguage();
  if (lang !== "es") applyLanguage(lang);

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
