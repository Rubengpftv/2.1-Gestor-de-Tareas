import Tasks from "./components/Tasks";

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">ORGANIZACIÓN PERSONAL</p>
        <h1>Gestor de tareas</h1>
        <p className="subtitle">Organiza el trabajo, asigna responsables y encuentra cada tarea rápidamente.</p>
      </header>
      <Tasks />
    </main>
  );
}
