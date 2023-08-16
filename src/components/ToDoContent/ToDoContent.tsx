import styles from "./ToDoContent.module.css";
import ToDoList from "../ToDoList/ToDoList";
import Pending from "../Pending/Pending";
import Completed from "../Completed/Completed";
import { useEffect } from "react";
import { fetchTasks } from "../../api/api";
import { useTasks } from "../../contexts/TaskContext";

const ToDoContent = () => {
  const { setTasks } = useTasks();

  useEffect(() => {
    fetchTasks()
      .then((tasks) => {
        setTasks(tasks);
        console.log(tasks);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, [setTasks]);
  return (
    <div className={styles.todoContent}>
      <ToDoList />
      <Pending />
      <Completed />
    </div>
  );
};

export default ToDoContent;
