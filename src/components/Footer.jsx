export default function Footer() {
  return (
    <footer className="bg-ui-navy text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-ui-orange mb-4">UnboxInSight</h3>
            <p className="text-gray-300">Empowering students to collaborate, compete, and create.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/competitions" className="hover:text-ui-orange">Competitions</a></li>
              <li><a href="/blogs" className="hover:text-ui-orange">Blogs</a></li>
              <li><a href="/contact" className="hover:text-ui-orange">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-300">info@unboxinsight.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 UnboxInSight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
