# Mejoras visuales Homebanking Alfin Digital V2

Esta versión mantiene la conexión con backend. No se modificaron servicios, hooks ni lógica de operaciones.

## Qué se mejoró

1. Landing más diferente y moderna:
   - Fondo con degradados suaves.
   - Bloque nuevo de experiencia renovada.
   - Tres espacios nuevos para imágenes: transferencias, pagos/cuotas y métricas.
   - Animaciones suaves de flotación.

2. Login más visual:
   - Orbes decorativos animados.
   - Tarjeta de confianza bajo el formulario.
   - Se mantiene el mismo submit y validación.

3. Dashboard cliente más defendible:
   - Nuevo bloque visual de resumen protegido.
   - Dos tarjetas informativas compactas.
   - No se cambian las rutas de botones ni acciones conectadas al backend.

4. Slots de imagen mejorados:
   - Puedes colocar PNG sin fondo o SVG en `public/assets/homebanking/`.
   - Si falta la imagen, aparece un espacio preparado.

## Archivos tocados

- `src/pages/LandingPage.jsx`
- `src/pages/LoginPage.jsx`
- `src/pages/HomePage.jsx`
- `src/index.css`
- `public/assets/homebanking/README_IMAGENES.md`

## Imágenes recomendadas

- `hero-homebanking.png`
- `credito-aprobado.png`
- `login-seguro.png`
- `dashboard-cliente.png`
- `transferencias.png`
- `pagos-cuotas.png`
- `metricas-cliente.png`
- `resumen-cliente.png`

Puedes usar `.svg` si prefieres, pero debes cambiar la extensión en el JSX.
