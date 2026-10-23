import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

type TaskItem = {
  id: string;
  text: string;
};

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  function handleAddTask(text: string) {
    const newTask: TaskItem = {
      id: crypto.randomUUID(),
      text,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function handleDeleteTask(id: string) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  return (
    <section>
      <TaskForm onAddTask={handleAddTask} />

      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </section>
  );
}
