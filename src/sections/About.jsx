import React from "react";
import aboutImg6 from "../assets/images/aboutImg6.jpg"; // Replace with actual image file

// Team images
import damilolaTaiwo from "../assets/images/damilola-taiwo.jpg";
import ibukunTaiwo from "../assets/images/ibukunoluwa-taiwo.jpg";
import damilolaKarounwi from "../assets/images/damilola-karounwi.jpg";
import tundeRhema from "../assets/images/tunde-rhema.jpg";
import oluwatoyinFalaiye from "../assets/images/oluwatoyin-falaiye.jpg";
import nwamakaelkanah from "../assets/images/nwamaka-elkanah.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Damilola Taiwo",
      title: "Convener, Young Mother and Child Haven Foundation",
      image: damilolaTaiwo,
    },
    {
      name: "Ibukunoluwa Taiwo",
      title: "Convener, Young Mother and Child Haven Foundation",
      image: ibukunTaiwo,
    },
    {
      name: "Pastor Damilola Karounwi",
      title:
        "President of MMI & Convener, Young Mother and Child Haven Foundation",
      image: damilolaKarounwi,
    },
    {
      name: "Tunde Rhema",
      title:
        "Leadership Expert & Convener, Young Mother and Child Haven Foundation",
      image: tundeRhema,
    },
    {
      name: "Oluwatoyin Falaiye",
      title:
        "Lawyer and Advocate & Convener, Young Mother and Child Haven Foundation",
      image: oluwatoyinFalaiye,
    },
    {
      name: "Nwamaka Elkanah",
      title: "I'm a Ghost Writer and Lead Copywriter at LightLines(a copywriting and storytelling agency).",
      image: nwamakaelkanah,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-10 lg:px-8 bg-white">
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
        <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Empowering <span className="text-pink-600">Young Mothers</span>,{" "}
            <br className="hidden sm:inline" />
            Nurturing <span className="text-blue-600">Bright Futures</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            At Young Mother & Child Haven Foundation, we provide faith-based
            support, education, and community to help young mothers and children
            thrive against all odds. Every story of hope begins here.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#programs"
              className="rounded-md bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-pink-500"
            >
              Explore Our Programs
            </a>
            <a
              href="#mission"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Our Mission →
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section
        id="about-content"
        className="py-16 bg-white sm:py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-pink-600 uppercase bg-pink-100 rounded-full">
              Our Foundation
            </span>
            <h1 className="text-5xl font-bold text-gray-900">
              About{" "}
              <span className="text-pink-500">
                Young Mother & Child Haven
              </span>
            </h1>
            <div className="mt-6 h-1.5 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImg6}
                  alt="Foundation work"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-pink-600">
                  Young Mother & Child Haven Foundation
                </strong>{" "}
                is a faith-driven non-governmental organization committed to
                nurturing, empowering, and educating young mothers, girls, and
                children.
              </p>

              <div className="my-8 p-6 bg-pink-50 border-l-4 border-pink-500 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To transform lives through spiritual support, emotional
                  healing, life skills development, and educational outreach.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Through school outreaches, community programs, mentorship, and
                faith-based teachings, we address real issues affecting girls
                and young mothers.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-8">
                "At Young Mother & Child Haven Foundation, we see potential
                where others see problems. We journey with every girl and young
                mother reminding them they are not alone, they are loved, and
                their story can be beautiful."
              </blockquote>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  "Faith-Based Support",
                  "Holistic Development",
                  "Community Building",
                  "Education Focus",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <svg
                      className="h-6 w-6 text-pink-500 mr-2"
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
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg">
                  Learn About Our Programs
                </button>
                <button className="px-6 py-3 border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium rounded-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-pink-50" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-pink-600">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate and dedicated individuals leading our mission to uplift and empower young mothers and children.
            </p>
            <div className="mt-6 h-1.5 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full border-4 border-pink-200 shadow-sm"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
