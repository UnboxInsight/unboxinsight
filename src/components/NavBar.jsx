import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-white text-ui-navy border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo2.svg"  // 👈 Make sure this file is inside your public/ folder
              alt="Unbox Insight Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className="hover:text-ui-orange transition">Home</Link>
            <Link to="/competitions" className="hover:text-ui-orange transition">Competitions</Link>
            <Link to="/blogs" className="hover:text-ui-orange transition">Blogs</Link>
            <Link to="/contact" className="hover:text-ui-orange transition">Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded border border-ui-navy text-ui-navy hover:bg-ui-navy hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-ui-orange text-white rounded hover:bg-opacity-90 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
