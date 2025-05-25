import { motion } from "framer-motion";
import {
  aboutaImg,
  aboutaImg2,
  aboutaImg3,
  aboutaImg4,
  schoolImg,
  schoolimg2,
  schoolimg3,
  schoolImg4,
} from "../assets/images/image";
import {
  FiBook,
  FiUsers,
  FiCalendar,
  FiBarChart2,
  FiArrowRight,
  FiHeart,
} from "react-icons/fi";
import SchoolOutreachSection from "./SchoolOutreachSection";

const SchoolOutreach = () => {
  // Data for components

  const programFeatures = [
    {
      title: "Interactive Workshops",
      description:
        "Engaging sessions using multimedia and real-life scenarios.",
      icon: "🎭",
      image: aboutaImg4, // Replace with your image path
    },
    {
      title: "Peer Education",
      description: "Training student ambassadors to continue the conversation.",
      icon: "👥",
      image: schoolImg, // Replace with your image path
    },
    {
      title: "Parent Engagement",
      description: "Helping parents approach sensitive topics effectively.",
      icon: "👪",
      image: schoolimg2, // Replace with your image path
    },
  ];

  return (
    <div className="bg-white">
      {/* 3D Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Floating 3D spheres */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-pink-200 opacity-20 blur-xl"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-200 opacity-20 blur-xl"
        />

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Preventing</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Early Pregnancy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Empowering youth with knowledge through our nationwide school
              outreach program
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
            >
              <FiHeart className="text-xl" />
              Support Our Mission
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all"
            >
              <FiArrowRight className="text-xl" />
              See Program Details
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-600 mb-2 text-sm">Scroll to explore</p>
            <svg className="w-6 h-10">
              <motion.path
                d="M3 3 L15 10 L3 17"
                stroke="#9CA3AF"
                strokeWidth="2"
                fill="none"
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* School Outreach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header with image collage */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-pink-600">School Outreach</span> Program
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We visit schools nationwide to educate students about the
                  realities and consequences of early pregnancy through
                  engaging, age-appropriate programs.
                </p>
                <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2">
                  Request a Visit <FiArrowRight />
                </button>
              </div>

              {/* Image collage - replace with your actual images */}
              <div className="md:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative h-48 rounded-xl overflow-hidden shadow-md"
                  >
                    <img
                      src={aboutaImg}
                      alt="Educator speaking to students"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative h-48 rounded-xl overflow-hidden shadow-md mt-8"
                  >
                    <img
                      src={aboutaImg3}
                      alt="Group discussion with students"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative h-48 rounded-xl overflow-hidden shadow-md"
                  >
                    <img
                      src={schoolimg3}
                      alt="Interactive workshop"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative h-60 rounded-xl overflow-hidden shadow-md mt-8"
                  >
                    <img
                      src={schoolImg4}
                      alt="Students engaged in activity"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Program highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/*  */}
      <SchoolOutreachSection />

      {/*  */}
    </div>
  );
};

export default SchoolOutreach;
