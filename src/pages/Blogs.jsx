export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "How to Ace Product Management Challenges",
      author: "Priya Sharma",
      date: "Oct 20, 2025",
      excerpt: "Learn the key frameworks and strategies to excel in product ideation competitions...",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Power of Student-Led Innovation",
      author: "Rahul Verma",
      date: "Oct 18, 2025",
      excerpt: "Why college students are uniquely positioned to solve today's biggest challenges...",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Building Your Portfolio Through Competitions",
      author: "Anjali Singh",
      date: "Oct 15, 2025",
      excerpt: "How participating in idea challenges can boost your career prospects...",
      readTime: "6 min read"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-ui-navy mb-4">Insights & Blogs</h1>
        <p className="text-lg text-gray-600">
          Learn from fellow students and industry experts
        </p>
      </div>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <article 
            key={blog.id} 
            className="border-2 border-ui-gray rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-2xl font-bold text-ui-navy mb-2 hover:text-ui-orange transition">
              {blog.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
            <p className="text-gray-700 mb-4">{blog.excerpt}</p>
            <button className="text-ui-orange font-semibold hover:underline">
              Read More →
            </button>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-ui-navy text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
          Load More Articles
        </button>
      </div>
    </div>
  )
}