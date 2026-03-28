import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quiz from "./Quiz";
import Result from "./Result";
import "./App.css"; 

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
        </nav>

        {/* Main content */}
        <div className="main-content">
          <Routes>
            <Route
              path="/quiz"
              element={
                <div className="centered-container">
                  <Quiz score={score} setScore={setScore} />
                </div>
              }
            />
            <Route
              path="/result"
              element={
                <div className="centered-container">
                  <Result score={score} />
                </div>
              }
            />
            <Route
              path="/"
              element={
                <div className="centered-container">
                  <h1>Welcome to the Quiz App</h1>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
