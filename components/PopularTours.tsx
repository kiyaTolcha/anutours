import Link from 'next/link'
import { Clock, Users, MapPin, Star } from 'lucide-react'

export default function PopularTours() {
  const tours = [
    {
      id: 1,
      title: "2 Days National Park Adventure",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "2 Days",
      price: "$850",
      priceNote: "/Person",
      type: "Customized",
      rating: 4.9,
      reviews: 156,
      location: "National Parks",
      description: "Experience the breathtaking beauty of our national parks with expert guides and comfortable accommodations."
    },
    {
      id: 2,
      title: "3 Days Mountain Trekking Tour",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "3 Days",
      price: "$475",
      priceNote: "/Person",
      type: "Adventure Tours",
      rating: 4.8,
      reviews: 203,
      location: "Mountain Regions",
      description: "Challenge yourself with this exciting mountain trekking adventure through stunning alpine landscapes."
    },
    {
      id: 3,
      title: "3 Days Cultural Heritage Tour",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "3 Days",
      price: "$800",
      priceNote: "/Person",
      type: "Group Tour",
      rating: 4.9,
      reviews: 187,
      location: "Historic Cities",
      description: "Discover rich cultural heritage and ancient traditions in this immersive cultural experience."
    },
    {
      id: 4,
      title: "5 Days Adventure Expedition",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      duration: "5 Days",
      price: "$1,087",
      priceNote: "/Person",
      type: "Northern Adventures",
      priceRange: "$1,087 - $4,032",
      rating: 4.7,
      reviews: 142,
      location: "Northern Regions",
      description: "An epic adventure through diverse landscapes with multiple activities and breathtaking views."
    },
    {
      id: 5,
      title: "6 Days Wildlife Safari",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      duration: "6 Days",
      price: "Request",
      priceNote: "for Price",
      type: "Southern Adventures",
      rating: 4.8,
      reviews: 198,
      location: "Wildlife Reserves",
      description: "Experience incredible wildlife encounters in their natural habitat with professional safari guides."
    },
    {
      id: 6,
      title: "6 Days Adventure Combo",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "6 Days",
      price: "$850",
      priceNote: "/Person",
      type: "Group Tour",
      rating: 4.9,
      reviews: 167,
      location: "Multiple Locations",
      description: "Combine multiple adventures in one comprehensive tour package for the ultimate experience."
    },
    {
      id: 7,
      title: "City Discovery Tour",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "1 Day",
      price: "$33",
      priceNote: "/Person",
      type: "City Tours",
      priceRange: "$114 - $264",
      rating: 4.8,
      reviews: 324,
      location: "Major Cities",
      description: "Explore the vibrant culture and history of our beautiful cities with knowledgeable local guides."
    },
    {
      id: 8,
      title: "Day Trip to Ancient Sites",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "9-10 hours",
      price: "$45",
      priceNote: "/Person",
      type: "Group Tour",
      priceRange: "$145 - $270",
      rating: 4.7,
      reviews: 189,
      location: "Historic Sites",
      description: "Visit ancient monuments and archaeological sites with expert historical commentary."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the top-rated journeys with Anutu Tours, featuring the best adventures and destinations. 
            Don't miss out on these sought-after adventures—book your tour today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {tour.description}
                  </p>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{tour.duration}</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{tour.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">
                      {tour.price}
                    </span>
                    <span className="text-gray-600 text-sm ml-1">
                      {tour.priceNote}
                    </span>
                    {tour.priceRange && (
                      <div className="text-sm text-gray-500">
                        {tour.priceRange}
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-500 fill-current inline mr-1" />
                      {tour.reviews} reviews
                    </div>
                  </div>
                </div>

                <Link
                  href={`/tours/${tour.id}`}
                  className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  )
}
