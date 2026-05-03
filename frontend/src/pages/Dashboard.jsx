import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard({ user }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = async () => {
    if (!newTask) return;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/tasks",
        {
          title: newTask,
          assignedTo: user?.email,
          status: "Pending"
        }
      );

      setTasks([...tasks, res.data]);
      setNewTask("");
    } catch (err) {
      console.log(err);
    }
  };

  const toggleStatus = (index) => {
    const updated = [...tasks];
    updated[index].status =
      updated[index].status === "Completed" ? "Pending" : "Completed";
    setTasks(updated);
  };

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>

      {/* USER INFO */}
      <div style={styles.userBox}>
        <p><b>User:</b> {user?.email}</p>
        <p><b>Role:</b> {user?.role}</p>
      </div>

      {/* STATS */}
      <div style={styles.stats}>
        <div style={styles.card}>
          <h3>Total</h3>
          <p>{tasks.length}</p>
        </div>

        <div style={styles.card}>
          <h3>Completed</h3>
          <p>{tasks.filter(t => t.status === "Completed").length}</p>
        </div>

        <div style={styles.card}>
          <h3>Pending</h3>
          <p>{tasks.filter(t => t.status !== "Completed").length}</p>
        </div>
      </div>

      {/* ADD TASK */}
      <div style={styles.addBox}>
        <input
          style={styles.input}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button style={styles.button} onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* TASK LIST */}
      <div style={styles.taskList}>
        {tasks.map((task, i) => (
          <div key={i} style={styles.taskCard}>
            <div>
              <h4>{task.title}</h4>
              <p>Status: {task.status}</p>
            </div>

            <button
              style={styles.toggleBtn}
              onClick={() => toggleStatus(i)}
            >
              Toggle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "900px",
    margin: "auto",
    fontFamily: "Arial"
  },

  userBox: {
    background: "#fff",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },

  stats: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px"
  },

  card: {
    flex: 1,
    background: "#4CAF50",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center"
  },

  addBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  button: {
    padding: "10px 15px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  taskList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  taskCard: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },

  toggleBtn: {
    background: "#e67e22",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Dashboard;
