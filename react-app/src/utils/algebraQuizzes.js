// Random number generator helper
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random questions for Algebra 1
export function generateAlgebra1Questions() {
  const questions = [];

  // Type 1: ax + b = c (solve for x)
  for (let i = 0; i < 3; i++) {
    const a = rand(2, 9);
    const b = rand(1, 15);
    const x = rand(1, 10);
    const c = a * x + b;
    const correct = x;
    questions.push({
      q: `Solve for x: ${a}x + ${b} = ${c}`,
      correct: correct,
      type: "value",
    });
  }

  // Type 2: ax - b = c (solve for x)
  for (let i = 0; i < 2; i++) {
    const a = rand(2, 8);
    const b = rand(1, 12);
    const x = rand(2, 10);
    const c = a * x - b;
    const correct = x;
    questions.push({
      q: `Solve for x: ${a}x - ${b} = ${c}`,
      correct: correct,
      type: "value",
    });
  }

  // Type 3: x/a = b (solve for x)
  for (let i = 0; i < 2; i++) {
    const a = rand(2, 6);
    const b = rand(2, 8);
    const correct = a * b;
    questions.push({
      q: `Solve for x: x/${a} = ${b}`,
      correct: correct,
      type: "value",
    });
  }

  // Type 4: Simple addition/subtraction
  for (let i = 0; i < 2; i++) {
    const a = rand(1, 20);
    const b = rand(1, 15);
    const correct = a + b;
    questions.push({
      q: `What is ${a} + ${b}?`,
      correct: correct,
      type: "value",
    });
  }

  // Type 5: x - a = b (solve for x)
  const a5 = rand(5, 15);
  const b5 = rand(1, 10);
  questions.push({
    q: `Solve for x: x - ${a5} = ${b5}`,
    correct: a5 + b5,
    type: "value",
  });

  return questions;
}
