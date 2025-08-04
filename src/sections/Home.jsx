import React, { useEffect, useState } from "react";
import { HeroImg1 } from "../assets/images/image";
import AboutUs from "./AboutUs";
import ProgramUs from "./ProgramUs";
import GetInvolved from "./GetInvolved";
import { motion } from "framer-motion";
import PosterImg from "../assets/images/poster.jpg";

const Home = () => {
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [activeNotification, setActiveNotification] = useState(null);

  useEffect(() => {
    const dismissed = localStorage.getItem("modalDismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setActiveNotification("light");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setActiveNotification(null);
    localStorage.setItem("modalDismissed", "true");
  };

  const notifications = [
    {
      id: "light",
      title: "She Carries Light",
      date: "Oct 11, 2025",
      description: "Upcoming Girl Child Day sensitization walk",
      content: (
        <>
          <img
            src={PosterImg}
            alt="Girl Child Day Event"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-5 text-center">
            <h2 className="text-xl font-bold text-pink-600 mb-2">
              She Carries Light
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Join us on <strong>October 11, 2025</strong> at <strong>Ikotun, Alimosho LGA, Lagos State</strong><br />
              for our Walk/Sensitization Event in celebration of <strong>International Girl Child Day</strong>.
            </p>
            <a
              href="https://forms.gle/eRJuqwhZSKKAwg3u6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded"
            >
              Register Now (Free)
            </a>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      {activeNotification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-md w-full relative shadow-lg border border-pink-300">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            {notifications.find((n) => n.id === activeNotification)?.content}
          </div>
        </div>
      )}

      <button
        onClick={() => setShowNotificationPanel(!showNotificationPanel)}
        className="fixed bottom-4 left-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-3 rounded-full shadow-lg z-40"
        title="Notifications"
      >
        🔔
      </button>

      {showNotificationPanel && (
        <div className="fixed bottom-20 left-4 w-80 bg-white rounded-2xl shadow-2xl border border-pink-200 z-50 overflow-hidden transition-all duration-300">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-pink-50">
            <div className="flex items-center gap-2">
              <span className="text-pink-600 text-lg">🔔</span>
              <h3 className="font-semibold text-pink-600 text-base">
                Notifications
              </h3>
            </div>
            <button
              onClick={() => setShowNotificationPanel(false)}
              className="text-gray-400 hover:text-gray-600 text-lg"
              title="Close"
            >
              ✕
            </button>
          </div>
          <ul className="max-h-72 overflow-y-auto divide-y divide-gray-100">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                onClick={() => {
                  setActiveNotification(notification.id);
                  setShowNotificationPanel(false);
                }}
                className="px-4 py-3 hover:bg-pink-50 cursor-pointer transition-all"
              >
                <div className="text-sm font-medium text-gray-800">
                  {notification.title}
                </div>
                <div className="text-xs text-gray-500">{notification.date}</div>
              </li>
            ))}
            {notifications.length === 0 && (
              <li className="p-4 text-center text-gray-500 text-sm">
                No notifications yet.
              </li>
            )}
          </ul>
        </div>
      )}

      <section className="relative bg-gray-50">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight text-center"
            >
              <span className="block">Welcome to</span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="block mt-2 text-pink-600 hover:text-pink-400 transition-colors duration-500"
              >
                Young Mother & Child Haven Foundation
              </motion.span>
            </motion.h1>
            <p className="mt-6 text-base font-normal leading-7 text-gray-900">
              At Young Mother & Child Haven Foundation, we believe every young
              girl and mother deserves to feel safe, supported, and empowered.
              We are a faith-driven, purpose-led non-profit committed to
              nurturing the spirit, soul, and potential of young mothers and
              children across Nigeria and beyond.
            </p>
          </div>
          <div className="pb-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:pb-0">
            <div className="flex items-center justify-center h-full px-4">
              <img
                src={HeroImg1}
                alt="Hero Illustration"
                className="w-full max-w-md lg:max-w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
      <ProgramUs />
      <GetInvolved />
    </>
  );
};

export default Home;
