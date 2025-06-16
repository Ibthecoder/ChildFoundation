import { NavLink } from "react-router-dom";
import { MenuItems } from "../constants/SiteData";
import { brandlong } from "../assets/images/image";

const Navbar = () => {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <img src={brandlong} width={152} alt="" />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {MenuItems.map(({ name, path }) => (
                    <li to={path}>
                      <NavLink
                        className="text-gray-500 transition hover:text-gray-500/75"
                        to={path}
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
