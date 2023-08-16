import { useTasks } from "../../contexts/TaskContext";
import ToDo from "../../types/ToDo";
import Task from "../Task/task";
import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const { tasks } = useTasks();
  console.log(tasks);

  return (
    <div className={styles.toDoList}>
      <h1>ToDoList</h1>
      {tasks.map((task: ToDo) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default ToDoList;
