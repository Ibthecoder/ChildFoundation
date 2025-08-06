import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "../constants/SiteData";
import { brandlong } from "../assets/images/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

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
                <li key={path} className="relative">
                  {name === "Programs" ? (
                    <div className="relative">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-900 hover:text-indigo-600"
                        onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                        aria-expanded={isProgramsOpen}
                      >
                        <span>Programs</span>
                        <svg
                          className={`h-5 w-5 transition-transform duration-200 ${
                            isProgramsOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {/* Dropdown menu with animation */}
                      <div
                        className={`absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition-all duration-200 ${
                          isProgramsOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-1 pointer-events-none"
                        }`}
                      >
                        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                          <div className="p-4">
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg
                                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <NavLink
                                  to="/YoungMothers"
                                  className="font-semibold text-gray-900 block"
                                  onClick={() => setIsProgramsOpen(false)}
                                >
                                  Young Mothers
                                  <span className="absolute inset-0"></span>
                                </NavLink>
                                <p className="mt-1 text-gray-600">
                                  Support and empowerment for young mothers
                                </p>
                              </div>
                            </div>
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg
                                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                  />
                                </svg>
                              </div>
                              <div>
                                <NavLink
                                  to="/schooloutreach"
                                  className="font-semibold text-gray-900 block"
                                  onClick={() => setIsProgramsOpen(false)}
                                >
                                  School Outreach
                                  <span className="absolute inset-0"></span>
                                </NavLink>
                                <p className="mt-1 text-gray-600">
                                  Education and prevention programs in schools
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
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
                  )}
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
            <div key={path}>
              {name === "Programs" ? (
                <div>
                  <button
                    onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                    className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {name}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isProgramsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isProgramsOpen ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4">
                      <NavLink
                        to="/youngmothers"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        onClick={() => {
                          setIsOpen(false);
                          setIsProgramsOpen(false);
                        }}
                      >
                        Young Mothers (GONGO)
                      </NavLink>
                      <NavLink
                        to="/schooloutreach"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        onClick={() => {
                          setIsOpen(false);
                          setIsProgramsOpen(false);
                        }}
                      >
                        School Outreach
                      </NavLink>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
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
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
