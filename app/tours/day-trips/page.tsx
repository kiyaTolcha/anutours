import { MapPin, Clock, Users, Star, Car, Camera, Utensils } from 'lucide-react'
import Link from 'next/link'

export default function DayTripsPage() {
  const trips = [
    {
      id: 1,
      name: "Wine Country Tour",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "8 Hours",
      price: "$120",
      rating: 4.8,
      reviews: 234,
      description: "Explore picturesque vineyards and taste world-class wines in beautiful countryside.",
      highlights: ["Wine Tasting", "Vineyard Tours", "Local Lunch", "Scenic Views"]
    },
    {
      id: 2,
      name: "Historic Castle Tour",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "6 Hours",
      price: "$85",
      rating: 4.7,
      reviews: 189,
      description: "Discover medieval castles and learn about fascinating historical events.",
      highlights: ["Castle Tours", "Historical Stories", "Architecture", "Photo Opportunities"]
    },
    {
      id: 3,
      name: "Coastal Scenic Drive",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "7 Hours",
      price: "$95",
      rating: 4.9,
      reviews: 267,
      description: "Drive along stunning coastal roads with breathtaking ocean views and charming villages.",
      highlights: ["Scenic Views", "Beach Stops", "Local Villages", "Lighthouse Visit"]
    },
    {
      id: 4,
      name: "Mountain Lake Excursion",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "9 Hours",
      price: "$110",
      rating: 4.8,
      reviews: 198,
      description: "Visit pristine mountain lakes and enjoy hiking and water activities.",
      highlights: ["Mountain Views", "Lake Activities", "Hiking Trails", "Wildlife Spotting"]
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Day Trips & Excursions</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Perfect getaways for busy travelers - explore amazing destinations in just one day
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Car className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Convenient Transport</h3>
              <p className="text-gray-600">Comfortable transportation to and from your hotel</p>
            </div>
            <div className="text-center">
              <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Photo Opportunities</h3>
              <p className="text-gray-600">Capture memories at the most scenic locations</p>
            </div>
            <div className="text-center">
              <Utensils className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Local Cuisine</h3>
              <p className="text-gray-600">Taste authentic local food and specialties</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Learn from knowledgeable local experts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Day Trips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Perfect one-day adventures that fit into any travel schedule</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={trip.image} alt={trip.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{trip.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{trip.name}</h3>
                  <p className="text-gray-600 mb-4">{trip.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{trip.duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{trip.reviews} reviews</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Trip Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trip.highlights.map((highlight, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-600">From {trip.price}</div>
                    <Link href={`/tours/day-trips/${trip.id}`} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                      Book Trip
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect for Busy Travelers</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">Experience amazing destinations without the commitment of multi-day tours</p>
          <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Book Your Day Trip
          </Link>
        </div>
      </section>
    </div>
  )
}
