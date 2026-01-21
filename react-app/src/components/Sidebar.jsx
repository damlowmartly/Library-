export default function Sidebar({ topics, currentTopic, setCurrentTopic }) {
  return (
    <aside className="w-64 bg-gray-100 p-6 border-r border-gray-300">
      <h3 className="text-gray-800 font-semibold mb-4">Topics</h3>
      <ul className="space-y-2">
        {topics.map((topic) => (
          <li
            key={topic.key}
            onClick={() => setCurrentTopic(topic.key)}
            className={`cursor-pointer rounded px-3 py-2 transition ${
              currentTopic === topic.key
                ? "bg-blue-500 text-white font-bold"
                : "hover:bg-gray-200"
            }`}
          >
            {topic.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
