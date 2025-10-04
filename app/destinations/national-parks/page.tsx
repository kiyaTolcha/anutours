import { MapPin, Clock, Users, Star, Mountain, Trees, Camera } from 'lucide-react'
import Link from 'next/link'

export default function NationalParksPage() {
  const parks = [
    {
      id: 1,
      name: "Serengeti National Park",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      duration: "3-7 Days",
      price: "$1,200",
      rating: 4.9,
      reviews: 234,
      description: "Experience the Great Migration and witness the Big Five in their natural habitat.",
      highlights: ["Big Five Safari", "Great Migration", "Hot Air Balloon Safari", "Cultural Visits"]
    },
    {
      id: 2,
      name: "Yellowstone National Park",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "2-5 Days",
      price: "$850",
      rating: 4.8,
      reviews: 189,
      description: "Explore geothermal wonders, wildlife, and stunning landscapes in America's first national park.",
      highlights: ["Old Faithful Geyser", "Wildlife Viewing", "Hiking Trails", "Photography Tours"]
    },
    {
      id: 3,
      name: "Banff National Park",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "4-8 Days",
      price: "$1,100",
      rating: 4.9,
      reviews: 267,
      description: "Discover pristine mountain landscapes, turquoise lakes, and abundant wildlife in the Canadian Rockies.",
      highlights: ["Lake Louise", "Mountain Hiking", "Wildlife Safari", "Scenic Drives"]
    },
    {
      id: 4,
      name: "Kruger National Park",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      duration: "3-6 Days",
      price: "$950",
      rating: 4.8,
      reviews: 198,
      description: "South Africa's premier safari destination with excellent Big Five viewing opportunities.",
      highlights: ["Big Five Safari", "Bird Watching", "Night Drives", "Bush Walks"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">National Parks Tours</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Explore the world's most breathtaking national parks with expert guides and unforgettable wildlife encounters
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Wildlife Safaris</h3>
              <p className="text-gray-600">Spot the Big Five and other amazing wildlife in their natural habitat</p>
            </div>
            <div className="text-center">
              <Trees className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Nature Hiking</h3>
              <p className="text-gray-600">Explore pristine trails and discover hidden natural wonders</p>
            </div>
            <div className="text-center">
              <Camera className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Photography Tours</h3>
              <p className="text-gray-600">Capture stunning wildlife and landscape photos with expert guidance</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Learn from experienced naturalists and wildlife experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parks Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured National Parks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the world's most spectacular national parks with our carefully curated tour packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parks.map((park) => (
              <div key={park.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={park.image}
                    alt={park.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{park.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{park.name}</h3>
                  <p className="text-gray-600 mb-4">{park.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{park.duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{park.reviews} reviews</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {park.highlights.map((highlight, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">
                      From {park.price}
                    </div>
                    <Link
                      href={`/tours/national-parks/${park.id}`}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      Book Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your National Park Adventure?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of travelers who have experienced the magic of national parks with Anutu Tours
          </p>
          <Link
            href="/contact"
            className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Plan Your Adventure
          </Link>
        </div>
      </section>
    </div>
  )
}
