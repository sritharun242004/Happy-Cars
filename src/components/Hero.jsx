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
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
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
        className="relative max-w-[1244px] mx-auto px-6 flex flex-col items-center text-center"
        style={{ paddingTop: '122px', paddingBottom: '100px', zIndex: 2 }}
      >
        {/* Rating */}
        <div className="flex items-center gap-2" style={{ marginBottom: '20px' }}>
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
        <h1
          className="font-bold leading-[1.15] text-black max-w-[950px]"
          style={{ fontSize: '52px', marginBottom: '24px' }}
        >
          Buy 100% Certified Cars, Backed by 30 Years of Trust Intelligence.
        </h1>

        {/* Trust badges */}
        <div className="flex items-center gap-8" style={{ marginBottom: '40px' }}>
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <span className="w-[10px] h-[10px] rounded-full bg-[#22C55E] inline-block shrink-0" />
              <span className="text-[#141414] font-medium text-[15px]">{badge}</span>
            </div>
          ))}
        </div>

        {/* AI Search Bar */}
        <div
          className="w-full bg-white/30 backdrop-blur-xl border border-white/40 rounded-full shadow-[0px_8px_32px_rgba(0,0,0,0.08),inset_0px_1px_0px_rgba(255,255,255,0.6)] px-7 py-5 flex items-center gap-4"
          style={{ maxWidth: '1000px' }}
        >
          <Search size={22} className="text-[#B0B0B0] shrink-0" />
          <input
            type="text"
            placeholder="Need a car under the budget of 5 to 6 lakhs...."
            className="flex-1 text-base text-[#515151] placeholder-[#A3A3A3] outline-none bg-transparent"
          />
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-[#141414] font-semibold text-base">Search</span>
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

      {/* White curved frame - in normal flow to match layout height */}
      <div className="relative bg-white rounded-t-[40px]" style={{ height: '106px' }} />
    </section>
  )
}
