import { useState, ChangeEvent } from "react";
import styles from "./AddToDo.module.css";
import { AiFillPlusSquare } from "react-icons/ai";
import { createTask } from "../../api/api";

const AddToDo = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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
      completed: false,
      pending: false,
      editedAt: new Date(),
    };
    createTask(newTask)
      .then(() => {
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        // Handle error
      });
    console.log(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <div className={styles.addToDoContainer}>
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

export default AddToDo;
