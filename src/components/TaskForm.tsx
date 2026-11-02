import { useState, type SyntheticEvent } from "react";
import type { NuevaTarea } from "../types/Tarea";
import {
  Eyebrow,
  ErrorMessage,
  FormActions,
  FormHint,
  IconButton,
  ModalHeader,
  PrimaryButton,
  SecondaryButton,
  TaskFormElement,
  OptionalText,
} from "../styles";
type FormularioTareaProps = {
  onAddTask: (data: NuevaTarea) => Promise<boolean>;
  onCancel: () => void;
  error: string | null;
};
export default function FormularioTarea({
  onAddTask,
  onCancel,
  error,
}: FormularioTareaProps) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [responsable, setResponsable] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanTitle = titulo.trim();
    const cleanResponsible = responsable.trim();

    if (!cleanTitle || !cleanResponsible || isSubmitting) return;

    setIsSubmitting(true);
    const created = await onAddTask({
      titulo: cleanTitle,
      descripcion: descripcion.trim(),
      responsable: cleanResponsible,
    });
    setIsSubmitting(false);

    if (created) {
      setTitulo("");
      setDescripcion("");
      setResponsable("");
    }
  }
  console.log("Error recibido en TaskForm:", error);
  return (
    <TaskFormElement onSubmit={handleSubmit}>
      <ModalHeader>
        <div>
          <Eyebrow>NUEVO ELEMENTO</Eyebrow>
          <h2 id="new-task-title">Nueva tarea</h2>
        </div>
        <IconButton
          type="button"
          onClick={onCancel}
          aria-label="Cerrar ventana"
        >
          ×
        </IconButton>
      </ModalHeader>
      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}

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
        Descripción <OptionalText>(opcional)</OptionalText>
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

      <FormHint>* Campos obligatorios</FormHint>
      <FormActions>
        <SecondaryButton
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancelar
        </SecondaryButton>
        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : "Guardar tarea"}
        </PrimaryButton>
      </FormActions>
    </TaskFormElement>
  );
}
