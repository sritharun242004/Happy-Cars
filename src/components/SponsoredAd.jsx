import { ArrowRight } from 'lucide-react'
import sponsoredCar from '../assets/images/homepage/sponsored-car.png'

export default function SponsoredAd() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Sponsored label */}
        <div className="px-[64px] pt-6 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#9B9B9B]">Sponsored</span>
            <span className="text-sm text-[#9B9B9B]">&bull;</span>
            <span className="text-sm text-[#9B9B9B]">Ad</span>
          </div>
        </div>

        {/* Dark banner */}
        <div className="relative bg-black overflow-hidden h-[300px]">
          {/* Car image on right */}
          <div className="absolute right-0 top-[-51px] w-[864px] h-[400px]">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative flex items-center h-full px-[64px]">
            <div className="max-w-[780px]">
              <h3 className="text-[32px] font-bold text-white mb-1 leading-tight">
                Drive something extraordinary.
              </h3>
              <p className="text-white/60 text-base mb-6 leading-relaxed max-w-[500px]">
                Discover premium cars handpicked for an exceptional driving experience.
              </p>
              <button className="flex items-center gap-2 text-white font-semibold text-sm hover:opacity-80 transition-opacity">
                View Deals
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
