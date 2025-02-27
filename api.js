import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";  

export const fetchTasks = async () => {
  return axios.get(`${API_URL}/todos`);
};

export const addTask = async (task) => {
  return axios.post(`${API_URL}/todos`, task);
};

export const deleteTask = async (taskId) => {
  return axios.delete(`${API_URL}/todos/${taskId}`);
};

export const updateTask = async (taskId, task) => {
  return axios.put(`${API_URL}/todos/${taskId}`, task);
};
