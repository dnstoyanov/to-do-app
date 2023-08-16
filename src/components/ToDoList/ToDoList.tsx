import { useTasks } from "../../contexts/TaskContext";
import ToDo from "../../types/ToDo";
import Task from "../Task/task";
import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const { tasks } = useTasks();

  const newTasks = tasks.filter(
    (task) => !task.isCompleted && !task.isInProgress
  );

  return (
    <div className={styles.toDoList}>
      <h1>To Do</h1>
      {newTasks.map((task: ToDo) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default ToDoList;
