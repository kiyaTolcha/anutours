import { MapPin, Clock, Users, Star, Mountain, Zap, Compass } from 'lucide-react'
import Link from 'next/link'

export default function AdventurePage() {
  const adventures = [
    {
      id: 1,
      name: "Mountain Climbing Expedition",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "5-10 Days",
      price: "$1,500",
      rating: 4.9,
      reviews: 234,
      description: "Conquer challenging peaks and experience breathtaking alpine adventures.",
      highlights: ["Summit Climbing", "Rock Climbing", "Ice Climbing", "Mountain Safety"]
    },
    {
      id: 2,
      name: "White Water Rafting",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "1-3 Days",
      price: "$350",
      rating: 4.8,
      reviews: 189,
      description: "Navigate thrilling rapids and experience the power of rushing waters.",
      highlights: ["Grade 4 Rapids", "Safety Training", "Equipment Provided", "Professional Guides"]
    },
    {
      id: 3,
      name: "Desert Safari Adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "3-7 Days",
      price: "$800",
      rating: 4.7,
      reviews: 156,
      description: "Explore vast desert landscapes and experience traditional nomadic life.",
      highlights: ["Camel Trekking", "Sandboarding", "Desert Camping", "Stargazing"]
    },
    {
      id: 4,
      name: "Jungle Survival Course",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "4-8 Days",
      price: "$650",
      rating: 4.8,
      reviews: 198,
      description: "Learn essential survival skills in challenging jungle environments.",
      highlights: ["Survival Training", "Wildlife Tracking", "Bushcraft Skills", "Emergency Protocols"]
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Adventure Tours</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Push your limits with extreme adventures and adrenaline-pumping experiences
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Mountain className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Extreme Sports</h3>
              <p className="text-gray-600">Rock climbing, mountain biking, and extreme adventures</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Adrenaline Rush</h3>
              <p className="text-gray-600">White water rafting, skydiving, and bungee jumping</p>
            </div>
            <div className="text-center">
              <Compass className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Wilderness Survival</h3>
              <p className="text-gray-600">Learn survival skills in challenging environments</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-gray-600">Professional guides and top-quality equipment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Adventure Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Challenge yourself with our most extreme and exciting adventure experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adventures.map((adventure) => (
              <div key={adventure.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={adventure.image} alt={adventure.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{adventure.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{adventure.name}</h3>
                  <p className="text-gray-600 mb-4">{adventure.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{adventure.duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{adventure.reviews} reviews</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Adventure Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {adventure.highlights.map((highlight, index) => (
                        <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-orange-600">From {adventure.price}</div>
                    <Link href={`/tours/adventure/${adventure.id}`} className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                      Book Adventure
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">Push your boundaries and create unforgettable memories with our extreme adventure tours</p>
          <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Book Your Adventure
          </Link>
        </div>
      </section>
    </div>
  )
}
