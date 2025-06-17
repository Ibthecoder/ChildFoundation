
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "../constants/SiteData";
import { brandlong } from "../assets/images/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <NavLink className="text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src={brandlong} width={152} alt="Company Logo" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {MenuItems.map(({ name, path }) => (
                <li key={path}>
                  <NavLink
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-indigo-600 border-b-2 border-indigo-600"
                          : "text-gray-500 hover:text-gray-900"
                      }`
                    }
                    to={path}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {MenuItems.map(({ name, path }) => (
            <NavLink
              key={path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`
              }
              to={path}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
