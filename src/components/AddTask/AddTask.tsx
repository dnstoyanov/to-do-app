import { useState, ChangeEvent } from "react";
import styles from "./AddTask.module.css";
import { AiFillPlusSquare } from "react-icons/ai";
import { createTask } from "../../api/api";
import { useTasks } from "../../contexts/TaskContext";

const AddTask = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { addTask } = useTasks();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleAddNewTask = () => {
    const newTask = {
      title: title,
      description: description,
      isCompleted: false,
      isInProgress: false,
      editedAt: new Date(),
    };
    createTask(newTask)
      .then((createdTask) => {
        addTask(createdTask!);
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error);
      });
    setTitle("");
    setDescription("");
  };
  return (
    <div className={styles.addTaskContainer}>
      <div className={styles.inputSection}>
        <label htmlFor="taskTitle" className={styles.inputLabel}>
          Task Title:
        </label>
        <input
          id="taskTitle"
          placeholder="Enter task title"
          type="text"
          className={styles.inputField}
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className={styles.inputSection}>
        <label htmlFor="taskDescr" className={styles.inputLabel}>
          Task Description:
        </label>
        <input
          id="taskDescr"
          placeholder="Enter task description"
          type="text"
          className={styles.inputField}
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button className={styles.addButton} onClick={handleAddNewTask}>
        <AiFillPlusSquare className={styles.icon} />
        Add Task
      </button>
    </div>
  );
};

export default AddTask;