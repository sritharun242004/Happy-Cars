import { useState } from 'react'
import { Search } from 'lucide-react'
import heroBg from '../assets/images/homepage/hero-bg.png'


const trustBadges = ['No obligation', 'Transparent fees', '30-day exchange policy']

export default function Hero() {
  const [aiSearch, setAiSearch] = useState(false)

  return (
    <section className="relative bg-white overflow-hidden">
      {/* City skyline watermark */}
      <div
        className="absolute left-0 right-0 hidden sm:block"
        style={{
          bottom: '-200px',
          height: '457px',
          opacity: 0.12,
          transform: 'translate(2px, 0px) scale(1.03)',
          transformOrigin: 'center bottom',
          zIndex: 1,
        }}
      >
        <img src={heroBg} alt="" className="w-full h-full object-fill" />
      </div>

      {/* Main content */}
      <div
        className="relative max-w-[1244px] mx-auto px-5 sm:px-6 flex flex-col items-center text-center pt-10 sm:pt-20 lg:pt-[122px] pb-8 sm:pb-16 lg:pb-[100px]"
        style={{ zIndex: 2 }}
      >
        {/* Rating */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FDBB1A" className="sm:w-[18px] sm:h-[18px]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span className="text-[#383838] font-medium text-xs sm:text-base">
            4.9/5 and 6,000+ reviews
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-bold leading-[1.2] sm:leading-[1.15] text-black max-w-[950px] text-[24px] sm:text-[36px] md:text-[44px] lg:text-[52px] mb-4 sm:mb-6 px-2 sm:px-0">
          Buy 100% Certified Cars, Backed by 30 Years of Trust Intelligence.
        </h1>

        {/* Trust badges */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2 sm:gap-8 mb-6 sm:mb-10">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 sm:w-[10px] sm:h-[10px] rounded-full bg-[#22C55E] inline-block shrink-0" />
              <span className="text-[#141414] font-medium text-xs sm:text-[15px]">{badge}</span>
            </div>
          ))}
        </div>

        {/* AI Search Bar */}
        <div className="w-full max-w-[1000px] bg-white/60 sm:bg-white/30 backdrop-blur-xl border border-[#E8E8E8] sm:border-white/40 rounded-xl sm:rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.06)] sm:shadow-[0px_8px_32px_rgba(0,0,0,0.08),inset_0px_1px_0px_rgba(255,255,255,0.6)] px-4 sm:px-7 py-3 sm:py-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1">
            <Search size={20} className="text-[#B0B0B0] shrink-0 sm:w-[22px] sm:h-[22px]" />
            <input
              type="text"
              placeholder="Need a car under 5 to 6 lakhs...."
              className="flex-1 text-[13px] sm:text-base text-[#515151] placeholder-[#A3A3A3] outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-between sm:justify-start border-t border-[#E8E8E8] sm:border-t-0 pt-3 sm:pt-0">
            <span className="text-[#141414] font-semibold text-[13px] sm:text-base">Search</span>
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setAiSearch(!aiSearch)}
                className={`w-10 sm:w-11 h-[22px] sm:h-6 rounded-full relative transition-colors ${aiSearch ? 'bg-[#452CFF]' : 'bg-[#E0E0E0]'}`}
              >
                <div className={`w-[18px] h-[18px] sm:w-5 sm:h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${aiSearch ? 'translate-x-[18px] sm:translate-x-[22px]' : 'translate-x-0.5'}`} />
              </button>
              <span className="text-[#A3A3A3] text-xs sm:text-base">AI search</span>
            </div>
          </div>
        </div>
      </div>

      {/* White curved frame - in normal flow to match layout height */}
      <div className="relative bg-white rounded-t-[24px] sm:rounded-t-[40px] h-8 sm:h-20 lg:h-[106px]" />
    </section>
  )
}
