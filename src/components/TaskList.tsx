import Task from "./Task";

type TaskItem = {
  id: string;
  text: string;
};

type TaskListProps = {
  tasks: TaskItem[];
  onDeleteTask: (id: string) => void;
};

export default function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No hay tareas pendientes</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
