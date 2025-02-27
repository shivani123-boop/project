import React from "react";

const TaskList = ({ tasks = [], toggleCompletion, deleteTask }) => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0",
        margin: "20px auto",
        display: "grid",
        gap: "20px",
        maxWidth: "600px",
      }}
    >
      {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
              background: "linear-gradient(135deg, #e0f2fe, #dbeafe)",
              border: "2px solid #1d66a9",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(56, 134, 223, 1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(216, 34, 34, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(220, 23, 23, 0.1)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
                style={{
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                  accentColor: "#3498db",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.15)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                aria-label={`Mark ${task.title} as completed`}
              />
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#95a5a6" : "#2c3e50",
                  transition: "color 0.3s ease",
                }}
              >
                {task.title}{" "}
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    color: task.completed ? "#bdc3c7" : "#7f8c8d",
                  }}
                >
                  - {task.description}
                </span>{" "}
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "#3498db",
                    fontStyle: "italic",
                  }}
                >
                  (Due:{" "}
                  {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString()
                    : "No Due Date"}
                  )
                </span>
              </span>
            </div>
            <button
              onClick={() =>
                window.confirm("Are you sure you want to delete this task?")
                  ? deleteTask(task.id)
                  : null
              }
              style={{
                padding: "8px 16px",
                backgroundColor: "#ef4444",
                color: "#fff",
                fontWeight: "600",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#dc2626";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#ef4444";
                e.target.style.transform = "scale(1)";
              }}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#7f8c8d",
            fontSize: "1.1rem",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          No tasks available yet!
        </p>
      )}
    </ul>
  );
};

export default TaskList;