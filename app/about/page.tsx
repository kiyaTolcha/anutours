import { Award, Users, Globe, Heart, Shield, Star } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: "1000+", label: "Happy Travelers", icon: <Users className="h-8 w-8" /> },
    { number: "200+", label: "Tour Packages", icon: <Globe className="h-8 w-8" /> },
    { number: "50+", label: "Destinations", icon: <Heart className="h-8 w-8" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="h-8 w-8" /> }
  ]

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-primary-600" />,
      title: "Safety First",
      description: "Your safety is our top priority. We ensure all our tours meet the highest safety standards with experienced guides and reliable equipment."
    },
    {
      icon: <Star className="h-12 w-12 text-primary-600" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from tour planning to customer service, ensuring memorable experiences for all our travelers."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary-600" />,
      title: "Passion",
      description: "Our team is passionate about travel and sharing the beauty of amazing destinations with travelers from around the world."
    },
    {
      icon: <Users className="h-12 w-12 text-primary-600" />,
      title: "Community",
      description: "We believe in building lasting relationships with local communities and contributing to sustainable tourism practices."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80")'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Anutu Tours</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Creating unforgettable travel experiences with passion, expertise, and dedication to excellence
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-primary-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded with a passion for adventure and a deep love for exploration, Anutu Tours has been creating 
                  unforgettable travel experiences for over 15 years. What started as a small local tour company has 
                  grown into a trusted name in the travel industry.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our mission is simple: to provide travelers with authentic, safe, and memorable experiences that 
                  showcase the natural beauty, rich culture, and warm hospitality of the destinations we serve.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that travel has the power to transform lives, build bridges between cultures, and create 
                  lasting memories that will be cherished forever.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80"
                  alt="Our Team"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and make us the trusted choice for travelers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced and passionate team of travel experts is dedicated to making your journey unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-600">JD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
              <p className="text-primary-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                With over 15 years of experience in the travel industry, John founded Anutu Tours with a vision to create authentic travel experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-600">AS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alice Smith</h3>
              <p className="text-primary-600 font-medium mb-3">Head of Operations</p>
              <p className="text-gray-600">
                Alice ensures every tour runs smoothly with her attention to detail and passion for exceptional customer service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-600">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-primary-600 font-medium mb-3">Lead Guide</p>
              <p className="text-gray-600">
                Mike's extensive knowledge of local history and culture makes him one of our most beloved tour guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and travelers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-primary-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">TripAdvisor Excellence</h3>
              <p className="text-primary-100">#1 Tours & Activities</p>
            </div>

            <div className="text-center">
              <Award className="h-16 w-16 text-primary-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">World Travel Awards</h3>
              <p className="text-primary-100">Leading Tour Operator 2025</p>
            </div>

            <div className="text-center">
              <Award className="h-16 w-16 text-primary-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Travelers' Choice</h3>
              <p className="text-primary-100">Multiple Years Winner</p>
            </div>

            <div className="text-center">
              <Award className="h-16 w-16 text-primary-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tourism Commission</h3>
              <p className="text-primary-100">Best Tour Operator 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
