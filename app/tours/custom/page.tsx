import { MapPin, Clock, Users, Star, Palette, Target, Zap, Heart } from 'lucide-react'
import Link from 'next/link'

export default function CustomToursPage() {
  const customOptions = [
    {
      id: 1,
      name: "Romantic Getaway",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "Flexible",
      price: "Custom",
      rating: 4.9,
      reviews: 156,
      description: "Create the perfect romantic escape tailored to your preferences and special moments.",
      highlights: ["Private Tours", "Luxury Accommodations", "Romantic Dinners", "Couples Activities"]
    },
    {
      id: 2,
      name: "Family Adventure",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      duration: "Flexible",
      price: "Custom",
      rating: 4.8,
      reviews: 189,
      description: "Design the perfect family vacation with activities for all ages and interests.",
      highlights: ["Kid-Friendly Activities", "Educational Experiences", "Family Bonding", "Safe Adventures"]
    },
    {
      id: 3,
      name: "Photography Expedition",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "Flexible",
      price: "Custom",
      rating: 4.9,
      reviews: 234,
      description: "Craft a photography-focused journey to capture stunning landscapes and cultural moments.",
      highlights: ["Golden Hour Shoots", "Local Photography Guides", "Unique Locations", "Equipment Support"]
    },
    {
      id: 4,
      name: "Cultural Immersion",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "Flexible",
      price: "Custom",
      rating: 4.8,
      reviews: 198,
      description: "Deep dive into local cultures with authentic experiences and meaningful connections.",
      highlights: ["Local Homestays", "Cultural Workshops", "Traditional Meals", "Community Visits"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Share Your Vision",
      description: "Tell us about your dream trip, interests, and preferences"
    },
    {
      step: 2,
      title: "Custom Itinerary",
      description: "We create a personalized itinerary tailored to your needs"
    },
    {
      step: 3,
      title: "Refine & Book",
      description: "Review and adjust the details before confirming your trip"
    },
    {
      step: 4,
      title: "Enjoy Your Journey",
      description: "Experience your perfectly crafted adventure with our support"
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-rose-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Customized Tours</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Your dream trip, perfectly crafted just for you. Tell us your vision and we'll make it reality.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Palette className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fully Customizable</h3>
              <p className="text-gray-600">Every detail tailored to your preferences and interests</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Personal Touch</h3>
              <p className="text-gray-600">Unique experiences designed specifically for you</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Planning</h3>
              <p className="text-gray-600">Adjust itinerary, dates, and activities as needed</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dream Fulfillment</h3>
              <p className="text-gray-600">Turn your travel dreams into unforgettable reality</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Custom Tour Inspiration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Popular custom tour themes to spark your imagination</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customOptions.map((option) => (
              <div key={option.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={option.image} alt={option.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{option.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{option.duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{option.reviews} reviews</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Custom Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {option.highlights.map((highlight, index) => (
                        <span key={index} className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-rose-600">Custom Pricing</div>
                    <Link href="/contact" className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors font-medium">
                      Customize Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple steps to create your perfect custom tour</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Dream Trip?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">Let our travel experts craft the perfect custom tour tailored to your unique vision and preferences</p>
          <Link href="/contact" className="bg-white text-rose-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  )
}
