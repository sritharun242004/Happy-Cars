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
    <section className="bg-[#F8F8F8] py-8 sm:py-14 lg:py-[57px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[90px]">
        {/* Section Header */}
        <div className="text-center mb-5 sm:mb-10">
          <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-bold text-black leading-[1.25]">
            Real Owners. Real Stories. Real Confidence.
          </h2>
          <p className="text-xs sm:text-base lg:text-[18px] text-[#494949] font-medium mt-1.5 sm:mt-2 max-w-[800px] mx-auto leading-[1.6] sm:leading-[1.89]">
            Hear from customers who found their perfect certified car through HappyCars.
          </p>
        </div>

        {/* Testimonial Cards - horizontal scroll on mobile */}
        <div className="flex gap-3 sm:gap-[14px] overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-x-visible">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl sm:rounded-2xl overflow-hidden relative shrink-0 w-[75vw] sm:w-auto snap-start"
            >
              {/* Person photo */}
              <div className="w-full h-[280px] sm:h-[350px] lg:h-[396px] relative">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-xl sm:rounded-2xl" />
                {/* Dark overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-xl sm:rounded-2xl" />

                {/* Play button */}
                <button className="absolute bottom-4 right-3 sm:right-4 bg-white/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                  <Play size={20} className="text-white ml-0.5 sm:w-6 sm:h-6" />
                </button>

                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5">
                  {/* Rating */}
                  <div className="flex gap-0.5 mb-1.5 sm:mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#FDBB1A] text-[#FDBB1A] sm:w-[14px] sm:h-[14px]" />
                    ))}
                  </div>
                  <p className="text-[13px] sm:text-sm text-white/90 leading-relaxed mb-2 sm:mb-3 line-clamp-3">{t.text}</p>
                  <div>
                    <p className="font-semibold text-[13px] sm:text-sm text-white">{t.name}</p>
                    <p className="text-[11px] sm:text-xs text-white/60">{t.role}</p>
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
