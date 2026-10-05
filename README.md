# Portafolio · Sebastián Monje Pulecio

Portafolio personal como analista de datos junior. Sitio estático (HTML, CSS y JavaScript sin dependencias ni paso de compilación), publicado con GitHub Pages.

**Sitio:** https://sebastianmonjepulecio.github.io/portfolio-web/

## Estructura

```
portfolio-web/
├── index.html                       # Contenido de la página (en español)
├── styles.css                       # Estilos: tokens, base, layout, componentes, secciones
├── translations.js                  # Textos en inglés
├── main.js                          # Cambio de idioma y año del pie de página
├── cv-sebastian-monje-pulecio.pdf   # Hoja de vida descargable
├── favicon.svg
└── README.md
```

## Cómo verlo en local

Abre `index.html` en el navegador, o levanta un servidor simple:

```bash
python -m http.server 8000
# luego abre http://localhost:8000
```

## Cómo actualizar el contenido

- **Agregar un proyecto:** copia un bloque `<article class="row">` en `index.html`, cambia los textos y enlaces, y ponle claves `data-i18n` nuevas (por ejemplo `p8Title`, `p8Problem`…). Luego agrega esas mismas claves con el texto en inglés en `translations.js`.
- **Cambiar un texto:** el español se edita en `index.html`; el inglés, en `translations.js` con la misma clave.
- **Actualizar el CV:** reemplaza `cv-sebastian-monje-pulecio.pdf` conservando el nombre del archivo.
- **Colores y tipografía:** se cambian en las variables al inicio de `styles.css`.

## Idiomas

La página carga en español. El botón ES / EN cambia el idioma y lo recuerda en el navegador. También se puede enlazar directo a la versión en inglés con `?lang=en`.

## Publicación

GitHub Pages publica la rama `main` desde la raíz. Cada push a `main` actualiza el sitio en uno o dos minutos.
