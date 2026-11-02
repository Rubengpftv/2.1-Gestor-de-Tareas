import type { Tarea } from "../types/Tarea";
import {
  Avatar, CardTop, DeleteButton, Description, MutedCaption,
  Responsible, ResponsibleDetails, TaskCard, TaskLabel
} from "../styles";

type TaskProps = {
  task: Tarea;
  onDeleteTask: (id: string | number) => Promise<void>;
  isDeleting: boolean;
};

export default function Task({ task, onDeleteTask, isDeleting }: TaskProps) {
  return (
    <TaskCard>
      <CardTop>
        <TaskLabel>TAREA</TaskLabel>
        <DeleteButton type="button" onClick={() => void onDeleteTask(task.id)}
          disabled={isDeleting} aria-label={`Eliminar la tarea ${task.titulo}`}
          title="Eliminar tarea">
          {isDeleting ? "Eliminando..." : "Eliminar"}
        </DeleteButton>
      </CardTop>
      <h3>{task.titulo}</h3>
      <Description>{task.descripcion.trim() || "Sin descripción."}</Description>
      <Responsible>
        <Avatar aria-hidden="true">{task.responsable.trim().charAt(0).toUpperCase()}</Avatar>
        <ResponsibleDetails>
          <MutedCaption>Responsable</MutedCaption>
          <strong>{task.responsable}</strong>
        </ResponsibleDetails>
      </Responsible>
    </TaskCard>
  );
}
