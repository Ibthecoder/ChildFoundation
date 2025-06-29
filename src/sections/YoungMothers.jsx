import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const YoungMothers = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-white text-gray-900 overflow-hidden" ref={ref}>
      {/* Hero with parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100"
          style={{ y: yBg, opacity: opacityBg }}
        />

        <div className="relative z-10 max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              Young Mother Haven
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
              Redefining motherhood through{" "}
              <span className="font-semibold">community</span>,{" "}
              <span className="font-semibold">education</span>, and{" "}
              <span className="font-semibold">empowerment</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full"
              >
                Join Our Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-900 rounded-full"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </section>

      {/* Floating cards section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Pillars of Support
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Faith-Based Guidance",
                desc: "Spiritual foundation for holistic growth",
                color: "bg-pink-100",
                delay: 0.1,
              },
              {
                title: "Education First",
                desc: "Academic support and career preparation",
                color: "bg-purple-100",
                delay: 0.2,
              },
              {
                title: "Community Network",
                desc: "Lifelong connections and mentorship",
                color: "bg-blue-100",
                delay: 0.3,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: item.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className={`${item.color} p-8 rounded-3xl aspect-square flex flex-col justify-center`}
              >
                <div className="text-5xl mb-6">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal transition section */}
      <section className="relative py-32 bg-gradient-to-br from-pink-50 to-purple-50 skew-y-3 -mt-20 -mb-20">
        <div className="max-w-6xl mx-auto px-6 skew-y-3">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Breaking Cycles, Building Futures
              </h2>
              <p className="text-xl mb-8">
                We address the root causes of generational poverty by empowering
                young mothers with the tools they need to succeed as parents and
                professionals.
              </p>
              <button className="px-8 py-3 bg-black text-white rounded-full">
                Our Methodology
              </button>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl aspect-square flex items-center justify-center"
                >
                  <div className="text-4xl">📊</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive stats */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            By The Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 200, suffix: "+", label: "Mothers Empowered" },
              { num: 95, suffix: "%", label: "Graduation Rate" },
              { num: 300, suffix: "+", label: "Children Supported" },
              { num: 10, suffix: "x", label: "ROI for Donors" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                  {stat.num}
                  <span className="text-gray-900">{stat.suffix}</span>
                </div>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated call-to-action */}
      {/* <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Lives?
          </motion.h2>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <button className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-lg font-medium hover:shadow-lg transition-all">
              Get Involved Today
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <p className="text-gray-400">
              Every contribution makes a difference
            </p>
          </motion.div>
        </div>
      </section> */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-100 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Lives?
          </motion.h2>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <button className="px-10 py-4 bg-white text-purple-600 rounded-full text-lg font-medium hover:bg-gray-100 hover:shadow-lg transition-all">
              Get Involved Today
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <p className="text-pink-100">
              Every contribution makes a difference
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default YoungMothers;

// import { motion } from "framer-motion";
// // import { TestimonialCarousel } from "../components"; // You'll need to create this

// const YoungMothers = () => {
//   return (
//     <div className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50">
//         <div className="max-w-4xl mx-auto px-6 py-20 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold mb-6 text-purple-900"
//           >
//             Young Mothers Support
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-lg md:text-xl text-gray-600 mb-8"
//           >
//             Empowering young mothers with faith, education, and community
//             support
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
//               Join Our Program
//             </button>
//             <button className="px-8 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition">
//               Request Help
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats/Impact Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {[
//               { number: "200+", label: "Mothers Helped" },
//               { number: "95%", label: "Graduation Rate" },
//               { number: "300+", label: "Children Supported" },
//               { number: "24/7", label: "Support Available" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="p-6 bg-pink-50 rounded-lg"
//               >
//                 <p className="text-4xl font-bold text-purple-800 mb-2">
//                   {stat.number}
//                 </p>
//                 <p className="text-gray-600">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Programs Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Parenting Classes",
//                 desc: "Weekly workshops on child development, nutrition, and positive discipline.",
//                 icon: "👶",
//               },
//               {
//                 title: "Education Support",
//                 desc: "GED preparation, college counseling, and scholarship assistance.",
//                 icon: "📚",
//               },
//               {
//                 title: "Spiritual Guidance",
//                 desc: "Faith-based counseling and Bible study groups for spiritual growth.",
//                 icon: "✝️",
//               },
//             ].map((program, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
//               >
//                 <div className="text-4xl mb-4">{program.icon}</div>
//                 <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
//                 <p className="text-gray-600">{program.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Stories of Hope
//           </h2>
//           {/* <TestimonialCarousel /> */}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-purple-600 text-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-6">
//             Ready to Begin Your Journey?
//           </h2>
//           <p className="text-xl mb-8">
//             Whether you need support or want to support others, we're here to
//             help.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition font-medium">
//               Get Help Now
//             </button>
//             <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-purple-700 transition">
//               Donate to Support
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default YoungMothers;
