import {
  aboutaImg,
  Hero,
  aboutaImg2,
  aboutaImg3,
  aboutaImg4,
} from "../assets/images/image";
import React from "react";
import HeroSection from "./HeroSection";
import DonationBanner from "../components/DonationBanner";

const Home = () => {
  return (
    <>
      <section>
        <div className="relative w-full h-[80vh] overflow-hidden">
          {/* Hero Image */}
          <img src={Hero} alt="Hero" className="w-full h-full object-cover" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Content */}
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
              A place of hope, a light so true, For mothers strong and children
              too. With love and grace, we stand and guide, Through every storm,
              we're by your side. Together we heal, together we grow.
            </p>
          </div>

          {/* Scrolling Arrow Indicator */}
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

        {/* Custom Bounce Animation */}
        <style jsx>{`
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

      <br />
      <br />
      {/*  */}
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
              <p className="text-xs font-semibold tracking-widest text-white uppercase">
                What we are doing
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              We Help Thousands of Children to Get Their Education
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg sm:mt-6">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20 lg:gap-12">
            {/* Card 1 */}
            <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2">
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-center text-black">
                  Start Donating
                </h3>
                <p className="mt-4 text-base text-center text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <button className="w-full px-4 py-2 mt-6 text-sm font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Donate Now
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2">
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-purple-100 rounded-full">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-center text-black">
                  Join Our Community
                </h3>
                <p className="mt-4 text-base text-center text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <button className="w-full px-4 py-2 mt-6 text-sm font-medium text-white transition-colors duration-300 bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Join Now
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2">
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
                  <svg
                    className="w-8 h-8 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-center text-black">
                  Be A Volunteer
                </h3>
                <p className="mt-4 text-base text-center text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <button className="w-full px-4 py-2 mt-6 text-sm font-medium text-white transition-colors duration-300 bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Volunteer Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <br />
      <br />

      {/*  */}
      <section className="py-12  sm:py-16 lg:py-24">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
            {/* Text Content - Left Side */}
            <div className="order-2 md:order-1">
              <div className="inline-flex px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                <p className="text-xs font-semibold tracking-widest text-white uppercase">
                  About our foundation
                </p>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
                We Are On A Mission To Help The Helpless
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  About Us
                </button>
                <button className="px-8 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Our Mission
                </button>
              </div>
            </div>

            {/* Image Content - Right Side */}
            <div className="relative order-1 md:order-2">
              <div className="relative w-full overflow-hidden rounded-xl shadow-xl aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4">
                <img
                  className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                  src={aboutaImg}
                  alt="Volunteer helping others"
                />
              </div>

              <div className="absolute hidden w-2/5 overflow-hidden rounded-lg shadow-lg -bottom-16 -left-8 sm:block">
                {/* <img
                  className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                  src={aboutaImg1}
                  alt="Happy beneficiary"
                /> */}
                <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-20"></div>
              </div>

              <div className="absolute hidden p-4 bg-white rounded-lg shadow-lg -top-8 -right-8 sm:block">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <p className="mt-2 text-sm font-medium text-center text-gray-900">
                  25+ Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      {/*  */}
      <div class="">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
              <div class="group relative">
                <img
                  src={aboutaImg2}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Desk and Office
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Work from home accessories
                </p>
              </div>
              <div class="group relative">
                <img
                  src={aboutaImg3}
                  alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                  class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Self-Improvement
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Journals and note-taking
                </p>
              </div>
              <div class="group relative">
                <img
                  src={aboutaImg4}
                  alt="Collection of four insulated travel bottles on wooden shelf."
                  class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Travel
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Daily commute essentials
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <section className="py-16 bg-white sm:py-20 lg:py-28">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Enhanced Heading Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-pink-600 uppercase bg-pink-100 rounded-full">
              Our Services
            </span>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              We Serve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
                For People
              </span>
            </h1>
            <div className="max-w-2xl mx-auto mt-6 text-xl text-gray-600">
              Empowering communities through essential services that make a real
              difference in people's lives.
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            {/* Service 1 - Pure Food & Water */}
            <div className="group transition-all duration-300 hover:-translate-y-2">
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-blue-100 transition-all duration-300 group-hover:text-blue-200"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                <svg
                  className="absolute text-blue-600 w-9 h-9 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                Pure Food & Water
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Providing access to clean, nutritious food and safe drinking
                water for communities in need.
              </p>
            </div>

            {/* Service 2 - Health & Medicine */}
            <div className="group transition-all duration-300 hover:-translate-y-2">
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-orange-100 transition-all duration-300 group-hover:text-orange-200"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                </svg>
                <svg
                  className="absolute text-orange-600 w-9 h-9 transition-all duration-300 group-hover:text-orange-700 group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900 group-hover:text-orange-600">
                Health & Medicine
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Delivering essential medical care and health education to
                underserved populations.
              </p>
            </div>

            {/* Service 3 - Education */}
            <div className="group transition-all duration-300 hover:-translate-y-2">
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-green-100 transition-all duration-300 group-hover:text-green-200"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <svg
                  className="absolute text-green-600 w-9 h-9 transition-all duration-300 group-hover:text-green-700 group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900 group-hover:text-green-600">
                Education
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Creating learning opportunities and educational resources for
                children and adults alike.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      {/* <DonationBanner /> */}
    </>
  );
};
export default Home;
