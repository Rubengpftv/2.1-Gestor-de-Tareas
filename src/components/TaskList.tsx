import type { Tarea } from "../types/Tarea";
import Task from "./Task";

type TaskListProps = {
  tasks: Tarea[];
  totalTasks: number;
  onDeleteTask: (id: string) => void;
};

export default function TaskList({ tasks, totalTasks, onDeleteTask }: TaskListProps) {
  return (
    <section className="tasks-section" aria-live="polite">
      <div className="tasks-heading">
        <div>
          <h2>Tus tareas</h2>
          <p className="counter">Mostrando {tasks.length} de {totalTasks} {totalTasks === 1 ? "tarea" : "tareas"}</p>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">⌕</span>
          <h3>{totalTasks === 0 ? "Todavía no hay tareas" : "No se encontraron tareas"}</h3>
          <p>
            {totalTasks === 0
              ? "Crea tu primera tarea con el botón «Nueva tarea»."
              : "Prueba con otro título o cambia los términos de búsqueda."}
          </p>
        </div>
      ) : (
        <div className="task-grid">
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </div>
      )}
    </section>
  );
}
