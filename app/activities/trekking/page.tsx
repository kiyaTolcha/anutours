import { MapPin, Clock, Users, Star, Mountain, Compass, Camera, Heart } from 'lucide-react'
import Link from 'next/link'

export default function TrekkingPage() {
  const treks = [
    {
      id: 1,
      name: "Everest Base Camp Trek",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "14 Days",
      price: "$1,800",
      rating: 4.9,
      reviews: 456,
      difficulty: "Challenging",
      description: "Experience the world's most famous trek to the base of Mount Everest.",
      highlights: ["Everest Views", "Sherpa Culture", "High Altitude", "Tea Houses"]
    },
    {
      id: 2,
      name: "Inca Trail to Machu Picchu",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "4 Days",
      price: "$650",
      rating: 4.8,
      reviews: 389,
      difficulty: "Moderate",
      description: "Follow ancient Inca paths to the magnificent lost city of Machu Picchu.",
      highlights: ["Machu Picchu", "Ancient Ruins", "Andean Views", "Cloud Forest"]
    },
    {
      id: 3,
      name: "Kilimanjaro Summit",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "7 Days",
      price: "$2,200",
      rating: 4.9,
      reviews: 267,
      difficulty: "Challenging",
      description: "Conquer Africa's highest peak and experience diverse ecosystems.",
      highlights: ["Summit Success", "5 Climate Zones", "Glaciers", "Sunrise Views"]
    },
    {
      id: 4,
      name: "Annapurna Circuit",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "12 Days",
      price: "$1,400",
      rating: 4.8,
      reviews: 234,
      difficulty: "Moderate",
      description: "Classic Himalayan trek with diverse landscapes and cultural encounters.",
      highlights: ["Thorong La Pass", "Mountain Villages", "Hot Springs", "Diverse Landscapes"]
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Trekking & Hiking</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Challenge yourself on the world's most spectacular hiking trails and mountain adventures
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Mountain className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mountain Adventures</h3>
              <p className="text-gray-600">Conquer peaks and explore high-altitude trails</p>
            </div>
            <div className="text-center">
              <Compass className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional guides and safety equipment included</p>
            </div>
            <div className="text-center">
              <Camera className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Breathtaking Views</h3>
              <p className="text-gray-600">Capture stunning landscapes and panoramic vistas</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cultural Immersion</h3>
              <p className="text-gray-600">Experience local communities and traditions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Trekking Adventures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Challenge yourself on the world's most iconic hiking trails and mountain expeditions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treks.map((trek) => (
              <div key={trek.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={trek.image} alt={trek.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{trek.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      trek.difficulty === 'Challenging' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-yellow-600 text-white'
                    }`}>
                      {trek.difficulty}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{trek.name}</h3>
                  <p className="text-gray-600 mb-4">{trek.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{trek.duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{trek.reviews} reviews</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Trek Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trek.highlights.map((highlight, index) => (
                        <span key={index} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-600">From {trek.price}</div>
                    <Link href={`/activities/trekking/${trek.id}`} className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                      Book Trek
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Conquer New Heights?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">Join us on unforgettable trekking adventures and challenge yourself on the world's most spectacular trails</p>
          <Link href="/contact" className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Start Your Trek
          </Link>
        </div>
      </section>
    </div>
  )
}
