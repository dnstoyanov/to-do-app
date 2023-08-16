import styles from "./task.module.css";
import ToDo from "../../types/ToDo";
import moment from "moment";

import { TbProgressCheck } from "react-icons/tb";
import { IoMdDoneAll } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { deleteTask } from "../../api/api";
import { useState } from "react";

interface TaskProps {
  task: ToDo;
}
const Task: React.FC<TaskProps> = ({
  task: { id, title, description, editedAt },
}) => {
  const [showToolTip, setShowToolTip] = useState<boolean>(false);
  const formattedDate = moment(editedAt).format("D MMMM, YYYY h:mm:ss A z");

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
    } catch (error) {
      console.error("An error occurred while deleting the task:", error);
    }
  };
  return (
    <div className={styles.tastContainer}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{formattedDate}</p>
      </div>
      <div>
        <TbProgressCheck className={styles.progressBtn} />
        <IoMdDoneAll className={styles.completeBtn} />

        <TiDeleteOutline
          className={styles.deleteBtn}
          onClick={() => handleDelete(id)}
          onMouseEnter={() => setShowToolTip(true)}
          onMouseLeave={() => setShowToolTip(false)}
        />
      </div>
    </div>
  );
};

export default Task;
