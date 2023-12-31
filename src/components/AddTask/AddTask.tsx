import { useState, ChangeEvent } from "react";
import styles from "./AddTask.module.css";
import { createTask } from "../../api/api";
import { useTasks } from "../../contexts/TaskContext";

const AddTask = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const { addTask } = useTasks();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setTitleError("");
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleAddNewTask = () => {
    if (!title.trim()) {
      setTitle("");
      setTitleError("Title is required and should not be empty");
      return;
    }

    const newTask = {
      title: title.trim(),
      description: description.trim(),
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
  };
  return (
    <div className={styles.addTaskContainer}>
      <div className={styles.inputSection}>
        <label htmlFor="taskTitle" className={styles.inputLabel}>
          Task Title:
        </label>
        <input
          id="taskTitle"
          placeholder={titleError ? titleError : "Enter task title*"}
          type="text"
          className={titleError ? styles.errorField : styles.inputField}
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
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
