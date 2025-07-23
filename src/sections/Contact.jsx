import { Home, Phone, Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        Contact Us
      </h1>

      <br />
      <br />
      <br />

      <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              Get in Touch
            </h1>

            <form action="#" method="post" className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-1">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Type your message here..."
                  required
                  className="w-full h-32 resize-none px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-md shadow hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Centered Contact Info */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md border border-gray-300 space-y-4 text-sm md:my-auto">
            <h2 className="text-lg font-semibold text-center mb-2">
              Contact Information
            </h2>

            <div className="flex items-start gap-3">
              <Home className="text-pink-500 mt-1" />
              <p>1234 Street Name, City, State, Zip Code</p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-blue-500 mt-1" />
              <a href="tel:+2349137042786">09137042786</a>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-green-500 mt-1" />
              <a href="mailto:ymothershaven@gmail.com" target="blank">
                ymothershaven@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Instagram className="text-purple-500 mt-1" />
              <a
                href="https://www.instagram.com/young.mothershaven/"
                target="blank"
              >
                @young.mothershaven
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
