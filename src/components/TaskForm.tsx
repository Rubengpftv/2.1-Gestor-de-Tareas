import { useState, type SubmitEvent } from "react";
type TaskFormProps = {
  onAddTask: (text: string) => void;
};

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedText = taskText.trim();

    if (!trimmedText) {
      return;
    }
    onAddTask(trimmedText);
    setTaskText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      <button type="submit">Añadir</button>
    </form>
  );
}
