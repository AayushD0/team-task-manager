import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  return (
    <div>
      {page === "login" && (
        <Login setUser={setUser} setPage={setPage} />
      )}

      {page === "dashboard" && (
        <Dashboard user={user} />
      )}
    </div>
  );
}

export default App;
