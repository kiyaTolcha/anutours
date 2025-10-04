import { MapPin, Clock, Users, Star, UserCheck, Heart, Globe } from 'lucide-react'
import Link from 'next/link'

export default function GroupToursPage() {
  const groupTours = [
    {
      id: 1,
      name: "European Grand Tour",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "14 Days",
      price: "$2,800",
      rating: 4.9,
      reviews: 456,
      maxGroup: 20,
      description: "Explore the best of Europe with like-minded travelers on this comprehensive group adventure.",
      highlights: ["Paris & Rome", "Barcelona & Amsterdam", "Group Activities", "Local Experiences"]
    },
    {
      id: 2,
      name: "Southeast Asia Explorer",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80",
      duration: "12 Days",
      price: "$1,950",
      rating: 4.8,
      reviews: 389,
      maxGroup: 16,
      description: "Discover the vibrant cultures and stunning landscapes of Southeast Asia.",
      highlights: ["Thailand & Vietnam", "Cambodia & Laos", "Temples & Beaches", "Street Food Tours"]
    },
    {
      id: 3,
      name: "African Safari Adventure",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      duration: "10 Days",
      price: "$3,200",
      rating: 4.9,
      reviews: 523,
      maxGroup: 12,
      description: "Experience the ultimate wildlife safari with fellow nature enthusiasts.",
      highlights: ["Big Five Safari", "Masai Mara", "Victoria Falls", "Cultural Visits"]
    },
    {
      id: 4,
      name: "South American Journey",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "16 Days",
      price: "$2,650",
      rating: 4.7,
      reviews: 412,
      maxGroup: 18,
      description: "Explore the diverse landscapes and cultures of South America.",
      highlights: ["Machu Picchu", "Rio de Janeiro", "Iguazu Falls", "Amazon Rainforest"]
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Group Tours</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Travel with like-minded adventurers and make lifelong friends on unforgettable group journeys
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <UserCheck className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Small Groups</h3>
              <p className="text-gray-600">Intimate group sizes for personalized experiences</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Make Friends</h3>
              <p className="text-gray-600">Connect with fellow travelers from around the world</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Group Activities</h3>
              <p className="text-gray-600">Shared experiences and group bonding activities</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Leaders</h3>
              <p className="text-gray-600">Professional tour leaders for seamless group experiences</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Group Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join our most popular group adventures and create memories that last a lifetime</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupTours.map((tour) => (
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
                    <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Max {tour.maxGroup} people
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
                        <span key={index} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-teal-600">From {tour.price}</div>
                    <Link href={`/tours/group-tours/${tour.id}`} className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                      Join Group
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join a Group Adventure?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">Meet new friends, share amazing experiences, and create unforgettable memories together</p>
          <Link href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Join a Group Tour
          </Link>
        </div>
      </section>
    </div>
  )
}
