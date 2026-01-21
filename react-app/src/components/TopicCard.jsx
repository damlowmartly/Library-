export default function TopicCard({
  title,
  description,
  href,
  color,
  onNavigate,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigate && title.toLowerCase() === "algebra") {
      onNavigate("algebra");
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 ${color} hover:text-white cursor-pointer`}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 hover:text-white text-sm md:text-base">
        {description}
      </p>
    </a>
  );
}
