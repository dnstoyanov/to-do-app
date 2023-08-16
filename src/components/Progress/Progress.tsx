import { useTasks } from "../../contexts/TaskContext";
import Task from "../../types/Task";
import SingleTask from "../SingleTask/SingleTask";

import styles from "./Progress.module.css";

const Progress = () => {
  const { tasks } = useTasks();

  const tasksInProgress = tasks.filter(
    (task) => task.isInProgress && !task.isCompleted
  );

  return (
    <div className={styles.progressList}>
      <h2>In Progress</h2>
      {tasksInProgress.map((task: Task) => (
        <SingleTask task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Progress;
