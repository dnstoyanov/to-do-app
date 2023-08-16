import axios from "axios";

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
