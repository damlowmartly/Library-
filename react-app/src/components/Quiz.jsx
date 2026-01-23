  import { useState, useEffect } from "react";

export default function Quiz({ quizGenerator }) {
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const questions = quizGenerator();
    setCurrentQuiz(questions);
    setCurrentIndex(0);
    setScore(0);
    setShowResults(false);
  }, [quizGenerator]);

  const handleAnswer = (selected, correct) => {
    if (selected === correct) setScore((s) => s + 1);
    setCurrentIndex((i) => i + 1);
    if (currentIndex + 1 >= 10) setShowResults(true);
  };

  if (!currentQuiz.length) return null;

  if (showResults)
    return (
      <div className="p-6 bg-gray-100 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Quiz Complete! 🎉</h3>
        <p className="text-green-600 text-2xl font-semibold mb-4">
          Score: {score}/10
        </p>
        <button
          onClick={() => {
            const questions = quizGenerator();
            setCurrentQuiz(questions);
            setCurrentIndex(0);
            setScore(0);
            setShowResults(false);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Restart Quiz
        </button>
      </div>
    );

  const question = currentQuiz[currentIndex];

  // Generate answers with 3 wrong answers
  const correct = question.correct;
  const wrongAnswers = [];
  while (wrongAnswers.length < 3) {
    const offset = Math.floor(Math.random() * 11) - 5;
    const wrong = correct + offset;
    if (wrong !== correct && !wrongAnswers.includes(wrong) && wrong >= 0)
      wrongAnswers.push(wrong);
  }

  const options = [correct, ...wrongAnswers].sort(() => Math.random() - 0.5);
  const correctIndex = options.indexOf(correct);

  return (
    <div className="quiz-section p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">
        Practice Quiz - Question {currentIndex + 1}/10
      </h2>
      <p className="font-bold mb-3">{question.q}</p>
      <div className="flex flex-col space-y-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            className="quiz-option border-2 border-blue-500 rounded px-4 py-2 text-left hover:bg-gray-200 transition"
            onClick={() => handleAnswer(idx, correctIndex)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
