import { useTasks } from "../../contexts/TaskContext";
import Task from "../../types/Task";
import SingleTask from "../SingleTask/SingleTask";
import styles from "./TaskList.module.css";

const TaskList = () => {
  const { tasks } = useTasks();

  const newTasks = tasks.filter(
    (task) => !task.isCompleted && !task.isInProgress
  );

  return (
    <div className={styles.TaskList}>
      <h1>To Do</h1>
      {newTasks.map((task: Task) => (
        <SingleTask task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
