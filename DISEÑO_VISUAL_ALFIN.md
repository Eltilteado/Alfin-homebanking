# Rediseño visual Homebanking — Alfin Digital

Cambios realizados solo en frontend visual. No se modificó la conexión con backend, hooks ni servicios.

## Archivos visuales modificados

```txt
src/index.css
src/components/ui/Logo.jsx
src/components/ui/ImageSlot.jsx
src/components/layout/PublicHeader.jsx
src/components/layout/Header.jsx
src/components/layout/PublicFooter.jsx
src/pages/LandingPage.jsx
src/pages/LoginPage.jsx
src/pages/HomePage.jsx
```

## Dónde poner imágenes PNG o SVG

Coloca tus imágenes en:

```txt
public/assets/homebanking/
```

Rutas ya preparadas:

```txt
public/assets/homebanking/hero-homebanking.png
public/assets/homebanking/credito-aprobado.png
public/assets/homebanking/login-seguro.png
public/assets/homebanking/dashboard-cliente.png
```

Si quieres usar SVG, cambia en los JSX la extensión `.png` por `.svg`.

## Qué pasa si no pongo imagen

El componente `ImageSlot.jsx` muestra un bloque limpio en blanco con borde punteado indicando dónde va la imagen. Así el diseño no se rompe.

## Paleta visual usada

```txt
Naranja principal: #ff5a1f
Naranja claro:     #ff7a1a
Morado principal:  #7b1fa2
Morado secundario: #8e24aa
Fondo crema:       #fff7ef
Texto oscuro:      #241a28
```

## Objetivo del diseño

Que el Homebanking se vea más cercano a Banco Alfin: cálido, moderno, simple, con naranja/morado, tarjetas redondeadas, botones claros y espacios listos para ilustraciones sin fondo.
