import { aboutaImg, Hero } from "../assets/images/image";
import React from "react";

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
            {/* <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Welcome to Young Mother  & Child Haven Foundation
            </h1> */}
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-snug">
              <span className="block">Welcome To Young Mother</span>
              <span className="block text-4xl md:text-6xl  font-semibold">
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
        </div>
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
      <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
              <div class="group relative">
                <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg"
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
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg"
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
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg"
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
    </>
  );
};
export default Home;
