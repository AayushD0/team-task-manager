import { useState } from "react";

function App() {

  const [page, setPage] = useState("login");

  const tasks = [
    {
      title: "Design dashboard",
      status: "In Progress"
    },
    {
      title: "Setup backend",
      status: "Completed"
    },
    {
      title: "Deploy project",
      status: "Pending"
    }
  ];


  const loginPage = (
    <div style={styles.container}>

      <h1>Team Task Manager</h1>

      <input placeholder="Email" style={styles.input} />

      <input
        type="password"
        placeholder="Password"
        style={styles.input}
      />

      <button
        style={styles.button}
        onClick={() => setPage("dashboard")}
      >
        Login
      </button>

      <p
        style={styles.link}
        onClick={() => setPage("signup")}
      >
        Create account
      </p>

    </div>
  );


  const signupPage = (
    <div style={styles.container}>

      <h1>Create Account</h1>

      <input placeholder="Name" style={styles.input} />

      <input placeholder="Email" style={styles.input} />

      <input
        type="password"
        placeholder="Password"
        style={styles.input}
      />

      <button
        style={styles.button}
        onClick={() => setPage("dashboard")}
      >
        Signup
      </button>

      <p
        style={styles.link}
        onClick={() => setPage("login")}
      >
        Already have account?
      </p>

    </div>
  );


  const dashboardPage = (
    <div style={styles.dashboard}>

      <h1>Dashboard</h1>

      <h2>Projects</h2>

      <div style={styles.card}>
        Team Task Manager App
      </div>

      <h2>Tasks</h2>

      {
        tasks.map((task, index) => (

          <div key={index} style={styles.card}>

            <h3>{task.title}</h3>

            <p>{task.status}</p>

          </div>

        ))
      }

      <button
        style={styles.button}
        onClick={() => setPage("login")}
      >
        Logout
      </button>

    </div>
  );


  return (
    <>
      {page === "login" && loginPage}
      {page === "signup" && signupPage}
      {page === "dashboard" && dashboardPage}
    </>
  );
}


const styles = {

  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "100px auto",
    gap: "15px"
  },

  dashboard: {
    maxWidth: "800px",
    margin: "50px auto"
  },

  input: {
    padding: "12px",
    fontSize: "16px"
  },

  button: {
    padding: "12px",
    cursor: "pointer"
  },

  card: {
    border: "1px solid black",
    padding: "20px",
    marginBottom: "15px"
  },

  link: {
    cursor: "pointer"
  }

};


export default App;

