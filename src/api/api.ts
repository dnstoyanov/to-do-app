import axios from "axios";
import ToDo from "../types/ToDo";

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

export const createTask = async (newTask: ToDo) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, newTask, {
      headers: { "content-type": "application/json" },
    });

    if (response.status === 201) {
      console.log("Task created successfully");
      return response.data as ToDo;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
