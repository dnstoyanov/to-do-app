import ToDo from "../../types/ToDo";

interface TaskProps {
  task: ToDo;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {/* You can display other task-related information here */}
    </div>
  );
};

export default Task;
