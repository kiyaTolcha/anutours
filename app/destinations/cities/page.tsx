import { MapPin, Clock, Users, Star, Building, Camera, Coffee } from 'lucide-react'
import Link from 'next/link'

export default function CitiesPage() {
  const cities = [
    {
      id: 1,
      name: "Paris City Tour",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "1-3 Days",
      price: "$299",
      rating: 4.9,
      reviews: 456,
      description: "Discover the City of Light with visits to iconic landmarks and hidden gems.",
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Local Cuisine"]
    },
    {
      id: 2,
      name: "Tokyo Discovery",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80",
      duration: "2-4 Days",
      price: "$450",
      rating: 4.8,
      reviews: 389,
      description: "Experience the perfect blend of traditional culture and modern innovation.",
      highlights: ["Sensoji Temple", "Shibuya Crossing", "Tsukiji Market", "Cherry Blossoms"]
    },
    {
      id: 3,
      name: "New York Explorer",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "1-5 Days",
      price: "$350",
      rating: 4.7,
      reviews: 523,
      description: "Explore the Big Apple's most famous attractions and neighborhoods.",
      highlights: ["Statue of Liberty", "Central Park", "Broadway Show", "Times Square"]
    },
    {
      id: 4,
      name: "London Heritage",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "2-4 Days",
      price: "$380",
      rating: 4.8,
      reviews: 412,
      description: "Immerse yourself in British history and royal traditions.",
      highlights: ["Buckingham Palace", "Tower of London", "Westminster Abbey", "Thames Cruise"]
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">City Tours</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Discover the world's most vibrant cities with expert local guides
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Iconic Landmarks</h3>
              <p className="text-gray-600">Visit famous monuments and architectural marvels</p>
            </div>
            <div className="text-center">
              <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Photo Opportunities</h3>
              <p className="text-gray-600">Capture memories at the best viewpoints</p>
            </div>
            <div className="text-center">
              <Coffee className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Local Culture</h3>
              <p className="text-gray-600">Experience authentic local life and traditions</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Learn from knowledgeable local experts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured City Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore the world's most exciting cities with our curated tour packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cities.map((city) => (
              <div key={city.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={city.image} alt={city.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{city.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{city.name}</h3>
                  <p className="text-gray-600 mb-4">{city.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{city.duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{city.reviews} reviews</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {city.highlights.map((highlight, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">From {city.price}</div>
                    <Link href={`/tours/cities/${city.id}`} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Book Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Amazing Cities?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Join thousands of travelers discovering the world's greatest cities with Anutu Tours</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  )
}
