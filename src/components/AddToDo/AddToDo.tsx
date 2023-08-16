import styles from "./AddToDo.module.css";
import { AiFillPlusSquare } from "react-icons/ai";

const AddToDo = () => {
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
        ></input>
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
        ></input>
      </div>
      <button className={styles.addButton}>
        <AiFillPlusSquare className={styles.icon} />
        Add Task
      </button>
    </div>
  );
};

export default AddToDo;
