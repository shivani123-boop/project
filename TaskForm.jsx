import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask({ title: "", description: "", dueDate: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={styles.formContainer}
    >
      <h2 style={styles.header}>Add New Task</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          required
          style={{ ...styles.input, minHeight: "80px", resize: "vertical" }}
        />
      </div>
      <div style={styles.inputContainer}>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.buttonContainer}>
        <button
          type="submit"
          style={styles.submitButton}
          onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

const styles = {
  formContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    maxWidth: "550px",
    margin: "20px auto",
    padding: "30px",
    background: "linear-gradient(135deg, #f0f8ff, #e6f0fa)",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(255, 48, 44, 0.95)",
    transition: "all 0.3s ease",
  },
  header: {
    fontSize: "2.2rem",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "10px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "14px 16px",
    border: "2px solid #dfe6e9",
    borderRadius: "10px",
    fontSize: "1.1rem",
    outline: "none",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: "inset 0 2px 4px rgba(229, 19, 19, 0.84)",
  },
  buttonContainer: {
    textAlign: "center",
  },
  submitButton: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(90deg,rgb(18, 107, 166),rgb(12, 87, 138))",
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(162, 181, 243, 0.95)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
};

export default TaskForm;