import { useTasks } from "../../contexts/TaskContext";
import ToDo from "../../types/ToDo";
import Task from "../Task/task";
import styles from "./Completed.module.css";

const Completed = () => {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(
    (task) => task.isCompleted && !task.isInProgress
  );

  return (
    <div className={styles.completedList}>
      <h1>Completed</h1>
      {completedTasks.map((task: ToDo) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Completed;
