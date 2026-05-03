import { useState } from "react";

function App() {

  const [page, setPage] = useState("login");

  const tasks = [
    { title: "Design dashboard", status: "In Progress" },
    { title: "Setup backend", status: "Completed" },
    { title: "Deploy project", status: "Pending" }
  ];

  return (

    <div style={{ maxWidth: "800px", margin: "50px auto" }}>

      <h1>Team Task Manager</h1>

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

          <p
            style={{ cursor: "pointer" }}
            onClick={() => setPage("signup")}
          >
            Create account
          </p>

        </div>

      )}


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


      {page === "dashboard" && (

        <div>

          <h2>Dashboard</h2>

          {tasks.map((task, index) => (

            <div
              key={index}
              style={{
                border: "1px solid black",
                padding: "15px",
                marginBottom: "10px"
              }}
            >

              <h3>{task.title}</h3>

              <p>{task.status}</p>

            </div>

          ))}

          <button onClick={() => setPage("login")}>
            Logout
          </button>

        </div>

      )}

    </div>

  );
}

export default App;
