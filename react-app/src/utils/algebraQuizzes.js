// Random number generator helper
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =======================
// Algebra 1
// =======================
export function generateAlgebra1Questions() {
  const questions = [];

  // ax + b = c
  for (let i = 0; i < 3; i++) {
    const a = rand(2, 9);
    const b = rand(1, 15);
    const x = rand(1, 10);
    const c = a * x + b;
    questions.push({
      q: `Solve for x: ${a}x + ${b} = ${c}`,
      correct: x,
      type: "value",
    });
  }

  // ax - b = c
  for (let i = 0; i < 2; i++) {
    const a = rand(2, 8);
    const b = rand(1, 12);
    const x = rand(2, 10);
    const c = a * x - b;
    questions.push({
      q: `Solve for x: ${a}x - ${b} = ${c}`,
      correct: x,
      type: "value",
    });
  }

  // x / a = b
  for (let i = 0; i < 2; i++) {
    const a = rand(2, 6);
    const b = rand(2, 8);
    questions.push({
      q: `Solve for x: x/${a} = ${b}`,
      correct: a * b,
      type: "value",
    });
  }

  // Addition
  for (let i = 0; i < 2; i++) {
    const a = rand(1, 20);
    const b = rand(1, 15);
    questions.push({
      q: `What is ${a} + ${b}?`,
      correct: a + b,
      type: "value",
    });
  }

  // x - a = b
  const a5 = rand(5, 15);
  const b5 = rand(1, 10);
  questions.push({
    q: `Solve for x: x - ${a5} = ${b5}`,
    correct: a5 + b5,
    type: "value",
  });

  return questions;
}

// =======================
// Algebra 2
// =======================
export function generateAlgebra2Questions() {
  const questions = [];

  // x² = a
  for (let i = 0; i < 2; i++) {
    const x = rand(2, 8);
    questions.push({
      q: `Solve for x (positive): x² = ${x * x}`,
      correct: x,
      type: "value",
    });
  }

  // x² + bx = 0
  for (let i = 0; i < 2; i++) {
    const b = rand(2, 6);
    questions.push({
      q: `Solve for x (non-zero): x² + ${b}x = 0`,
      correct: -b,
      type: "value",
    });
  }

  // Exponents
  for (let i = 0; i < 2; i++) {
    const base = rand(2, 4);
    const exp = rand(2, 4);
    questions.push({
      q: `Evaluate: ${base}^${exp}`,
      correct: Math.pow(base, exp),
      type: "value",
    });
  }

  // Simple system
  const x = rand(2, 8);
  const y = rand(1, 6);
  questions.push({
    q: `Solve for x: x + y = ${x + y}, y = ${y}`,
    correct: x,
    type: "value",
  });

  return questions;
}

// =======================
// Algebra 3
// =======================
export function generateAlgebra3Questions() {
  const questions = [];

  // √x = a
  for (let i = 0; i < 2; i++) {
    const a = rand(2, 8);
    questions.push({
      q: `Solve for x: √x = ${a}`,
      correct: a * a,
      type: "value",
    });
  }

  // Rational equation
  for (let i = 0; i < 2; i++) {
    const a = rand(2, 6);
    const x = rand(2, 6);
    questions.push({
      q: `Solve for x: x/${a} = ${x / a}`,
      correct: x,
      type: "value",
    });
  }

  // Simplification
  const a2 = rand(2, 6);
  const b2 = rand(2, 6);
  questions.push({
    q: `Simplify: (${a2}x) / ${b2} when x = ${b2}`,
    correct: a2,
    type: "value",
  });

  // Complex number
  questions.push({
    q: `What is i²?`,
    correct: -1,
    type: "value",
  });

  return questions;
}

// =======================
// Algebra 4
// =======================
export function generateAlgebra4Questions() {
  const questions = [];

  // Function evaluation
  for (let i = 0; i < 2; i++) {
    const a = rand(2, 5);
    const b = rand(1, 6);
    const x = rand(1, 5);
    questions.push({
      q: `If f(x) = ${a}x + ${b}, find f(${x})`,
      correct: a * x + b,
      type: "value",
    });
  }

  // Inverse function
  const a2 = rand(2, 6);
  const b2 = rand(1, 5);
  const y = rand(5, 12);
  questions.push({
    q: `If f(x) = ${a2}x + ${b2}, find f⁻¹(${y})`,
    correct: (y - b2) / a2,
    type: "value",
  });

  // Arithmetic sequence
  const start = rand(1, 5);
  const diff = rand(2, 5);
  const n = rand(3, 6);
  questions.push({
    q: `Find the ${n}th term of the sequence starting at ${start} with difference ${diff}`,
    correct: start + (n - 1) * diff,
    type: "value",
  });

  return questions;
}

// =======================
// Algebra 5 (Pre-Calc)
// =======================
export function generateAlgebra5Questions() {
  const questions = [];

  // Function transformation
  for (let i = 0; i < 2; i++) {
    const a = rand(2, 5);
    const x = rand(1, 4);
    questions.push({
      q: `If f(x) = x², find f(${a}x) when x = ${x}`,
      correct: Math.pow(a * x, 2),
      type: "value",
    });
  }

  // Quadratic evaluation
  const x2 = rand(1, 4);
  questions.push({
    q: `Evaluate: x² - 4x + 4 when x = ${x2}`,
    correct: x2 * x2 - 4 * x2 + 4,
    type: "value",
  });

  // Modeling
  const rate = rand(3, 7);
  const time = rand(2, 6);
  questions.push({
    q: `A car travels at ${rate} km/h for ${time} hours. How far does it go?`,
    correct: rate * time,
    type: "value",
  });

  return questions;
}
