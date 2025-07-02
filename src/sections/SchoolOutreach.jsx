import { motion } from "framer-motion";
import {
  aboutaImg,
  aboutaImg2,
  aboutaImg3,
  aboutaImg4,
  schoolImg,
  schoolimg2,
  schoolimg3,
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
      <br />
      <br />
      <br />

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
                    className="relative h-48 rounded-xl overflow-hidden shadow-md mt-8"
                  >
                    <img
                      src="/school-talk-4.jpg"
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

////////////
// import { motion } from "framer-motion";
// import { FiBook, FiUsers, FiCalendar, FiBarChart2 } from "react-icons/fi";

// const SchoolOutreach = () => {
//   const stats = [
//     {
//       value: "50+",
//       label: "Schools Reached",
//       icon: <FiBook className="text-3xl" />,
//     },
//     {
//       value: "5,000+",
//       label: "Students Educated",
//       icon: <FiUsers className="text-3xl" />,
//     },
//     {
//       value: "85%",
//       label: "Awareness Increase",
//       icon: <FiBarChart2 className="text-3xl" />,
//     },
//     {
//       value: "2020",
//       label: "Since",
//       icon: <FiCalendar className="text-3xl" />,
//     },
//   ];

//   const programFeatures = [
//     {
//       title: "Interactive Workshops",
//       description:
//         "Engaging sessions using multimedia and real-life scenarios to educate about early pregnancy risks.",
//       icon: "🎭",
//     },
//     {
//       title: "Peer Education",
//       description:
//         "Training student ambassadors to continue the conversation beyond our visits.",
//       icon: "👥",
//     },
//     {
//       title: "Parent Engagement",
//       description:
//         "Special sessions helping parents approach these sensitive topics effectively.",
//       icon: "👪",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Animated Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="text-pink-600">School Outreach</span> Program
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Educating young minds about responsible choices and the realities of
//             early pregnancy
//           </p>
//         </motion.div>

//         {/* Interactive Stats Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-all"
//             >
//               <div className="text-pink-500 mb-3 flex justify-center">
//                 {stat.icon}
//               </div>
//               <div className="text-3xl font-bold text-gray-900 mb-1">
//                 {stat.value}
//               </div>
//               <div className="text-gray-600">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Program Features with Floating Animation */}
//         <div className="grid md:grid-cols-3 gap-8 mb-20">
//           {programFeatures.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="relative"
//             >
//               <div className="bg-white p-8 rounded-2xl shadow-sm h-full border border-gray-100 hover:border-pink-200 transition-all">
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-2xl font-bold mb-3 text-gray-900">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//               {/* Floating dots decoration */}
//               <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-pink-400 opacity-20"></div>
//               <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-purple-400 opacity-20"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA with Animated Border */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <div className="inline-block relative group">
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
//             <button className="relative px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
//               Request a School Visit
//             </button>
//           </div>
//           <p className="mt-4 text-gray-500">
//             Available for high schools nationwide
//           </p>
//         </motion.div>
//       </div>

//       {/* Floating decorative elements */}
//       <div className="hidden lg:block">
//         <motion.div
//           animate={{
//             y: [0, -15, 0],
//             rotate: [0, 5, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute left-10 top-1/4 w-8 h-8 rounded-full bg-pink-300 opacity-20"
//         ></motion.div>
//         <motion.div
//           animate={{
//             y: [0, 20, 0],
//             x: [0, -10, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//           className="absolute right-20 bottom-1/3 w-12 h-12 rounded-full bg-purple-300 opacity-20"
//         ></motion.div>
//       </div>
//     </section>
//   );
// };

// export default SchoolOutreach;

/////////////

// import { Hero } from "../assets/images/image";
// const SchoolOutreach = () => {
//   return (
//     <>
//       <section>
//         <div className="relative w-full h-[80vh] overflow-hidden">
//           <img
//             src={Hero}
//             alt="Young mother with child"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50"></div>

//           <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center text-white">
//             <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-snug">
//               <span className="block">Welcome To Young Mother</span>
//               <span className="block text-4xl md:text-6xl font-semibold">
//                 &
//               </span>
//               <span className="block text-pink-300">
//                 Child Haven Foundation
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
//               Empowering young mothers, preventing unwanted pregnancies, and
//               building brighter futures through education, support, and
//               faith-based guidance.
//             </p>
//           </div>

//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <svg
//               className="w-8 h-8 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               ></path>
//             </svg>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SchoolOutreach;
