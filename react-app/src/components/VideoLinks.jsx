export default function VideoLinks({ videos }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Recommended Videos
      </h2>
      <div className="flex flex-col gap-3">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition"
          >
            {video.title}
          </a>
        ))}
      </div>
    </section>
  );
}
