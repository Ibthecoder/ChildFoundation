import { motion } from "framer-motion";
import { FiBook, FiUsers, FiCalendar, FiBarChart2 } from "react-icons/fi";

const SchoolOutreachSection = () => {
  const stats = [
    {
      value: "50+",
      label: "Schools Reached",
      icon: <FiBook className="text-3xl" />,
    },
    {
      value: "5,000+",
      label: "Students Educated",
      icon: <FiUsers className="text-3xl" />,
    },
    {
      value: "85%",
      label: "Awareness Increase",
      icon: <FiBarChart2 className="text-3xl" />,
    },
    {
      value: "2020",
      label: "Since",
      icon: <FiCalendar className="text-3xl" />,
    },
  ];

  const programFeatures = [
    {
      title: "Interactive Workshops",
      description:
        "Engaging sessions using multimedia and real-life scenarios to educate about early pregnancy risks.",
      icon: "🎭",
    },
    {
      title: "Peer Education",
      description:
        "Training student ambassadors to continue the conversation beyond our visits.",
      icon: "👥",
    },
    {
      title: "Parent Engagement",
      description:
        "Special sessions helping parents approach these sensitive topics effectively.",
      icon: "👪",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pink-600">School Outreach</span> Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Educating young minds about responsible choices and the realities of
            early pregnancy
          </p>
        </motion.div>

        {/* Interactive Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="text-pink-500 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Program Features with Floating Animation */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full border border-gray-100 hover:border-pink-200 transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              {/* Floating dots decoration */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-pink-400 opacity-20"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-purple-400 opacity-20"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA with Animated Border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
            <button className="relative px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
              Request a School Visit
            </button>
          </div>
          <p className="mt-4 text-gray-500">
            Available for high schools nationwide
          </p>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="hidden lg:block">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-10 top-1/4 w-8 h-8 rounded-full bg-pink-300 opacity-20"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-20 bottom-1/3 w-12 h-12 rounded-full bg-purple-300 opacity-20"
        ></motion.div>
      </div>
    </section>
  );
};

export default SchoolOutreachSection;
