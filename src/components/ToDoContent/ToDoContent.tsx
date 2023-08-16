import styles from "./ToDoContent.module.css";
import ToDoList from "../ToDoList/ToDoList";
import Completed from "../Completed/Completed";
import { useEffect } from "react";
import { fetchTasks } from "../../api/api";
import { useTasks } from "../../contexts/TaskContext";
import Progress from "../Progress/Progress";

const ToDoContent = () => {
  const { setTasks } = useTasks();

  useEffect(() => {
    fetchTasks()
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, [setTasks]);
  return (
    <div className={styles.todoContent}>
      <ToDoList />
      <Progress />
      <Completed />
    </div>
  );
};

export default ToDoContent;
