import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  FiHeart,
  FiBookOpen,
  FiUsers,
  FiArrowRight,
  FiPlay,
  FiChevronDown,
} from "react-icons/fi";
import {
  youngmother1,
  youngmother2,
  youngmother3,
} from "../assets/images/image";

const YoungMothers = () => {
  const ref = useRef();
  const [hoveredCard, setHoveredCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <div className="bg-white overflow-hidden" ref={ref}>
      {/* 🌟 CINEMATIC HERO SECTION WITH WHITE SVG PATTERN */}
      {/* 🌟 CINEMATIC HERO SECTION WITH WHITE FLORAL SVG */}
      <section
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50"
      >
        {/* Delicate White Floral SVG Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="floral-pattern"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(15)"
            >
              {/* Floral elements */}
              <path
                d="M60 20 Q70 10 80 20 T100 20 Q110 30 100 40 T100 60 Q90 70 80 60 T60 60 Q50 50 60 40 T60 20"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.9"
              />
              <path
                d="M20 60 Q10 70 20 80 T20 100 Q30 110 40 100 T60 100 Q70 90 60 80 T60 60 Q50 60 40 60 T20 60"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.9"
              />

              {/* Connecting vines */}
              <path
                d="M60 20 Q40 30 20 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.7"
                strokeDasharray="3,3"
              />
              <path
                d="M100 40 Q110 50 100 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.7"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#floral-pattern)" />
        </svg>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl px-6 text-center"
          style={{ scale: scaleText }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 font-serif"
          >
            <span className="block">Young Mother & Child</span>
            <span className="block text-pink-600">Haven Foundation</span>
          </motion.h1>

          {/* Decorative divider */}
          <svg className="w-24 h-1 mx-auto mb-8" viewBox="0 0 100 2">
            <path
              d="M0 1 Q25 3 50 1 T100 1"
              fill="none"
              stroke="#ec4899"
              strokeWidth="2"
            />
          </svg>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto italic"
          >
            <p>"A place of hope, a light so true,</p>
            <p>For mothers strong and children too."</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(236, 72, 153, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl flex items-center gap-3"
            >
              <FiHeart className="text-xl" />
              Join Our Movement
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-xl flex items-center gap-3"
            >
              <FiPlay className="text-xl" />
              Watch Our Story
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-600 mb-2 text-sm">Scroll to Explore</p>
            <svg className="w-6 h-10">
              <motion.path
                d="M3 3 L15 10 L3 17"
                stroke="#4b5563"
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

      {/* 🌟 MISSION STATEMENT WITH SVG DECORATIONS */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* SVG Wave Divider at top */}
        <svg
          className="absolute top-0 left-0 w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#8b5cf6"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#8b5cf6"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,233.88-16.45,97.39,46.57,178.13,119.7,237.11,190.74,53.47,63.24,91.61,130.17,116.69,203.45V0Z"
            fill="#8b5cf6"
          />
        </svg>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering <span className="text-pink-600">Young Mothers</span>,
              <br />
              Shaping <span className="text-purple-600">Brighter Futures</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Through faith, education, and community, we help young mothers
              rise above fear, shame, and abandonment.
            </p>
          </motion.div>

          {/* SVG Decorative Element */}
          <svg
            className="w-24 h-24 mx-auto mb-16 opacity-30"
            viewBox="0 0 100 100"
          >
            <path
              d="M20,50 Q50,20 80,50 T20,50"
              fill="none"
              stroke="#ec4899"
              strokeWidth="2"
            />
            <path
              d="M30,50 Q50,30 70,50 T30,50"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
            />
          </svg>

          {/* 3D Tilt Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pregnancy Prevention",
                desc: "School outreach & sexual education to prevent teen pregnancies.",
                icon: <FiBookOpen className="text-4xl text-pink-600" />,
                bg: "bg-gradient-to-br from-pink-50 to-pink-100",
                delay: 0.1,
              },
              {
                title: "Mother Support",
                desc: "Counseling, childcare, and vocational training.",
                icon: <FiHeart className="text-4xl text-purple-600" />,
                bg: "bg-gradient-to-br from-purple-50 to-purple-100",
                delay: 0.2,
              },
              {
                title: "Girls Empowerment",
                desc: "Workshops on health, parenting, and life skills.",
                icon: <FiUsers className="text-4xl text-blue-600" />,
                bg: "bg-gradient-to-br from-blue-50 to-blue-100",
                delay: 0.3,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${item.bg} p-8 rounded-2xl shadow-md hover:shadow-xl transition-all h-full`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  animate={{
                    scale: hoveredCard === i ? 1.1 : 1,
                    rotate: hoveredCard === i ? 5 : 0,
                  }}
                  className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-6">{item.desc}</p>
                <a
                  href="#"
                  className="text-pink-600 font-medium flex items-center gap-2"
                >
                  Learn More <FiArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SVG Wave Divider at bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-20 rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#8b5cf6"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#8b5cf6"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,233.88-16.45,97.39,46.57,178.13,119.7,237.11,190.74,53.47,63.24,91.61,130.17,116.69,203.45V0Z"
            fill="#8b5cf6"
          />
        </svg>
      </section>

      {/* 🌟 STORYTELLING SECTION WITH PHOTO GALLERY */}
      <section className="relative py-40 bg-gray-900 text-white overflow-hidden">
        {/* SVG Background Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="#f9a8d4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-pink-400">Every</span> Mother Has a Story
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just provide resources—we rewrite futures through
              personal connections.
            </p>
          </motion.div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Replace these with your actual photos */}
            {[
              {
                img: youngmother1,
                alt: "Team member counseling young mother",
                caption: "One-on-one guidance sessions",
              },
              {
                img: youngmother2,
                alt: "Group workshop with young mothers",
                caption: "Educational workshops",
              },
              {
                img: youngmother3,
                alt: "Mentor and mother sharing a moment",
                caption: "Building trusting relationships",
              },
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[90] overflow-hidden">
                  <img
                    src={photo.img}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-medium">{photo.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Stories */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "200+",
                title: "Lives Touched",
                desc: "Young mothers supported through our programs",
              },
              {
                stat: "95%",
                title: "Success Rate",
                desc: "Of participants who complete our programs",
              },
              {
                stat: "50+",
                title: "Communities",
                desc: "Where we've made a lasting impact",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <div className="text-5xl font-bold text-pink-400 mb-2">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 FINAL CTA WITH SVG GLOW EFFECT */}
      <section className="py-32 bg-gradient-to-br from-pink-600 to-purple-600 relative overflow-hidden">
        {/* SVG Radial Gradient Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              id="radial-gradient"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#radial-gradient)" />
        </svg>

        {/* SVG Floating Elements */}
        <svg
          className="absolute top-20 left-20 w-40 h-40 opacity-20"
          viewBox="0 0 100 100"
        >
          <path
            d="M20,50 Q50,80 80,50 T20,50 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </svg>

        <svg
          className="absolute bottom-20 right-20 w-40 h-40 opacity-20"
          viewBox="0 0 100 100"
        >
          <path
            d="M50,20 Q80,50 50,80 T50,20 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </svg>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-yellow-200">Change a Life</span>?
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Your support helps young mothers write new chapters in their
            stories.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            <button className="px-12 py-5 bg-white text-pink-600 rounded-xl text-xl font-bold hover:bg-gray-100 hover:shadow-2xl transition-all flex items-center gap-3 mx-auto relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-3">
                <FiHeart className="text-2xl" />
                Join Us Today
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default YoungMothers;
