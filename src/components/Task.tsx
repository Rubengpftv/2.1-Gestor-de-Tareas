import type { Tarea } from "../types/Tarea";

type TaskProps = {
  task: Tarea;
  onDeleteTask: (id: string) => void;
};

export default function Task({ task, onDeleteTask }: TaskProps) {
  return (
    <article className="task-card">
      <div className="task-card-top">
        <span className="task-label">TAREA</span>
        <button
          className="delete-button"
          type="button"
          onClick={() => onDeleteTask(task.id)}
          aria-label={`Eliminar la tarea ${task.titulo}`}
          title="Eliminar tarea"
        >
          Eliminar
        </button>
      </div>
      <h3>{task.titulo}</h3>
      <p className="task-description">
        {task.descripcion.trim() || "Sin descripción."}
      </p>
      <div className="task-responsible">
        <span className="avatar" aria-hidden="true">
          {task.responsable.trim().charAt(0).toUpperCase()}
        </span>
        <div>
          <span className="responsible-caption">Responsable</span>
          <strong>{task.responsable}</strong>
        </div>
      </div>
    </article>
  );
}
