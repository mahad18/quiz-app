import { Link } from "react-router-dom";

export default function Result({ score }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4">Your Score</h1>
      <p className="text-2xl mb-6">
        {score} / 5
      </p>
      <Link
        to="/quiz"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Retake Quiz
      </Link>
    </div>
  );
}