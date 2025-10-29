export default function Footer() {
  return (
    <footer className="bg-white text-ui-navy py-10 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Logo + Tagline */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img
                src="/logo2.svg"  // 👈 Make sure logo2.svg is in your public/ folder
                alt="Unbox Insight Logo"
                className="h-14 w-auto"  // 👈 slightly bigger (was h-10 before)
              />
            </a>
            <p className="text-gray-600">
              Empowering students to collaborate, compete, and create.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-ui-orange">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/competitions" className="hover:text-ui-orange transition">
                  Competitions
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-ui-orange transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-ui-orange transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-ui-orange">Connect</h4>
            <p className="text-gray-600">contact@unboxinsight.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; 2025 UnboxInSight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
