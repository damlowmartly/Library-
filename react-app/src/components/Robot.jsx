import { useEffect } from "react";

export default function Robot() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const pupils = document.querySelectorAll(".pupil");
      pupils.forEach((pupil) => {
        const eye = pupil.parentElement;
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);

        const maxDistance = 8;
        const distance = Math.min(
          maxDistance,
          Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 20,
        );

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-36 h-36 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
      <div className="flex gap-7">
        <div className="w-10 h-7 bg-white border-4 border-gray-800 rounded overflow-hidden relative">
          <div className="pupil w-3 h-3 bg-gray-800 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"></div>
        </div>
        <div className="w-10 h-7 bg-white border-4 border-gray-800 rounded overflow-hidden relative">
          <div className="pupil w-3 h-3 bg-gray-800 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"></div>
        </div>
      </div>
    </div>
  );
}
