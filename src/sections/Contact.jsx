import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/programs" className="hover:underline">Programs</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Young Mother & Child Haven Foundation</p>
          <p>Lagos, Nigeria</p>
          <p>Email: <a href="mailto:ymothershaven@gmail.com" className="underline">ymothershaven@gmail.com</a></p>
          <p>Phone: <a href="tel:+2349137042786" className="underline">09137042786</a></p>
        </div>

        {/* Social or Branding */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <p>
            <a href="https://www.linkedin.com/in/ayomipo-soyinka-208156335/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/AY-CODED" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
          </p>
          <p>
            <a href="https://my-portfolio-mauve-six-31.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">Portfolio</a>
          </p>
        </div>
      </div>

      <div className="text-center mt-10 text-sm">
        &copy; {new Date().getFullYear()} AY||TECH! All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
