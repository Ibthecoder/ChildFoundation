import {
  aboutaImg,
  Hero,
  aboutaImg2,
  aboutaImg3,
  aboutaImg4,
  aboutaImg1,
} from "../assets/images/image";

const AboutUs = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Our <span className="text-pink-600">Story</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          A faith-driven NGO supporting young mothers and preventing teen
          pregnancies through education and community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="text-gray-700 mb-6">
            Young Mother & Child Haven Foundation provides holistic support to
            pregnant teens and young mothers through:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              {/* <CheckIcon className="text-pink-500 mt-1 mr-2" /> */}
              <span>Education & vocational training</span>
            </li>
            <li className="flex items-start">
              {/* <CheckIcon className="text-pink-500 mt-1 mr-2" /> */}
              <span>Childcare support</span>
            </li>
            <li className="flex items-start">
              {/* <CheckIcon className="text-pink-500 mt-1 mr-2" /> */}
              <span>School outreach programs</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={aboutaImg}
            alt="School outreach"
            className="rounded-lg shadow-lg"
          />
          <img
            src={aboutaImg1}
            alt="Young mothers meeting"
            className="rounded-lg shadow-lg mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
