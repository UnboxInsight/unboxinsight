import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-ui-navy text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-ui-orange">
            UnboxInSight
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-ui-orange transition">Home</Link>
            <Link to="/competitions" className="hover:text-ui-orange transition">Competitions</Link>
            <Link to="/blogs" className="hover:text-ui-orange transition">Blogs</Link>
            <Link to="/contact" className="hover:text-ui-orange transition">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/login" className="px-4 py-2 rounded hover:bg-ui-orange transition">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-ui-orange rounded hover:bg-opacity-90 transition">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}