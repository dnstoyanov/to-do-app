import axios from "axios";
import Task from "../types/Task";

const API_BASE_URL = "https://64dcdddde64a8525a0f7447e.mockapi.io/to-do-list";

export const fetchTasks = () => {
  return axios
    .get(`${API_BASE_URL}`, {
      headers: { "content-type": "application/json" },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      throw error;
    });
};

export const deleteTaskByID = async (taskId: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${taskId}`, {
      headers: { "content-type": "application/json" },
    });

    if (response.status === 200) {
      console.log("Task deleted successfully");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export const createTask = async (newTask: Task) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, newTask, {
      headers: { "content-type": "application/json" },
    });

    if (response.status === 201) {
      console.log("Task created successfully");
      return response.data as Task;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export const updateTaskCompletionStatusByID = async (
  taskId: number,
  isCompleted: boolean
): Promise<Task> => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/${taskId}`,
      { isCompleted },
      {
        headers: { "content-type": "application/json" },
      }
    );

    if (response.status === 200) {
      console.log("Task updated successfully");
      return response.data as Task;
    } else {
      throw new Error("Failed to update task");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export const updateTaskInProgressStatusByID = async (
  taskId: number,
  isInProgress: boolean
): Promise<Task> => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/${taskId}`,
      { isInProgress },
      {
        headers: { "content-type": "application/json" },
      }
    );

    if (response.status === 200) {
      console.log("Task updated successfully");
      return response.data as Task;
    } else {
      throw new Error("Failed to update task");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
