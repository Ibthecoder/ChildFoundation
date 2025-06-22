import { Hero } from "../assets/images/image";
const Programs = () => {
  return (
    <>
      {/* Hero-Page--start */}
      <section>
        <div className="relative w-full h-[80vh] overflow-hidden">
          <img
            src={Hero}
            alt="Young mother with child"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-snug">
              <span className="block">Welcome To Young Mother</span>
              <span className="block text-4xl md:text-6xl font-semibold">
                &
              </span>
              <span className="block text-pink-300">
                Child Haven Foundation
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
              Empowering young mothers, preventing unwanted pregnancies, and
              building brighter futures through education, support, and
              faith-based guidance.
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};
export default Programs;
