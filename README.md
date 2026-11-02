# Gestor de tareas

Aplicación React + TypeScript + Vite para gestionar tareas sin API ni backend.

## Requisitos

- Node.js compatible con la versión de Vite del proyecto.
- npm.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará la URL local en la terminal.

## Comprobación de producción

```bash
npm run build
npm run preview
```

## Funcionalidades

- Crear tareas con título, descripción opcional y responsable mediante una ventana modal.
- Validación de título y responsable.
- Guardado con el botón o con Enter desde los campos de texto.
- Búsqueda por título sin distinguir mayúsculas y minúsculas.
- Tarjetas distribuidas con CSS Grid.
- Contador calculado desde los arrays: tareas visibles frente al total.
- Mensajes cuando no hay tareas o no hay coincidencias.
- Eliminación de tareas.
- Los datos se mantienen en el estado de React durante la sesión; no hay persistencia en una API ni en almacenamiento local.
