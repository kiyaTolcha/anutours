import { Award, Users, Star, Shield } from 'lucide-react'

export default function WhyTravelWithUs() {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-primary-600" />,
      title: "#1 Tours & Activities",
      subtitle: "Leading tour operator",
      description: "We are a leading tour and travel operator with years of experience and excellence in service."
    },
    {
      icon: <Award className="h-12 w-12 text-primary-600" />,
      title: "Award Winner 2025",
      subtitle: "Best Tour Operator",
      description: "Winner of multiple travel awards for excellence in service and customer satisfaction."
    },
    {
      icon: <Star className="h-12 w-12 text-primary-600" />,
      title: "Travelers' Choice",
      subtitle: "TripAdvisor Excellence",
      description: "Winner of the Travelers' Choice Awards for multiple years running."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary-600" />,
      title: "Best Service 2023",
      subtitle: "Customer Satisfaction",
      description: "Awarded for excellence in service delivery and outstanding customer satisfaction."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Travel With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our award-winning service, expert guides, and commitment to creating unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-primary-600 font-semibold mb-3">{feature.subtitle}</p>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Travelers Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">TripAdvisor</div>
              <div className="text-sm text-gray-500">#1 Tours & Activities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">World Travel Awards</div>
              <div className="text-sm text-gray-500">Leading Tour Operator</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">Travelers' Choice</div>
              <div className="text-sm text-gray-500">TripAdvisor Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">Tourism Commission</div>
              <div className="text-sm text-gray-500">Best Tour Operator 2023</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">Customer Reviews</div>
              <div className="text-sm text-gray-500">1000+ Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
