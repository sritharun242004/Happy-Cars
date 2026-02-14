import { useState } from 'react'
import { Search } from 'lucide-react'
import heroBg from '../assets/images/homepage/hero-bg.png'
import tickIcon from '../assets/images/tick-icon.svg'

const trustBadges = ['No obligation', 'Transparent fees', '30-day exchange policy']

export default function Hero() {
  const [aiSearch, setAiSearch] = useState(false)

  return (
    <section className="relative bg-white">
      {/* City skyline watermark at bottom - full width stretched */}
      <div className="absolute bottom-[80px] left-0 right-0 h-[320px] opacity-[0.12]">
        <img src={heroBg} alt="" className="w-full h-full object-fill" />
      </div>

      {/* Main content */}
      <div className="relative max-w-[1244px] mx-auto px-6 pt-[120px] pb-[100px] flex flex-col items-center text-center">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FDBB1A">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span className="text-[#383838] font-medium text-base">
            4.9/5 and 6,000+ reviews
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-[52px] font-bold leading-[1.15] text-black max-w-[950px] mb-6">
          Buy 100% Certified Cars, Backed by 30 Years of Trust Intelligence.
        </h1>

        {/* Trust badges */}
        <div className="flex items-center gap-8 mb-10">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <img src={tickIcon} alt="" className="w-[18px] h-[18px]" />
              <span className="text-[#141414] font-medium text-[15px]">{badge}</span>
            </div>
          ))}
        </div>

        {/* AI Search Bar */}
        <div className="w-full max-w-[1000px] bg-white/60 backdrop-blur-sm rounded-full shadow-[0px_3px_90px_rgba(68,47,194,0.08),0px_8px_60px_rgba(0,0,0,0.06)] px-7 py-5 flex items-center gap-4">
          <Search size={22} className="text-[#B0B0B0] shrink-0" />
          <input
            type="text"
            placeholder="Need a car under the budget of 5 to 6 lakhs...."
            className="flex-1 text-base text-[#515151] placeholder-[#A3A3A3] outline-none bg-transparent"
          />
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-[#141414] font-semibold text-base">Search</span>
            {/* Toggle switch */}
            <button
              onClick={() => setAiSearch(!aiSearch)}
              className={`w-11 h-6 rounded-full relative transition-colors ${aiSearch ? 'bg-[#452CFF]' : 'bg-[#E0E0E0]'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${aiSearch ? 'translate-x-[22px]' : 'translate-x-0.5'}`} />
            </button>
            <span className="text-[#A3A3A3] text-base">AI search</span>
          </div>
        </div>
      </div>

      {/* White curved frame at bottom - where skyline ends */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-white rounded-t-[40px]" />
    </section>
  )
}
