import { Star, Play } from 'lucide-react'
import blog4 from '../assets/images/blog-4.png'
import blog5 from '../assets/images/blog-5.png'
import blog6 from '../assets/images/blog-6.png'

const testimonials = [
  {
    id: 1,
    name: 'Rohan Mehta',
    role: 'Manager',
    rating: 5,
    text: 'The entire buying process was seamless. The car was exactly as described and the dealer was very professional.',
    image: blog4,
  },
  {
    id: 2,
    name: 'Anita',
    role: 'HR Business Partner',
    rating: 5,
    text: 'I found my dream car at an amazing price. The inspection report gave me full confidence in my purchase.',
    image: blog5,
  },
  {
    id: 3,
    name: 'Preet Singh',
    role: 'Corporate Trainer',
    rating: 5,
    text: 'HappyCars made car buying stress-free. The finance options were flexible and the delivery was on time.',
    image: blog6,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#F8F8F8] py-[57px]">
      <div className="max-w-[1440px] mx-auto px-[90px]">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-bold text-black leading-[1.22]">
            Real Owners. Real Stories. Real Confidence.
          </h2>
          <p className="text-[18px] text-[#494949] font-medium mt-2 max-w-[800px] mx-auto leading-[1.89]">
            Hear from customers who found their perfect certified car through HappyCars, honest experiences, transparent stories, and journeys that inspire trust.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex gap-[14px] justify-center">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-1 rounded-2xl overflow-hidden relative"
            >
              {/* Person photo */}
              <div className="w-full h-[396px] relative">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-2xl" />
                {/* Dark overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl" />

                {/* Play button */}
                <button className="absolute bottom-4 right-4 bg-white/30 backdrop-blur-sm rounded-full p-2">
                  <Play size={24} className="text-white ml-0.5" />
                </button>

                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  {/* Rating */}
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FDBB1A] text-[#FDBB1A]" />
                    ))}
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed mb-3">{t.text}</p>
                  <div>
                    <p className="font-semibold text-sm text-white">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
