import { useState, useRef } from "react";

const Gallery = () => {
  const initialImages = [
    "youngmother3.jpg",
    "youngmother1.jpg",
    "aboutImg2.jpg",
    "youngmother2.jpg",
    "aboutImg.png",
    "aboutImg1.png",
    "schoolImg3.jpg",
    "AboutImg11.jpg",
    "schoolImg1.jpg",
    "Hero-img.png",
    "img14.jpg",
    "img3.jpg",
  ];

  const [galleryImages, setGalleryImages] = useState(initialImages);
  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const uploaded = Array.from(files).map((file) => URL.createObjectURL(file));

    setUploadedImages((prev) => [...uploaded, ...prev]); // prepend so new images show first
  };

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
        {["All", "Fun", "Friends", "School", "Events", "Inspiration"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium cursor-pointer hover:bg-pink-200 transition"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        {[...uploadedImages, ...galleryImages].map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-3xl bg-white shadow-md shadow-pink-100 hover:shadow-pink-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={typeof img === "string" && img.startsWith("blob") ? img : `./src/assets/images/${img}`}
              alt={`gallery-${idx}`}
              className="w-full h-72 object-cover rounded-3xl transition duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Inspirational Quote */}
      <div className="bg-pink-100 text-pink-800 text-center py-6 px-4 rounded-2xl max-w-3xl mx-auto mb-12 shadow-md">
        <p className="text-xl italic font-medium">
          “She believed she could, so she did.” 🌸
        </p>
      </div>

      {/* CTA Upload Section */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl px-6 py-10 text-white text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-2">📸 Share Your Moment</h2>
        <p className="mb-4">
          Got a memory worth showing? Tag us on Instagram or upload it now!
        </p>
        <button
          onClick={handleUploadClick}
          className="bg-white text-pink-600 font-semibold px-6 py-2 rounded-full hover:bg-pink-50 transition"
        >
          Upload Now
        </button>
        <input
          type="file"
          accept="image/*"
          multiple
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
    </section>
  );
};

export default Gallery;
