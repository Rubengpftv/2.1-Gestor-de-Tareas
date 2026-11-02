import { useState, type SyntheticEvent } from "react";
import type { Tarea } from "../types/Tarea";

type FormularioTareaProps = {
  onAddTask: (data: Omit<Tarea, "id">) => void;
  onCancel: () => void;
};

export default function FormularioTarea({
  onAddTask,
  onCancel,
}: FormularioTareaProps) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [responsable, setResponsable] = useState("");

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanTitle = titulo.trim();
    const cleanResponsible = responsable.trim();

    if (!cleanTitle || !cleanResponsible) return;

    onAddTask({
      titulo: cleanTitle,
      descripcion: descripcion.trim(),
      responsable: cleanResponsible,
    });
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="modal-header">
        <div>
          <p className="eyebrow">NUEVO ELEMENTO</p>
          <h2 id="new-task-title">Nueva tarea</h2>
        </div>
        <button
          className="icon-button"
          type="button"
          onClick={onCancel}
          aria-label="Cerrar ventana"
        >
          ×
        </button>
      </div>

      <label htmlFor="titulo">
        Título <span aria-hidden="true">*</span>
      </label>
      <input
        id="titulo"
        name="titulo"
        type="text"
        placeholder="Ej. Preparar presentación"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        required
        autoFocus
        maxLength={100}
      />

      <label htmlFor="descripcion">
        Descripción <span className="optional">(opcional)</span>
      </label>
      <textarea
        id="descripcion"
        name="descripcion"
        placeholder="Añade detalles sobre la tarea..."
        value={descripcion}
        onChange={(event) => setDescripcion(event.target.value)}
        rows={4}
        maxLength={500}
      />

      <label htmlFor="responsable">
        Responsable <span aria-hidden="true">*</span>
      </label>
      <input
        id="responsable"
        name="responsable"
        type="text"
        placeholder="Nombre de la persona responsable"
        value={responsable}
        onChange={(event) => setResponsable(event.target.value)}
        required
        maxLength={100}
      />

      <p className="form-hint">* Campos obligatorios</p>
      <div className="form-actions">
        <button
          className="button button-secondary"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="button button-primary" type="submit">
          Guardar tarea
        </button>
      </div>
    </form>
  );
}
