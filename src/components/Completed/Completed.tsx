import { useTasks } from "../../contexts/TaskContext";
import Task from "../../types/Task";
import SingleTask from "../SingleTask/SingleTask";
import styles from "./Completed.module.css";

const Completed = () => {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(
    (task) => task.isCompleted && !task.isInProgress
  );

  return (
    <div className={styles.completedList}>
      <h1>Completed</h1>
      {completedTasks.map((task: Task) => (
        <SingleTask task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Completed;
