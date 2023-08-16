import React, { createContext, useContext, useState, ReactNode } from "react";

interface Task {
  id?: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isInProgress: boolean;
  editedAt: Date;
}

interface TasksContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  deleteTask: (taskId: number) => void;
  addTask: (newTask: Task) => void;
  updateTask: (updatedTask: Task) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        deleteTask,
        addTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
