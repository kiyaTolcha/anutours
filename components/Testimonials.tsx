import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Diana K",
      date: "2025-05-27",
      verified: true,
      rating: 5,
      title: "Excellent chance to see the countryside and also important sites",
      review: "Dagi and George gave us an excellent tour to the Monastery and the Portuguese Bridge. Dagi answered all our many questions and George drove patiently and well in the challenging traffic. We had a delicious lunch near the Portuguese Bridge and even indulged in shoulder dancing. We saw the countryside and got a better idea of the country than just staying in the city. I would heartily recommend this tour.",
      tour: "City Discovery Tour"
    },
    {
      id: 2,
      name: "Michael C",
      date: "2025-05-22",
      verified: true,
      rating: 5,
      title: "Great Layover Tour",
      review: "Joseph was a wonderful guide. He was enthusiastic and friendly, as well as informative and insightful. We were in the city for a long layover and decided to spend the time seeing a little of the area. We stopped at Mount Entoto, the local market, the Ethnographic Museum, and the former estate. Joseph made sure we hit the highlights in a relatively short time, including a final stop at a lovely converted train station serving delicious coffee. I highly recommend this tour!",
      tour: "City Discovery Tour"
    },
    {
      id: 3,
      name: "Williams Family",
      date: "2025-05-21",
      verified: true,
      rating: 5,
      title: "Amazing Experience",
      review: "Abe was a great tour guide. Very knowledgeable and kind. George was our driver. He was patient and a very good driver. I think our experience exceeded my expectations. This was our first trip and I was nervous but it was fun and I learned a lot in one day about the history and culture.",
      tour: "Cultural Heritage Tour"
    },
    {
      id: 4,
      name: "Katie",
      date: "2025-05-21",
      verified: true,
      rating: 5,
      title: "Great day trip",
      review: "Yihun and Sis were great tour guides -- they had a lot of knowledge of the different sites and fun anecdotes. Good coffee, food and drinks along the way and quite a varied itinerary! 10/10 recommend",
      tour: "Day Trip Adventure"
    },
    {
      id: 5,
      name: "Emiliano F",
      date: "2025-05-20",
      verified: true,
      rating: 5,
      title: "I highly recommend this tour and its agency.",
      review: "The trip was great. The country is full of friendly people, beautiful natural parks, and rich history. Our guide was excellent and very knowledgeable. The accommodations were comfortable and the food was delicious. Everything was well organized and we felt safe throughout our journey.",
      tour: "National Park Adventure"
    },
    {
      id: 6,
      name: "Arti Kothari",
      date: "2024-11-23",
      verified: true,
      rating: 5,
      title: "Wonderful Experience",
      review: "I recently traveled with Anutu Tours and had a wonderful experience. From the start, they were easy to communicate with and made everything simple. Our guide was friendly and knowledgeable, sharing great insights about the country. The trip itself was well-organized, with a mix of historical sites and beautiful nature. The accommodations were comfortable, and transportation was smooth. Overall, it was a great experience!",
      tour: "Multi-Day Adventure"
    }
  ]

  const overallStats = {
    rating: 4.9,
    totalReviews: 1006,
    excellence: "EXCELLENT"
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">{overallStats.excellence}</div>
              <div className="flex items-center justify-center space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mt-1">Based on <strong>{overallStats.totalReviews} reviews</strong></p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <span>{testimonial.date}</span>
                    {testimonial.verified && (
                      <>
                        <span>•</span>
                        <span className="text-green-600 font-medium">Verified</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.tour}</p>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">{testimonial.title}</h5>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary-200" />
                  <p className="text-gray-600 text-sm leading-relaxed pl-4">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Read more reviews on TripAdvisor and other platforms</p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              TripAdvisor
            </a>
            <a
              href="#"
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Google Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
