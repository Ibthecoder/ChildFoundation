import React from "react";
import { Link } from "react-router-dom";
import {
  aboutaImg2,
  aboutaImg3,
} from "../assets/images/image";

const ProgramUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span className="text-pink-600">Programs</span>
        </h2>

        {/* GONGO Program */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-600">
              Supporting Young Mothers with:
            </h3>
            <ul className="space-y-3 mb-6 text-gray-800">
              <li>• Parenting & vocational training</li>
              <li>• Child education support</li>
              <li>• Spiritual counseling</li>
            </ul>
            <Link to="/gallery">
              <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-300">
                See Photos
              </button>
            </Link>
          </div>
          <img
            src={aboutaImg2}
            alt="Young mothers group"
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* School Outreach */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={aboutaImg3}
            alt="School workshop"
            className="rounded-xl shadow-xl order-1 md:order-2"
          />
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              School Outreach
            </h3>
            <p className="text-gray-700 mb-6">
              Educating secondary school girls on:
            </p>
            <ul className="space-y-3 mb-6 text-gray-800">
              <li>• Pregnancy prevention</li>
              <li>• Self-esteem building</li>
              <li>• Career guidance</li>
            </ul>
            <Link to="/gallery">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramUs;
