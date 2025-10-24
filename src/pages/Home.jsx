import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ui-navy mb-6">
            Welcome to <span className="text-ui-orange">UnboxInSight</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Collaborate, Compete, Create
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Join a community of passionate students solving real-world challenges, sharing insights, 
            and connecting with leading companies.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/signup" 
              className="bg-ui-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition"
            >
              Get Started
            </Link>
            <Link 
              to="/competitions" 
              className="bg-ui-navy text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition"
            >
              View Competitions
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-ui-navy mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border-2 border-ui-gray rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-ui-navy mb-3">Competitions</h3>
              <p className="text-gray-600">
                Participate in innovation challenges from top companies and showcase your problem-solving skills.
              </p>
            </div>
            <div className="p-6 border-2 border-ui-gray rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-ui-navy mb-3">Blogs & Insights</h3>
              <p className="text-gray-600">
                Share your ideas, read industry insights, and learn from fellow students and professionals.
              </p>
            </div>
            <div className="p-6 border-2 border-ui-gray rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-ui-navy mb-3">Networking</h3>
              <p className="text-gray-600">
                Connect with companies, get discovered for internships, and build your professional network early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-ui-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Unbox Your Potential?</h2>
          <p className="text-xl mb-8">
            Join thousands of students already making an impact.
          </p>
          <Link 
            to="/signup" 
            className="bg-ui-orange px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition inline-block"
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  )
}
