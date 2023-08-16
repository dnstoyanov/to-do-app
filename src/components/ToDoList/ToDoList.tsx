import { useEffect, useState } from "react";
import { fetchTasks } from "../../api/api";
import ToDo from "../../types/ToDo";
import Task from "../Task/task";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((tasks) => {
        setTasks(tasks);
        console.log(tasks);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div>
      <h1>ToDoList</h1>
      {tasks.map((task: ToDo) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default ToDoList;
