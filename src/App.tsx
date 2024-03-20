import "./global.css";
import styles from "./app.module.css";

import { Header } from "./components/Header/index";
import { Post } from "./components/post/index";
import { useState } from "react";

interface Task{
  id: number;
  text: string;
  isCompleted: boolean;
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addPost = (text: string) => {
    if (text.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: text, isCompleted: false }]);
    }
  };

  const removePost = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleCompleted = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ?{ ...task, isCompleted: !task.isCompleted } : task
      ))
  };

  const completedTasksCount = tasks.filter(task => task.isCompleted). length;

  return (
    <div className={styles.page}>
      <Header addPost={addPost} />

      <div className={styles.titleBar}>
        <div className={styles.created}>
          Tarefa criada <span className={styles.checked}>{tasks.length}</span>{" "}
        </div>
        <div className={styles.completed}>
          Concluída <span className={styles.checked}>{completedTasksCount} de {tasks.length}</span>{" "}
        </div>
      </div>

      <div className={styles.tasks}>
        {tasks.map((task) => (
          <Post
            key={task.id}
            text={task.text}
            onRemove={() => removePost(task.id)}
            toggleCompleted={() => toggleCompleted(task.id)}
            isCompleted={task.isCompleted}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
