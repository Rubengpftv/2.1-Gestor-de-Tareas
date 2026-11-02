import type { Tarea } from "../types/Tarea";
import Task from "./Task";
import {
  Counter,
  EmptyState,
  Section,
  TaskGrid,
  TasksHeading,
} from "../styles";
type TaskListProps = {
  tasks: Tarea[];
  totalTasks: number;
  onDeleteTask: (id: string | number) => Promise<void>;
  deletingTaskId: string | number | null;
};

export default function TaskList({
  tasks,
  totalTasks,
  onDeleteTask,
  deletingTaskId,
}: TaskListProps) {
  return (
    <Section aria-live="polite">
      <TasksHeading>
        <div>
          <h2>Tus tareas</h2>
          <Counter>
            Mostrando {tasks.length} de {totalTasks}
            {totalTasks === 1 ? "tarea" : "tareas"}
          </Counter>
        </div>
      </TasksHeading>

      {tasks.length === 0 ? (
        <EmptyState>
          <h3>
            {totalTasks === 0
              ? "Todavía no hay tareas"
              : "No se encontraron tareas"}
          </h3>
          <p>
            {totalTasks === 0
              ? "Crea tu primera tarea con el botón «Nueva tarea»."
              : "Prueba con otro título o cambia los términos de búsqueda."}
          </p>
        </EmptyState>
      ) : (
        <TaskGrid>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              isDeleting={deletingTaskId === task.id}
            />
          ))}
        </TaskGrid>
      )}
    </Section>
  );
}
