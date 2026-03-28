// App.jsx
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; 
import Quiz from "./quiz";
import Result from "./result";
import "./App.css";

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar" style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Welcome to the Quiz App</h1>
                <Link to="/quiz" style={{ marginTop: "20px", display: "inline-block", padding: "10px 20px", backgroundColor: "#3b82f6", color: "white", borderRadius: "5px" }}>
                  Start Quiz
                </Link>
              </div>
            }
          />
          <Route
            path="/quiz"
            element={<Quiz score={score} setScore={setScore} />}
          />
          <Route
            path="/result"
            element={<Result score={score} />}
          />
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Page Not Found</h1>
                <Link to="/">Go Home</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

