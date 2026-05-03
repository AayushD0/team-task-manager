import { useState } from "react";

function App() {

  const [page, setPage] = useState("login");

  const [tasks, setTasks] = useState([
    { title: "Design dashboard", status: "In Progress" },
    { title: "Setup backend", status: "Completed" }
  ]);

  const [newTask, setNewTask] = useState("");

  const [projects] = useState([
    "Team Task Manager App",
    "Client Website"
  ]);


  const addTask = () => {
    if (!newTask) return;

    setTasks([
      ...tasks,
      { title: newTask, status: "Pending" }
    ]);

    setNewTask("");
  };


  return (

    <div style={{ maxWidth: "800px", margin: "40px auto" }}>

      <h1>Team Task Manager</h1>


      {/* LOGIN */}
      {page === "login" && (

        <div>

          <h2>Login</h2>

          <input placeholder="Email" />
          <br /><br />

          <input type="password" placeholder="Password" />
          <br /><br />

          <button onClick={() => setPage("dashboard")}>
            Login
          </button>

          <p onClick={() => setPage("signup")} style={{ cursor: "pointer" }}>
            Create account
          </p>

        </div>

      )}


      {/* SIGNUP */}
      {page === "signup" && (

        <div>

          <h2>Signup</h2>

          <input placeholder="Name" />
          <br /><br />

          <input placeholder="Email" />
          <br /><br />

          <input type="password" placeholder="Password" />
          <br /><br />

          <button onClick={() => setPage("dashboard")}>
            Signup
          </button>

        </div>

      )}


      {/* DASHBOARD */}
      {page === "dashboard" && (

        <div>

          <h2>Dashboard</h2>


          {/* PROJECTS */}
          <h3>Projects</h3>

          {projects.map((p, i) => (
            <div key={i} style={card}>
              {p}
            </div>
          ))}


          {/* TASKS */}
          <h3>Tasks</h3>

          {tasks.map((task, index) => (

            <div key={index} style={card}>

              <h4>{task.title}</h4>

              <p>Status: {task.status}</p>

            </div>

          ))}


          {/* ADD TASK */}
          <h3>Add Task</h3>

          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Task name"
          />

          <button onClick={addTask}>
            Add Task
          </button>


          <br /><br />

          <button onClick={() => setPage("login")}>
            Logout
          </button>

        </div>

      )}

    </div>
  );
}


const card = {
  border: "1px solid black",
  padding: "15px",
  marginBottom: "10px"
};

export default App;
