import React, { useEffect, useState } from "react";
import {
  aboutaImg,
  Hero,
  AboutImg11,
  aboutaImg2,
  aboutaImg3,
  aboutaImg4,
  HeroImg1,
} from "../assets/images/image";
import AboutUs from "./AboutUs";
import ProgramUs from "./ProgramUs";
import GetInvolved from "./GetInvolved";
import NavbarCheck from "./NavbarCheck";
import { motion } from "framer-motion";
import PosterImg from "../assets/images/poster.jpg"; // Make sure this exists in the folder

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 800); // delay to avoid instant load

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-transparent">
          <div className="bg-white rounded-lg max-w-md w-full relative shadow-lg border border-pink-300">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            {/* Poster Image */}
            <img
              src={PosterImg}
              alt="Girl Child Day Event"
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Modal Content */}
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-pink-600 mb-2">
                She Carries Light
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Join us on <strong>October 11, 2025</strong> at{" "}
                <strong>Ikotun, Alimosho LGA, Lagos State</strong> <br />
                for our Walk/Sensitization Event in celebration of{" "}
                <strong>International Girl Child Day</strong>.
              </p>
              <a
                href="https://forms.gle/eRJuqwhZSKKAwg3u6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded"
              >
                Register Now (Free)
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
          {/* Left content */}
          <div className="lg:pr-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight text-center"
            >
              <span className="block">Welcome to</span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="block mt-2 text-pink-600 hover:text-pink-400 transition-colors duration-500"
              >
                Young Mother & Child Haven Foundation
              </motion.span>
            </motion.h1>

            <p className="mt-6 text-base font-normal leading-7 text-gray-900">
              At Young Mother & Child Haven Foundation, we believe every young
              girl and mother deserves to feel safe, supported, and empowered.
              We are a faith-driven, purpose-led non-profit committed to
              nurturing the spirit, soul, and potential of young mothers and
              children across Nigeria and beyond.
            </p>
          </div>

          {/* Right image */}
          <div className="pb-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:pb-0">
            <div className="flex items-center justify-center h-full px-4">
              <img
                src={HeroImg1}
                alt="Hero Illustration"
                className="w-full max-w-md lg:max-w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More sections... */}
      <AboutUs />
      <ProgramUs />
      <GetInvolved />
    </>
  );
};

export default Home;
