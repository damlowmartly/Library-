import Header from "./Header";
import Robot from "./Robot";
import TopicCard from "./TopicCard";

export default function Home({ onNavigate }) {
  const topics = [
    {
      title: "Algebra",
      description:
        "Master linear equations, variables, and basic algebraic concepts",
      href: "/algebra",
      hoverClass: "hover:bg-blue-500",
    },
    {
      title: "Geometry",
      description: "Explore shapes, theorems, and geometric reasoning",
      href: "/geometry",
      hoverClass: "hover:bg-green-500",
    },
    {
      title: "Calculus",
      description: "Learn derivatives, integrals, and advanced math concepts",
      href: "/calculus",
      hoverClass: "hover:bg-pink-500",
    },
    // You can add more topics here
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Hero / Welcome Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Text */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Welcome to Your Learning Library 📚
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Dive into lessons, practice problems, and quizzes across multiple
            topics. Start your journey and explore new concepts every day!
          </p>
        </div>

        {/* Right side - Robot */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Robot />
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300 mx-6 md:mx-10"></div>

      {/* Topics Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-10">
          Explore Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topics.map((topic, idx) => (
            <TopicCard
              key={idx}
              title={topic.title}
              description={topic.description}
              href={topic.href}
              color={topic.hoverClass} // for hover effect
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      {/* Optional Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-500">
        © 2026 Learning Library. All rights reserved.
      </footer>
    </div>
  );
}
