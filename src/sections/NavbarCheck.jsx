const NavbarCheck = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-purple-50 shadow">
      <div className="text-xl font-bold text-purple-700">
        Young Mother & Child Haven
      </div>
      <ul className="hidden md:flex gap-6 items-center text-purple-800 font-medium">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>

        {/* Our Work Dropdown */}
        <li className="group relative">
          <a href="#" className="cursor-pointer">
            Our Work
          </a>
          <ul className="absolute hidden group-hover:block bg-white border mt-2 rounded shadow-lg text-sm w-48">
            <li>
              <a
                href="#young-mothers"
                className="block px-4 py-2 hover:bg-purple-100"
              >
                Young Mothers (GONGO)
              </a>
            </li>
            <li>
              <a
                href="#school-outreach"
                className="block px-4 py-2 hover:bg-purple-100"
              >
                School Outreach
              </a>
            </li>
          </ul>
        </li>

        {/* Programs Dropdown */}
        <li className="group relative">
          <a href="#" className="cursor-pointer">
            Programs
          </a>
          <ul className="absolute hidden group-hover:block bg-white border mt-2 rounded shadow-lg text-sm w-52">
            <li>
              <a
                href="#vocational"
                className="block px-4 py-2 hover:bg-purple-100"
              >
                Vocational Training
              </a>
            </li>
            <li>
              <a
                href="#counseling"
                className="block px-4 py-2 hover:bg-purple-100"
              >
                Counseling Sessions
              </a>
            </li>
            <li>
              <a
                href="#webinars"
                className="block px-4 py-2 hover:bg-purple-100"
              >
                Webinars & Workshops
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#get-involved">Get Involved</a>
        </li>
        <li>
          <a
            href="#donate"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Donate
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarCheck;
