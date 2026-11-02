import { useMemo, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import type { Tarea } from "../types/Tarea";

export default function Tasks() {
  const [tasks, setTasks] = useState<Tarea[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleTasks = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return tasks.filter((task) =>
      task.titulo.toLocaleLowerCase().includes(query)
    );
  }, [tasks, search]);

  function handleAddTask(data: Omit<Tarea, "id">) {
    const newTask: Tarea = {
      id: crypto.randomUUID(),
      ...data,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
    setIsModalOpen(false);
  }

  function handleDeleteTask(id: string) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  return (
    <section className="task-manager">
      <div className="toolbar">
        <div className="search-wrapper">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <label className="visually-hidden" htmlFor="task-search">Buscar tareas por título</label>
          <input
            id="task-search"
            type="search"
            placeholder="Buscar por título..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <button className="button button-primary new-task-button" type="button" onClick={() => setIsModalOpen(true)}>
          <span aria-hidden="true">＋</span> Nueva tarea
        </button>
      </div>

      <TaskList
        tasks={visibleTasks}
        totalTasks={tasks.length}
        onDeleteTask={handleDeleteTask}
      />

      {isModalOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsModalOpen(false);
          }}
        >
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-task-title"
          >
            <TaskForm
              onAddTask={handleAddTask}
              onCancel={() => setIsModalOpen(false)}
            />
          </section>
        </div>
      )}
    </section>
  );
}
