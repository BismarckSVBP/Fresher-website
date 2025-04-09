// components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-white">
            CSE Freshers 2025
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition">
              About
            </Link>
            <Link to="/registration" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition">
              Register
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition">
              Contact
            </Link>
            <Link to="/admin" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition">
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button (if needed later) */}
          <div className="md:hidden">
            {/* Add menu icon here if you're using a mobile menu later */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
