import { MapPin, Clock, Users, Star, BookOpen, Heart, Camera, Utensils } from 'lucide-react'
import Link from 'next/link'

export default function CulturalPage() {
  const experiences = [
    {
      id: 1,
      name: "Traditional Village Immersion",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "3-7 Days",
      price: "$450",
      rating: 4.9,
      reviews: 234,
      description: "Live with local families and experience authentic traditional lifestyles.",
      highlights: ["Homestay Experience", "Traditional Crafts", "Local Festivals", "Cultural Workshops"]
    },
    {
      id: 2,
      name: "Historical Heritage Tour",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "2-5 Days",
      price: "$380",
      rating: 4.8,
      reviews: 189,
      description: "Explore ancient sites and learn about rich historical heritage.",
      highlights: ["Ancient Monuments", "Museum Visits", "Historical Stories", "Archaeological Sites"]
    },
    {
      id: 3,
      name: "Culinary Culture Journey",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "2-4 Days",
      price: "$320",
      rating: 4.9,
      reviews: 267,
      description: "Discover local cuisine and learn traditional cooking methods.",
      highlights: ["Cooking Classes", "Market Tours", "Food Tastings", "Recipe Learning"]
    },
    {
      id: 4,
      name: "Art & Craft Workshop",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "1-3 Days",
      price: "$250",
      rating: 4.7,
      reviews: 156,
      description: "Learn traditional arts and crafts from master artisans.",
      highlights: ["Pottery Making", "Weaving Workshops", "Painting Classes", "Handicraft Creation"]
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cultural Experiences</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Immerse yourself in local traditions, heritage, and authentic cultural encounters
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Traditional Learning</h3>
              <p className="text-gray-600">Learn ancient skills and traditional practices</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Local Connections</h3>
              <p className="text-gray-600">Build meaningful relationships with local communities</p>
            </div>
            <div className="text-center">
              <Camera className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Authentic Moments</h3>
              <p className="text-gray-600">Capture genuine cultural experiences and traditions</p>
            </div>
            <div className="text-center">
              <Utensils className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Culinary Heritage</h3>
              <p className="text-gray-600">Discover local flavors and traditional cooking methods</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Cultural Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Connect with local communities and immerse yourself in authentic cultural traditions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={experience.image} alt={experience.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.name}</h3>
                  <p className="text-gray-600 mb-4">{experience.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{experience.duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{experience.reviews} reviews</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Experience Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight, index) => (
                        <span key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-amber-600">From {experience.price}</div>
                    <Link href={`/activities/cultural/${experience.id}`} className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                      Book Experience
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Immerse Yourself in Culture?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">Connect with local communities and experience authentic traditions that will enrich your understanding of the world</p>
          <Link href="/contact" className="bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Book Cultural Experience
          </Link>
        </div>
      </section>
    </div>
  )
}
