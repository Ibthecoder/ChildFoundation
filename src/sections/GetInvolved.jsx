const GetInvolved = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Join Our <span className="text-pink-600">Mission</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Donation Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {/* <DonateIcon className="h-12 w-12 mx-auto text-pink-600 mb-4" /> */}
            <h3 className="text-xl font-bold mb-4">Make a Donation</h3>
            <p className="text-gray-600 mb-6">
              Support our programs for young mothers and girls.
            </p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg w-full">
              <a href="tel:+2349137042786">Donate Now</a>
            </button>
          </div>

          {/* Volunteer Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {/* <VolunteerIcon className="h-12 w-12 mx-auto text-blue-600 mb-4" /> */}
            <h3 className="text-xl font-bold mb-4">Become a Volunteer</h3>
            <p className="text-gray-600 mb-6">
              Mentor, teach, or help with outreach programs.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
              <a href="mailto:ymothershaven@gmail.com">Sign Up</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GetInvolved;
