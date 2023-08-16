import styles from "./TasksContent.module.css";
import TaskList from "../TaskList/TaskList";
import Completed from "../Completed/Completed";
import { useEffect } from "react";
import { fetchTasks } from "../../api/api";
import { useTasks } from "../../contexts/TaskContext";
import Progress from "../Progress/Progress";

const TasksContent = () => {
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
    <div className={styles.tasksContent}>
      <TaskList />
      <Progress />
      <Completed />
    </div>
  );
};

export default TasksContent;
