import styles from "./task.module.css";
import ToDo from "../../types/ToDo";
import moment from "moment";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { TbProgressCheck } from "react-icons/tb";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import {
  deleteTaskByID,
  updateTaskCompletionStatusByID,
  updateTaskInProgressStatusByID,
} from "../../api/api";
import { useTasks } from "../../contexts/TaskContext";

interface TaskProps {
  task: ToDo;
}
const Task: React.FC<TaskProps> = ({
  task: { id, title, description, editedAt },
}) => {
  const { deleteTask, updateTask } = useTasks();
  const formattedDate = moment(editedAt).format("D MMMM, YYYY h:mm:ss A z");

  const handleDelete = async (id: number) => {
    if (id !== undefined) {
      try {
        await deleteTaskByID(id);
        deleteTask(id);
      } catch (error) {
        console.error("An error occurred while deleting the task:", error);
      }
    }
  };

  const handleComplete = async (id: number) => {
    if (id !== undefined) {
      try {
        const updatedTask = await updateTaskCompletionStatusByID(id, true);
        updateTask(updatedTask);
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  };

  const handleProgress = async (id: number) => {
    if (id !== undefined) {
      try {
        const updatedTask = await updateTaskInProgressStatusByID(id, true);
        updateTask(updatedTask);
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  };

  return (
    <div className={styles.tastContainer}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.dateEdited}>
          <AiTwotoneCalendar fontSize={18} />{" "}
          <div className={styles.dateText}>{formattedDate}</div>
        </div>
      </div>
      <div>
        <TbProgressCheck
          data-tooltip-id="progress-btn"
          data-tooltip-content="Move task to In Progress"
          className={styles.progressBtn}
          onClick={() => id !== undefined && handleProgress(id)}
        />
        <IoMdDoneAll
          onClick={() => id !== undefined && handleComplete(id)}
          data-tooltip-id="complete-btn"
          data-tooltip-content="Move task to Complete"
          className={styles.completeBtn}
        />

        <TiDeleteOutline
          data-tooltip-id="delete-btn"
          data-tooltip-content="Delete task"
          className={styles.deleteBtn}
          onClick={() => id !== undefined && handleDelete(id)}
        />
        <Tooltip id="progress-btn" />
        <Tooltip id="complete-btn" />
        <Tooltip id="delete-btn" />
      </div>
    </div>
  );
};

export default Task;
