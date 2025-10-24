import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-ui-navy mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-ui-navy mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-semibold text-ui-navy">Email</h3>
                <p className="text-gray-600">info@unboxinsight.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <h3 className="font-semibold text-ui-navy">Website</h3>
                <p className="text-gray-600">www.unboxinsight.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="font-semibold text-ui-navy">For Companies</h3>
                <p className="text-gray-600">partnerships@unboxinsight.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-ui-navy mb-2">Office Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-ui-gray rounded-lg focus:border-ui-orange outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-ui-gray rounded-lg focus:border-ui-orange outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-ui-gray rounded-lg focus:border-ui-orange outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border-2 border-ui-gray rounded-lg focus:border-ui-orange outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-ui-orange text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}