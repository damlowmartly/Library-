import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Quiz from "../components/Quiz";
import VideoLinks from "../components/VideoLinks";

// Import your algebra quiz generators here
import { generateAlgebra1Questions } from "../utils/algebraQuizzes";

export default function Algebra() {
  const topicsData = {
    algebra1: {
      title: "Algebra 1",
      image: "https://via.placeholder.com/600x400?text=Algebra+1+Demo",
      why: "Algebra 1 is the foundation of all higher mathematics. Learn variables, equations, and functions.",
      explanation:
        "Work with linear equations, solve for unknowns, understand functions, and graph equations.",
      quizGenerator: generateAlgebra1Questions,
      videos: [
        {
          title: "📺 Introduction to Algebra 1",
          url: "https://www.youtube.com",
        },
        {
          title: "📺 Solving Linear Equations",
          url: "https://www.youtube.com",
        },
        { title: "📺 Graphing Functions", url: "https://www.youtube.com" },
      ],
    },
    algebra2: {
      /* similar data */
    },
    algebra3: {
      /* similar data */
    },
    algebra4: {
      /* similar data */
    },
    algebra5: {
      /* similar data */
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

          <Quiz quizGenerator={topic.quizGenerator} />

          <VideoLinks videos={topic.videos} />
        </main>
      </div>
    </div>
  );
}
