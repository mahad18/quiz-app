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
    setSelected(""); // reset selection

    if (current < questions.length - 1) setCurrent(current + 1);
    else {
      // Calculate final score
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
    <div className="flex flex-col items-center p-6 pt-10 min-h-screen">
      <div className="w-full max-w-xl bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">
          Question {current + 1} of {questions.length}
        </h2>
        <p className="mb-4">{questions[current].question}</p>

        <div className="flex flex-col space-y-2 mb-4">
          {questions[current].options.map((opt) => (
            <label key={opt} className="flex items-center space-x-2">
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selected === opt}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!selected}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
          >
            {current === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}