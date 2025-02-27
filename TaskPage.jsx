import React, { useState, useEffect } from "react";
import { fetchTasks, addTask, deleteTask, updateTask } from "../api";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTasksData();
  }, []);

  const fetchTasksData = async () => {
    try {
      const response = await fetchTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async (task) => {
    try {
      const newTask = await addTask(task);
      setTasks([...tasks, newTask.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleToggleComplete = async (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    const updatedTask = { ...task, completed: !task.completed };
    try {
      await updateTask(taskId, updatedTask);
      setTasks(
        tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // for "all"
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Task List</h1>
      <div style={styles.formContainer}>
        <TaskForm onAdd={handleAddTask} />
      </div>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => setFilter("all")}
          style={styles.button}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          style={styles.button}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          style={styles.button}
        >
          Pending
        </button>
      </div>
      <div style={styles.taskListContainer}>
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
  },
  header: {
    fontSize: "2.5rem",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  formContainer: {
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#2980b9",
  },
  taskListContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 12px hsl(220, 93.60%, 69.20%)",
  },
};

export default TaskPage;
