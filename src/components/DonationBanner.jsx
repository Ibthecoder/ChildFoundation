import React from "react";
import { aboutImg6 } from "../assets/images/image";

const DonationBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image centered with fixed attachment */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${aboutImg6})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center", // ✅ Center the image
        }}
      ></div>

      {/* Optional: Add back the dark overlay if needed for readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 py-24 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-4xl">
          The Smallest Act of Kindness is Worth More Than the Grandest Intention
        </h1>

        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationBanner;
