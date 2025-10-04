'use client'

import { useState } from 'react'
import { Search, Calendar, Users, MapPin } from 'lucide-react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [dateRange, setDateRange] = useState('')
  const [travelers, setTravelers] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search:', { searchQuery, dateRange, travelers })
  }

  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      ></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Discover the Beauty of <span className="text-yellow-400">Ethiopia</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fadeInUp">
            Explore the cradle of humanity with ancient history, vibrant culture, and breathtaking landscapes
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl animate-slideInRight">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="text-gray-800 text-center mb-4">
                <h3 className="text-2xl font-semibold">Where do you want to explore in Ethiopia?</h3>
                <p className="text-gray-600">Discover ancient kingdoms, natural wonders, and cultural treasures</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Destination"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    placeholder="Travel Date"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Number of Travelers</option>
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3-4">3-4 Travelers</option>
                    <option value="5-8">5-8 Travelers</option>
                    <option value="9+">9+ Travelers</option>
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Search Tours</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
