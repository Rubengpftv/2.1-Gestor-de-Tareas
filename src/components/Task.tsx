type TaskProps = {
  id: string;
  text: string;
  onDeleteTask: (id: string) => void;
};

export default function Task({ id, text, onDeleteTask }: TaskProps) {
  return (
    <li>
      <span>{text}</span>

      <button type="button" onClick={() => onDeleteTask(id)}>
        Eliminar
      </button>
    </li>
  );
}
