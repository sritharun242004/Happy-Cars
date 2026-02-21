import { ArrowRight } from 'lucide-react'
import sponsoredCar from '../assets/images/homepage/sponsored-car.png'

export default function SponsoredAd() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Sponsored label */}
        <div className="px-4 sm:px-8 lg:px-[64px] pt-4 sm:pt-6 pb-2 sm:pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-[#9B9B9B]">Sponsored</span>
            <span className="text-xs sm:text-sm text-[#9B9B9B]">&bull;</span>
            <span className="text-xs sm:text-sm text-[#9B9B9B]">Ad</span>
          </div>
        </div>

        {/* Dark banner */}
        <div className="relative bg-black overflow-hidden h-[200px] sm:h-[260px] lg:h-[300px] mx-4 sm:mx-0 rounded-xl sm:rounded-none">
          {/* Car image on right */}
          <div className="absolute right-0 top-0 sm:top-[-51px] w-full sm:w-[60%] lg:w-[864px] h-full sm:h-[400px]">
            <div className="relative w-full h-full">
              <img
                src={sponsoredCar}
                alt="Premium car"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/16" />
            </div>
          </div>

          {/* Gradient overlay on left */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 sm:via-black/80 to-black/40 sm:to-transparent" />
          </div>

          {/* Content */}
          <div className="relative flex items-end sm:items-center h-full px-4 sm:px-8 lg:px-[64px] pb-5 sm:pb-0">
            <div className="max-w-[780px]">
              <h3 className="text-lg sm:text-2xl lg:text-[32px] font-bold text-white mb-1 leading-tight">
                Drive something extraordinary.
              </h3>
              <p className="text-white/60 text-xs sm:text-base mb-3 sm:mb-6 leading-relaxed max-w-[500px]">
                Experience the perfect blend of style, power, and certified performance.
              </p>
              <button className="flex items-center gap-2 bg-[#D4A843] text-black font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-[#C49A3A] transition-colors">
                Explore Featured Cars
                <span className="text-base sm:text-lg leading-none">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
