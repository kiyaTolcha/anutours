import { MapPin, Clock, Users, Star, Calendar, Compass, Camera } from 'lucide-react'
import Link from 'next/link'

export default function MultiDayToursPage() {
  const tours = [
    {
      id: 1,
      name: "Ultimate European Journey",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "21 Days",
      price: "$4,500",
      rating: 4.9,
      reviews: 234,
      countries: 8,
      description: "Comprehensive journey through Europe's most iconic destinations and hidden gems.",
      highlights: ["Paris & Rome", "Prague & Vienna", "Amsterdam & Barcelona", "Swiss Alps"]
    },
    {
      id: 2,
      name: "African Safari Expedition",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      duration: "15 Days",
      price: "$5,200",
      rating: 4.8,
      reviews: 189,
      countries: 3,
      description: "Complete wildlife safari experience across multiple African countries.",
      highlights: ["Masai Mara", "Serengeti", "Victoria Falls", "Cape Town"]
    },
    {
      id: 3,
      name: "Southeast Asia Grand Tour",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80",
      duration: "18 Days",
      price: "$3,800",
      rating: 4.9,
      reviews: 267,
      countries: 4,
      description: "Cultural immersion and natural beauty across Southeast Asia.",
      highlights: ["Thailand Temples", "Vietnam Halong Bay", "Cambodia Angkor", "Singapore"]
    },
    {
      id: 4,
      name: "South American Adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "22 Days",
      price: "$4,800",
      rating: 4.7,
      reviews: 156,
      countries: 5,
      description: "Explore diverse landscapes and cultures from Machu Picchu to Rio.",
      highlights: ["Machu Picchu", "Amazon Rainforest", "Iguazu Falls", "Rio de Janeiro"]
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Multi-Day Tours</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Immerse yourself in comprehensive journeys that explore multiple destinations and create lasting memories
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Extended Itineraries</h3>
              <p className="text-gray-600">Comprehensive tours covering multiple destinations</p>
            </div>
            <div className="text-center">
              <Compass className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Deep Exploration</h3>
              <p className="text-gray-600">Thoroughly explore each destination without rushing</p>
            </div>
            <div className="text-center">
              <Camera className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Unforgettable Moments</h3>
              <p className="text-gray-600">Capture memories across diverse landscapes and cultures</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Planning</h3>
              <p className="text-gray-600">Seamlessly organized multi-country adventures</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Multi-Day Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive journeys that take you on the adventure of a lifetime</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tour.countries} Countries
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{tour.duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{tour.reviews} reviews</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-indigo-600">From {tour.price}</div>
                    <Link href={`/tours/multi-day/${tour.id}`} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                      Plan Journey
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for the Journey of a Lifetime?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">Experience comprehensive adventures that take you across multiple countries and create memories that last forever</p>
          <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Plan Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}
