# Veterinaria San Marcos – Tienda online (React)

## Integrantes – Grupo 5

- Pablo Esteban Soto Guajardo
- Maximiliano Andrés Mondaca Grandón
- Pascal Ignacio Pacheco Bravo

## Tecnologías

| Herramienta | Uso |
| --- | --- |
| React 19 + Vite | Framework de interfaz y empaquetador |
| React Router | Navegación SPA, rutas dinámicas y rutas protegidas |
| React Bootstrap + Bootstrap 5 | Componentes y grilla responsiva |
| Bootstrap Icons | Íconos |
| Vitest + jsdom + React Testing Library + user-event | Pruebas unitarias y de componentes |
| @vitest/coverage-v8 | Informe de cobertura |
| Nginx sobre AWS EC2 | Publicación del build de producción |


## Cómo ejecutar

Requiere **Node.js 20 o superior** (probado en Node 20 y 22). Las versiones de Vite, Vitest y jsdom se
eligieron para que el proyecto funcione también en los computadores del laboratorio, que no siempre tienen
la última versión de Node.

```bash
npm install
npm run dev          # servidor de desarrollo (http://localhost:5173)
npm run build        # build de producción en dist/
npm run preview      # revisa el build localmente
npm run lint         # análisis estático con oxlint
npm test             # pruebas en modo observación
npm run test:run     # ejecuta las pruebas una vez
npm run coverage     # pruebas + informe de cobertura (coverage/index.html)
```

### Cuentas y datos de demostración

| Rol | Correo | Contraseña |
| --- | --- | --- |
| Administrador | admin@duoc.cl | admin123 |
| Recepcionista | camila.valenzuela@duoc.cl | recep123 |
| Cliente | cliente@gmail.com | cliente1 |

Tarjetas de prueba en el checkout: **4111 1111 1111 1111** (aprobada) y **4000 0000 0000 0002** (rechazada).

Los datos se guardan en `localStorage`. Para volver a los datos de ejemplo, borra las claves que empiezan con
`sanMarcos.` desde las herramientas del navegador (Application → Local
