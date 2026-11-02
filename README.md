# Gestor de tareas — Parte 3

Aplicación React + TypeScript conectada a JSON Server. Las tareas se guardan en `db.json`.

## Requisitos

- Node.js
- npm

## Instalación

Primera instalación (genera `package-lock.json`):

```bash
npm install
```

En instalaciones posteriores, cuando exista `package-lock.json`, puedes utilizar `npm ci`.

## Ejecutar el proyecto

Abre dos terminales en la carpeta del proyecto.

Terminal 1 — API REST:

```bash
npm run server
```

JSON Server estará disponible en `http://localhost:3001` y el recurso de tareas en `http://localhost:3001/tasks`.

Terminal 2 — aplicación React:

```bash
npm run dev
```

Abre la URL que indique Vite (normalmente `http://localhost:5173`).

## Endpoints utilizados

| Método | Endpoint | Función |
|---|---|---|
| GET | `/tasks` | Obtener todas las tareas |
| POST | `/tasks` | Crear una tarea |
| DELETE | `/tasks/:id` | Eliminar una tarea |

JSON Server 0.17.x genera identificadores numéricos (`id`) al crear cada tarea. La aplicación utiliza ese identificador devuelto por el servidor; por eso el tipo `Tarea.id` acepta `string | number`.

## Configuración de la API

Por defecto, la aplicación utiliza `http://localhost:3001`. Si necesitas otra dirección, copia `.env.example` a `.env.local` y cambia `VITE_API_URL`.

## Comprobación de persistencia

1. Inicia JSON Server y Vite.
2. Crea una tarea.
3. Recarga la página: la tarea debe seguir apareciendo.
4. Elimina una tarea.
5. Recarga la página: la tarea eliminada no debe reaparecer.

Los datos se almacenan en `db.json`. No borres ni reemplaces ese archivo si quieres conservar las tareas creadas.
