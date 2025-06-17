import { Hero } from "../assets/images/image";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen md:h-[90vh] overflow-hidden">
      {/* Hero Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={Hero}
          alt="Happy mother and child"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fadeIn">
          {/* Organization Name with Decorative Elements */}
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="block text-white">Welcome To Young Mother</span>
              <span className="inline-block mx-4 text-5xl md:text-7xl text-pink-300 transform rotate-12">
                ♥
              </span>
              <span className="block text-pink-300 bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500">
                Child Haven Foundation
              </span>
            </h1>
            {/* Decorative Divider */}
            <div className="hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-pink-400 rounded-full"></div>
          </div>

          {/* Tagline with Animation */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed md:leading-loose">
            A place of hope, a light so true,
            <br className="hidden sm:inline" />
            For mothers strong and children too.
            <br className="hidden sm:inline" />
            With love and grace, we stand and guide,
            <br className="hidden sm:inline" />
            Through every storm, we're by your side.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 md:pt-10">
            <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/30">
              Donate Now
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-full transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
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

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
