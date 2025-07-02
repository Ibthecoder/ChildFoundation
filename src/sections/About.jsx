import React from "react";
import { aboutImg6 } from "../assets/images/image";
import AboutUs from "./AboutUs";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-10 lg:px-8 bg-white">
        {" "}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40">
          {" "}
          <div className="hidden sm:mb-6 sm:flex sm:justify-center">
            {" "}
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Celebrating 10+ years of service.{" "}
              <a
                href="#our-story"
                className="font-semibold text-pink-600 whitespace-nowrap"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read our story <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          {/* Main Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering <span className="text-pink-600">Young Mothers</span>,{" "}
              <br className="hidden sm:inline" />
              Nurturing <span className="text-blue-600">Bright Futures</span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {" "}
              At Young Mother & Child Haven Foundation, we provide faith-based
              support, education, and community to help young mothers and
              children thrive against all odds. Every story of hope begins here.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              {" "}
              <a
                href="#programs"
                className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Explore Our Programs
              </a>
              <a
                href="#mission"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Our Mission <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-25rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* About Section (your original content) */}
      <section id="about-content" className="py-16 bg-white sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with decorative elements */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-pink-600 uppercase bg-pink-100 rounded-full">
              Our Foundation
            </span>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              About{" "}
              <span className="text-pink-500">Young Mother & Child Haven</span>
            </h1>
            <div className="mt-6 h-1.5 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-3">
                <img
                  src={aboutImg6}
                  alt="Young mothers and children at the foundation"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-pink-600">10+</p>
                  <p className="text-sm font-medium text-gray-600">
                    Years of Service
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="text-lg leading-relaxed">
                  <strong className="text-pink-600">
                    Young Mother & Child Haven Foundation
                  </strong>{" "}
                  is a faith-driven non-governmental organization committed to
                  nurturing, empowering, and educating young mothers, girls, and
                  children. We exist to offer hope, healing, and holistic
                  development to those facing the challenges of early
                  motherhood, unwanted pregnancies, and lack of guidance.
                </p>

                <div className="my-8 p-6 bg-pink-50 border-l-4 border-pink-500 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Our Mission
                  </h3>
                  <p>
                    To transform lives through spiritual support, emotional
                    healing, life skills development, and educational outreach.
                    We believe every young mother and child deserves a safe
                    space to grow, thrive, and embrace a purposeful future.
                  </p>
                </div>

                <p className="text-lg leading-relaxed">
                  Through school outreaches, community programs, mentorship, and
                  faith-based teachings, we address real issues affecting girls
                  and young mothers from sexual education and prevention of
                  teenage pregnancies to mental health support and vocational
                  training. Our goal is to break cycles of shame, abandonment,
                  and ignorance by building a community of hope, love, and
                  restoration.
                </p>

                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-8">
                  "At Young Mother & Child Haven Foundation, we see potential
                  where others see problems. We journey with every girl and
                  young mother reminding them they are not alone, they are
                  loved, and their story can be beautiful."
                </blockquote>
              </div>

              {/* Values List */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-pink-500 mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Faith-Based Support</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-pink-500 mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Holistic Development</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-pink-500 mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Community Building</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-pink-500 mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Education Focus</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105">
                  Learn About Our Programs
                </button>
                <button className="px-6 py-3 border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium rounded-lg transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
