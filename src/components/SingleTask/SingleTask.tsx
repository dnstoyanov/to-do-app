import styles from "./SingleTask.module.css";
import Task from "../../types/Task";
import moment from "moment";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { TbProgressCheck } from "react-icons/tb";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { BsCardChecklist } from "react-icons/bs";
import {
  deleteTaskByID,
  updateTaskCompletionStatusByID,
  updateTaskInProgressStatusByID,
  updateTaskToDoStatusByID,
} from "../../api/api";
import { useTasks } from "../../contexts/TaskContext";

const SingleTask: React.FC<{ task: Task }> = ({
  task: { id, title, description, editedAt, isCompleted, isInProgress },
}) => {
  const { deleteTask, updateTask } = useTasks();
  const formattedDate = moment(editedAt).format("D MMMM, YYYY h:mm:ss A z");
  if (!id) return null;

  const handleDelete = async (id: number) => {
    try {
      await deleteTaskByID(id);
      deleteTask(id);
    } catch (error) {
      console.error("An error occurred while deleting the task:", error);
    }
  };

  const handleComplete = async (id: number) => {
    try {
      const updatedTask = await updateTaskCompletionStatusByID(id, true);
      updateTask(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleProgress = async (id: number) => {
    try {
      const updatedTask = await updateTaskInProgressStatusByID(id, true);
      updateTask(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleToDo = async (id: number) => {
    try {
      const updatedTask = await updateTaskToDoStatusByID(id, false);
      updateTask(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.dateEdited}>
          <AiTwotoneCalendar fontSize={18} />{" "}
          <div className={styles.dateText}>{formattedDate}</div>
        </div>
      </div>
      <div>
        <BsCardChecklist
          className={!isInProgress ? styles.disabled : styles.toDoBtn}
          data-tooltip-id="todo-btn"
          data-tooltip-content="Move task to To Do"
          onClick={() => handleToDo(id)}
        />
        <TbProgressCheck
          className={
            isInProgress || isCompleted ? styles.disabled : styles.progressBtn
          }
          data-tooltip-id="progress-btn"
          data-tooltip-content="Move task to In Progress"
          onClick={() => handleProgress(id)}
        />
        <IoMdDoneAll
          onClick={() => handleComplete(id)}
          data-tooltip-id="complete-btn"
          data-tooltip-content="Move task to Complete"
          className={isCompleted ? styles.disabled : styles.completeBtn}
        />

        <TiDeleteOutline
          data-tooltip-id="delete-btn"
          data-tooltip-content="Delete task"
          className={styles.deleteBtn}
          onClick={() => handleDelete(id)}
        />
        <Tooltip id="progress-btn" />
        <Tooltip id="complete-btn" />
        <Tooltip id="delete-btn" />
        <Tooltip id="todo-btn" />
      </div>
    </div>
  );
};

export default SingleTask;
