import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600">Contact Us</h2>
          <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-2 rounded-md shadow hover:bg-pink-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <h3 className="text-2xl font-semibold text-pink-600">Get in Touch</h3>
            <p>
              <strong>Young Mother & Child Haven Foundation</strong><br />
              Lagos, Nigeria
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:ymothershaven@gmail.com" className="text-pink-600 underline">
                ymothershaven@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+2349137042786" className="text-pink-600 underline">
                09137042786
              </a>
            </p>
            {/* Optional: Map */}
            <div className="mt-4">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Lagos,%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-md border-2 border-pink-200"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
