import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Quiz from "../components/Quiz";
import VideoLinks from "../components/VideoLinks";

//import images
import algebra1Img from "../assets/algebra1.jpg";
import algebra2Img from "../assets/algebra2.jpg";
import algebra3Img from "../assets/intermediateAlgebra.png";
import algebra4Img from "../assets/advancedAlgebra.png";

// Import your algebra quiz generators here
import {
  generateAlgebra1Questions,
  generateAlgebra2Questions,
  generateAlgebra3Questions,
  generateAlgebra4Questions,
  generateAlgebra5Questions,
} from "../utils/algebraQuizzes";

export default function Algebra() {
  const topicsData = {
    algebra1: {
      title: "Algebra 1",
      image: algebra1Img,
      why: "Algebra 1 is the foundation of all higher mathematics. Learn variables, equations, and functions.",
      explanation:
        "Work with linear equations, solve for unknowns, understand functions, and graph equations.",
      quizGenerator: generateAlgebra1Questions,
      videos: [
        {
          title: "📺 Introduction to Algebra 1",
          url: "https://www.youtube.com/watch?v=MHeirBPOI6w",
        },
        {
          title: "📺 Solving Linear Equations",
          url: "https://www.youtube.com/watch?v=7DPWeBszNSM",
        },
        {
          title: "📺 Graphing Functions",
          url: "https://www.youtube.com/watch?v=kvU9sOzT2mk",
        },
      ],
    },
    algebra2: {
      title: "Algebra 2",
      image: algebra2Img,
      why: "Algebra 2 builds on Algebra 1 and prepares you for advanced math like calculus and statistics.",
      explanation:
        "Learn quadratic equations, polynomials, exponential and logarithmic functions, and systems of equations.",
      quizGenerator: generateAlgebra2Questions,
      videos: [
        {
          title: "📺 Introduction to Algebra 2",
          url: "https://www.youtube.com/watch?v=3XZm3vZ9W4Y",
        },
        {
          title: "📺 Quadratic Functions Explained",
          url: "https://www.youtube.com/watch?v=IlNAJl36-10",
        },
        {
          title: "📺 Exponentials & Logarithms",
          url: "https://www.youtube.com/watch?v=cEvgcoyZvB4",
        },
      ],
    },
    algebra3: {
      title: "Intermediate Algebra",
      image: algebra3Img,
      why: "Intermediate Algebra strengthens problem-solving skills and bridges the gap to college math.",
      explanation:
        "Focus on rational expressions, radical equations, complex numbers, and advanced factoring techniques.",
      quizGenerator: generateAlgebra3Questions,
      videos: [
        {
          title: "📺 Rational Expressions",
          url: "https://www.youtube.com/watch?v=8JZq7N0rjME",
        },
        {
          title: "📺 Radical & Rational Equations",
          url: "https://www.youtube.com/watch?v=5pZ0k6XbZyE",
        },
        {
          title: "📺 Complex Numbers",
          url: "https://www.youtube.com/watch?v=ysVcAYo7UPI",
        },
      ],
    },
    algebra4: {
      title: "Advanced Algebra",
      image: algebra4Img,
      why: "Advanced Algebra prepares you for calculus and higher-level mathematical reasoning.",
      explanation:
        "Study polynomial behavior, function composition, inverse functions, sequences, and series.",
      quizGenerator: generateAlgebra4Questions,
      videos: [
        {
          title: "📺 Polynomial Functions",
          url: "https://www.youtube.com/watch?v=O8jKp3L6d8I",
        },
        {
          title: "📺 Inverse & Composite Functions",
          url: "https://www.youtube.com/watch?v=8cJ6H9dEw5M",
        },
        {
          title: "📺 Sequences and Series",
          url: "https://www.youtube.com/watch?v=6Flj5f_5j1M",
        },
      ],
    },
    algebra5: {
      title: "Pre-Calculus Algebra",
      image:
        "https://via.placeholder.com/600x400?text=Pre-Calculus+Algebra+Demo",
      why: "Pre-Calculus Algebra gives you the tools needed to succeed in calculus and STEM fields.",
      explanation:
        "Explore advanced functions, transformations, trigonometric foundations, and mathematical modeling.",
      quizGenerator: generateAlgebra5Questions,
      videos: [
        {
          title: "📺 Pre-Calculus Overview",
          url: "https://www.youtube.com/watch?v=HfACrKJ_Y2w",
        },
        {
          title: "📺 Function Transformations",
          url: "https://www.youtube.com/watch?v=0E5p5l6O7tk",
        },
        {
          title: "📺 Algebra & Trigonometry Basics",
          url: "https://www.youtube.com/watch?v=7vKjWk2Y4Tk",
        },
      ],
    },
  };

  const topics = Object.keys(topicsData).map((key) => ({
    key,
    title: topicsData[key].title,
  }));

  const [currentTopic, setCurrentTopic] = useState("algebra1");
  const topic = topicsData[currentTopic];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="flex">
        <Sidebar
          topics={topics}
          currentTopic={currentTopic}
          setCurrentTopic={setCurrentTopic}
        />

        <main className="flex-1 p-8 space-y-8">
          <h1 className="text-3xl font-bold border-b-4 border-blue-500 pb-2">
            {topic.title}
          </h1>

          <section>
            <img
              src={topic.image}
              alt={topic.title + " Demo"}
              className="rounded-lg border border-gray-300 w-full max-w-2xl"
            />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Why Learn This?</h2>
            <p>{topic.why}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Explanation</h2>
            <p>{topic.explanation}</p>
          </section>

          {/* Quiz Generator */}

          <Quiz quizGenerator={topic.quizGenerator} />

          <VideoLinks videos={topic.videos} />
        </main>
      </div>
    </div>
  );
}
