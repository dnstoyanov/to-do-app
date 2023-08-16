import styles from "./ToDoContent.module.css";
import ToDoList from "../ToDoList/ToDoList";
import Pending from "../Pending/Pending";
import Completed from "../Completed/Completed";

const ToDoContent = () => {
  return (
    <div className={styles.todoContent}>
      <ToDoList />
      <Pending />
      <Completed />
    </div>
  );
};

export default ToDoContent;
