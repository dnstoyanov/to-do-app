import { useTasks } from "../../contexts/TaskContext";
import ToDo from "../../types/ToDo";
import Task from "../Task/task";

import styles from "./Progress.module.css";

const Progress = () => {
  const { tasks } = useTasks();

  const tasksInProgress = tasks.filter(
    (task) => task.isInProgress && !task.isCompleted
  );

  return (
    <div className={styles.progressList}>
      <h1>In Progress</h1>
      {tasksInProgress.map((task: ToDo) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Progress;
