import { useEffect, useMemo, useState } from "react";
import type { NuevaTarea, Tarea } from "../types/Tarea";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import {
  ErrorMessage,
  Manager,
  Modal,
  ModalBackdrop,
  NewTaskButton,
  PrimaryButton,
  SearchIcon,
  SearchInput,
  SearchWrapper,
  StatusMessage,
  Toolbar,
  VisuallyHidden,
} from "../styles";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export default function Tasks() {
  const [tasks, setTasks] = useState<Tarea[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState(0);
  const [deletingTaskId, setDeletingTaskId] = useState<string | number | null>(
    null,
  );
  const [createError, setCreateError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadTasks() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/tasks`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Error ${response.status}: no se pudieron obtener las tareas.`,
          );
        }

        const data: Tarea[] = await response.json();
        setTasks(data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(
          err instanceof Error
            ? err.message
            : "No se pudieron cargar las tareas.",
        );
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void loadTasks();
    return () => controller.abort();
  }, [reload]);

  const visibleTasks = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return tasks.filter((task) =>
      task.titulo.toLocaleLowerCase().includes(query),
    );
  }, [tasks, search]);

  useEffect(() => {
    const visibleCount = visibleTasks.length;
    const totalCount = tasks.length;
    document.title = `Mostrando ${visibleCount} de ${totalCount} tareas | Gestor de tareas`;
  }, [visibleTasks.length, tasks.length]);

  async function handleAddTask(data: NuevaTarea): Promise<boolean> {
    setCreateError(null);

    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: no se pudo crear la tarea.`);
      }

      const createdTask: Tarea = await response.json();

      setTasks((previousTasks) => [...previousTasks, createdTask]);
      setIsModalOpen(false);

      return true;
    } catch (err) {
      console.error("Error capturado en POST:", err);

      setCreateError(
        err instanceof Error ? err.message : "No se pudo crear la tarea.",
      );

      return false;
    }
  }

  async function handleDeleteTask(id: string | number): Promise<void> {
    setError(null);
    setDeletingTaskId(id);

    try {
      const response = await fetch(
        `${API_URL}/tasks/${encodeURIComponent(String(id))}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error(
          `Error ${response.status}: no se pudo eliminar la tarea.`,
        );
      }

      setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== id),
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "No se pudo eliminar la tarea.",
      );
    } finally {
      setDeletingTaskId(null);
    }
  }

  return (
    <Manager>
      <Toolbar>
        <SearchWrapper>
          <SearchIcon aria-hidden="true">⌕</SearchIcon>
          <VisuallyHidden htmlFor="task-search">
            Buscar tareas por título
          </VisuallyHidden>
          <SearchInput
            id="task-search"
            type="search"
            placeholder="Buscar por título..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchWrapper>
        <NewTaskButton
          type="button"
          onClick={() => {
            setCreateError(null);
            setIsModalOpen(true);
          }}
        >
          <span aria-hidden="true">＋</span> Nueva tarea
        </NewTaskButton>
      </Toolbar>

      {!isModalOpen && error && (
        <ErrorMessage role="alert">{error}</ErrorMessage>
      )}
      
      {isLoading ? (
        <StatusMessage role="status">Cargando tareas...</StatusMessage>
      ) : error && tasks.length === 0 ? (
        <StatusMessage role="alert">
          No se han podido cargar las tareas.
          <br />
          <PrimaryButton
            type="button"
            onClick={() => setReload((value) => value + 1)}
          >
            Reintentar
          </PrimaryButton>
        </StatusMessage>
      ) : (
        <TaskList
          tasks={visibleTasks}
          totalTasks={tasks.length}
          onDeleteTask={handleDeleteTask}
          deletingTaskId={deletingTaskId}
        />
      )}

      {isModalOpen && (
        <ModalBackdrop
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsModalOpen(false);
          }}
        >
          <Modal
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-task-title"
          >
            <TaskForm
              onAddTask={handleAddTask}
              onCancel={() => {
                setIsModalOpen(false);
                setCreateError(null);
              }}
              error={createError}
            />
          </Modal>
        </ModalBackdrop>
      )}
    </Manager>
  );
}
