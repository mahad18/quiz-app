// Quiz.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { question: "2 + 2 * 2 = ?", options: ["4", "6", "8", "2"], answer: "6" },
  { question: "Which language runs in a web browser?", options: ["Python", "C++", "JavaScript", "Java"], answer: "JavaScript" },
  { question: "React is a ... ?", options: ["Library", "Framework", "Language", "IDE"], answer: "Library" },
  { question: "Which tag is used for paragraphs in HTML?", options: ["<p>", "<div>", "<span>", "<h1>"], answer: "<p>" },
];

export default function Quiz({ score, setScore }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const navigate = useNavigate();

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    setSelected("");

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // calculate final score
      const finalScore = questions.reduce(
        (acc, q, idx) => (q.answer === newAnswers[idx] ? acc + 1 : acc),
        0
      );
      setScore(finalScore);
      navigate("/result");
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(answers[current - 1] || "");
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2 className="question-heading">
          Question {current + 1} of {questions.length}
        </h2>
        <p className="question-text">{questions[current].question}</p>

        <div className="options-container">
          {questions[current].options.map((opt) => (
            <label key={opt} className="option-label">
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selected === opt}
                onChange={(e) => setSelected(e.target.value)}
              />
              {opt}
            </label>
          ))}
        </div>

        <div className="buttons-container">
          <button onClick={handlePrev} disabled={current === 0} className="btn btn-gray">
            Previous
          </button>
          <button onClick={handleNext} disabled={!selected} className="btn btn-blue">
            {current === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
