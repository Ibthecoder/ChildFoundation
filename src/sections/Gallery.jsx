import {
  aboutaImg4,
  aboutImg6,
  HeroImg1,
  AboutImg11,
  schoolImg,
  schoolimg2,
  schoolimg3,
  youngmother1,
  youngmother2,
  youngmother3,
  schoolImg4,
} from "../assets/images/image";

const Gallery = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 sm:px-6 lg:px-12 py-12">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-2 bg-gradient-to-r from-pink-400 to-fuchsia-600 text-transparent bg-clip-text">
        💖 Moments that Matter 💖
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10 italic">
        Beautiful memories, captured with love and sparkle ✨
      </p>

      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {["All", "Fun", "Friends", "School", "Events", "Inspiration"].map(
          (tag) => (
            <span
              key={tag}
              className="px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium cursor-pointer hover:bg-pink-200 transition"
            >
              #{tag}
            </span>
          ),
        )}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={aboutaImg4}
            alt="Young Mother 3"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={aboutImg6}
            alt="Young Mother 1"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={HeroImg1}
            alt="About"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={AboutImg11}
            alt="Young Mother 2"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={schoolImg}
            alt="About"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={schoolimg2}
            alt="About 1"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={schoolimg3}
            alt="School 3"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={youngmother1}
            alt="About 11"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={youngmother2}
            alt="School 1"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={youngmother3}
            alt="Hero"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={aboutaImg4}
            alt="Img14"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <img
            src={schoolImg4}
            alt="Img3"
            className="w-full h-72 object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className="bg-pink-100 text-pink-800 text-center py-6 px-4 rounded-2xl max-w-3xl mx-auto mb-12 shadow-md">
        <p className="text-xl italic font-medium">
          “She believed she could, so she did.” 🌸
        </p>
      </div>

      {/* Upload Call to Action (non-functional) */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl px-6 py-10 text-white text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-2">📸 Share Your Moment</h2>
        <p className="mb-4">
          Got a memory worth showing? Tag us on Instagram or upload it now!
        </p>
        <label
          htmlFor="imageUpload"
          className="cursor-pointer bg-white text-pink-600 font-semibold px-6 py-2 rounded-full hover:bg-pink-50 transition"
        >
          Upload Now
        </label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
        />
      </div>
    </section>
  );
};

export default Gallery;
