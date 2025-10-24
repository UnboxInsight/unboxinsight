import { useState, useEffect } from 'react'

export default function Competitions() {
  // Sample competition data - replace with Firebase data later
  const competitions = [
    {
      id: 1,
      title: "Product Innovation Challenge",
      company: "Tech Startup Inc.",
      description: "Design a mobile app feature to improve user engagement for Gen Z users.",
      deadline: "2025-11-15",
      prize: "₹50,000",
      tags: ["Product", "UX/UI", "Mobile"]
    },
    {
      id: 2,
      title: "Marketing Campaign Contest",
      company: "Brand Solutions",
      description: "Create a viral marketing strategy for a sustainable fashion brand.",
      deadline: "2025-11-30",
      prize: "₹30,000",
      tags: ["Marketing", "Social Media", "Sustainability"]
    },
    {
      id: 3,
      title: "Data Analytics Challenge",
      company: "Analytics Pro",
      description: "Analyze customer behavior data and provide actionable insights.",
      deadline: "2025-12-10",
      prize: "₹40,000",
      tags: ["Data", "Analytics", "Business"]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-ui-navy mb-4">Active Competitions</h1>
        <p className="text-lg text-gray-600">
          Choose a challenge, showcase your skills, and win exciting prizes!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((comp) => (
          <div 
            key={comp.id} 
            className="border-2 border-ui-gray rounded-lg p-6 hover:shadow-xl transition"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-ui-navy mb-2">{comp.title}</h3>
              <p className="text-sm text-ui-orange font-semibold">{comp.company}</p>
            </div>
            <p className="text-gray-700 mb-4">{comp.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {comp.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="bg-ui-navy text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Deadline: {comp.deadline}</span>
              <span className="font-bold text-ui-orange">{comp.prize}</span>
            </div>
            <button className="w-full bg-ui-orange text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">More competitions coming soon!</p>
        <button className="bg-ui-navy text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
          Subscribe for Updates
        </button>
      </div>
    </div>
  )
}